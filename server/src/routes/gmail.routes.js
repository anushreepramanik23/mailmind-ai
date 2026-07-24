import express from "express";
import { authenticate } from "../middleware/auth.middleware.js";
import {
  inbox,
  email,
  search,
} from "../controllers/gmail.controller.js";

const router = express.Router();

router.get("/inbox",authenticate, inbox);

router.get("/message/:id", authenticate, email);

router.get("/search", authenticate, search);

export default router;