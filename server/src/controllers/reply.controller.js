import { generateReply } from "../services/ai.service.js";

export async function reply(req, res) {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email content is required.",
      });
    }

    const reply = await generateReply(email);

    return res.json({
      success: true,
      reply,
    });
  } catch (error) {
    console.error("Reply Controller Error:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}