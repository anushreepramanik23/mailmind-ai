import { google } from "googleapis";
import prisma from "../config/prisma.js";

async function getAccount(userId) {
  const account = await prisma.emailAccount.findFirst({
    where: {
      userId,
      provider: "google",
    },
  });

  if (!account) {
    throw new Error("Google account not connected.");
  }

  return account;
}

export async function getGmailClient(userId) {
  const account = await getAccount(userId);

  const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.GOOGLE_CALLBACK_URL
  );

  oauth2Client.setCredentials({
    access_token: account.accessToken,
    refresh_token: account.refreshToken,
  });

  oauth2Client.on("tokens", async (tokens) => {
    await prisma.emailAccount.update({
      where: { id: account.id },
      data: {
        accessToken: tokens.access_token ?? account.accessToken,
        refreshToken: tokens.refresh_token ?? account.refreshToken,
      },
    });
  });

  return google.gmail({
    version: "v1",
    auth: oauth2Client,
  });
}

function getHeader(headers, name) {
  return (
    headers.find(
      (header) => header.name.toLowerCase() === name.toLowerCase()
    )?.value || ""
  );
}

export async function getInbox(userId, maxResults = 20) {
  const gmail = await getGmailClient(userId);

  const { data } = await gmail.users.messages.list({
    userId: "me",
    maxResults,
    labelIds: ["INBOX"],
  });

  if (!data.messages) return [];

  const emails = await Promise.all(
    data.messages.map(async ({ id }) => {
      const { data: message } = await gmail.users.messages.get({
        userId: "me",
        id,
        format: "metadata",
        metadataHeaders: ["From", "Subject", "Date"],
      });

      return {
        id: message.id,
        threadId: message.threadId,
        snippet: message.snippet || "",
        from: getHeader(message.payload.headers, "From"),
        subject: getHeader(message.payload.headers, "Subject"),
        date: getHeader(message.payload.headers, "Date"),
        labels: message.labelIds || [],
      };
    })
  );

  return emails;
}

export async function getMessage(userId, messageId) {
  const gmail = await getGmailClient(userId);

  const { data } = await gmail.users.messages.get({
    userId: "me",
    id: messageId,
    format: "full",
  });

  return data;
}

export async function searchEmails(userId, query) {
  const gmail = await getGmailClient(userId);

  const { data } = await gmail.users.messages.list({
    userId: "me",
    q: query,
    maxResults: 20,
  });

  return data.messages || [];
}