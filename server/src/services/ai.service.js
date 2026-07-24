import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
});

function extractJson(text) {
  text = text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  const start = text.indexOf("{");
  const end = text.lastIndexOf("}");

  if (start === -1 || end === -1) {
    throw new Error("No JSON returned from Gemini.");
  }

  return JSON.parse(text.substring(start, end + 1));
}

export async function analyzeEmail(email) {
  const prompt = `
You are MailMind AI.

Analyze this email.

Return ONLY valid JSON.

{
  "summary":"",
  "priority":"High | Medium | Low",
  "sentiment":"Positive | Neutral | Negative",
  "category":"Work | Finance | Personal | Marketing | Updates | Social | Spam",
  "actionItems":[]
}

Email:

${email}
`;

  const result = await model.generateContent(prompt);

  return extractJson(result.response.text());
}

export async function generateReply(email) {
  const prompt = `
Write a professional reply to this email.

${email}

Return only the email reply.
`;

  const result = await model.generateContent(prompt);

  return result.response.text().trim();
}