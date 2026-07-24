import prisma from "../config/prisma.js";

import {
  registerUser,
  loginUser,
} from "../services/auth.service.js";

export async function register(req, res) {
  try {
    const { name, email, password } = req.body;

    const { user, token } = await registerUser(
      name,
      email,
      password
    );

    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "lax",
      secure: false,
    });

    res.status(201).json({
      success: true,
      user,
      token,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
}

export async function login(req, res) {
  try {
    const { email, password } = req.body;

    const { user, token } = await loginUser(
      email,
      password
    );

    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "lax",
      secure: false,
    });

    res.json({
      success: true,
      user,
      token,
    });
  } catch (err) {
    res.status(401).json({
      success: false,
      message: err.message,
    });
  }
}

export async function getCurrentUser(
  req,
  res
) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: req.user.id,
      },
      select: {
        id: true,
        name: true,
        email: true,
        avatar: true,
      },
    });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.json(user);
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
}

export function logout(req, res) {
  res.clearCookie("token");

  req.logout?.(() => {});

  res.json({
    success: true,
    message: "Logged out successfully",
  });
}