import axios from "axios";

const API =
  import.meta.env.VITE_API_URL ||
  "http://localhost:8000/api";

const api = axios.create({
  baseURL: API,
  withCredentials: true,
});

export async function register(data: {
  name: string;
  email: string;
  password: string;
}) {
  const res = await api.post("/auth/register", data);
  return res.data;
}

export async function login(data: {
  email: string;
  password: string;
}) {
  const res = await api.post("/auth/login", data);
  return res.data;
}

export async function logout() {
  await api.post("/auth/logout");
}

export async function getCurrentUser() {
  const res = await api.get("/auth/me");
  return res.data;
}