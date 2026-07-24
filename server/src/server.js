import dotenv from "dotenv";
dotenv.config();

import app from "./app.js";

const PORT = process.env.PORT || 8000;

console.log("Gemini Key Loaded:", !!process.env.GEMINI_API_KEY);

app.listen(PORT, () => {
  console.log("=================================");
  console.log("SERVER STARTED");
  console.log("PORT:", PORT);
  console.log("=================================");
});