import express from "express";
import passport from "passport";

import {
  register,
  login,
  logout,
  getCurrentUser,
} from "../controllers/auth.controller.js";

import { authenticate } from "../middleware/auth.middleware.js";

const router = express.Router();

/* -------------------- */
/* Local Authentication */
/* -------------------- */

router.post("/register", register);

router.post("/login", login);

router.post("/logout", logout);

router.get(
  "/me",
  authenticate,
  getCurrentUser
);

/* ---------------- */
/* Google OAuth     */
/* ---------------- */

router.get(
  "/google",
  passport.authenticate("google", {
    scope: [
      "profile",
      "email",
      "https://www.googleapis.com/auth/gmail.readonly",
    ],
  })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect:
      process.env.CLIENT_URL + "/login",
  }),
  (req, res) => {
    res.redirect(
      process.env.CLIENT_URL +
        "/dashboard"
    );
  }
);

export default router;