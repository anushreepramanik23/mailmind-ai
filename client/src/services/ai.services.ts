import axios from "axios";

const API =
  import.meta.env.VITE_API_URL ||
  "http://localhost:8000/api";

const api = axios.create({
  baseURL: API,
  withCredentials: true,
});

export async function summarizeEmail(email: string) {
  const { data } = await api.post("/ai/summarize", {
    email,
  });

  return data.summary;
}

export async function generateReplies(email: string) {
  const { data } = await api.post(
  "/reply",
  {
    email,
  }
);

  return data.reply;
}