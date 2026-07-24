import axios from "axios";

const API =
  import.meta.env.VITE_API_URL || "http://localhost:8000/api";

const api = axios.create({
  baseURL: API,
  withCredentials: true,
});

export async function getInbox() {
  const { data } = await api.get("/gmail/inbox");
  return data.emails;
}

export async function getMessage(id: string) {
  const { data } = await api.get(`/gmail/message/${id}`);
  return data.message;
}

export async function searchEmails(query: string) {
  const { data } = await api.get("/gmail/search", {
    params: { q: query },
  });

  return data.emails;
}