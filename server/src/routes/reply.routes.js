import express from "express";
import { reply } from "../controllers/reply.controller.js";

const router = express.Router();

router.post("/", reply);

export default router;