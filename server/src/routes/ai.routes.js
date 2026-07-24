import express from "express";
import {
  summarizeEmail,
  smartReply,
} from "../controllers/ai.controller.js";

const router = express.Router();

router.post("/summarize", summarizeEmail);
router.post("/reply", smartReply);

export default router;