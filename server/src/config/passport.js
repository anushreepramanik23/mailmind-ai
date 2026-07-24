import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import prisma from "./prisma.js";

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL:
        process.env.GOOGLE_CALLBACK_URL ||
        "http://localhost:8000/api/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const email = profile.emails?.[0]?.value;

        if (!email) {
          return done(new Error("Google account has no email."));
        }

        let user = await prisma.user.findUnique({
          where: { email },
        });

        if (!user) {
          user = await prisma.user.create({
            data: {
              name: profile.displayName,
              email,
              avatar: profile.photos?.[0]?.value ?? "",
              provider: "google",
            },
          });
        }

        const account = await prisma.emailAccount.findFirst({
          where: {
            userId: user.id,
            provider: "google",
          },
        });

        if (!account) {
          await prisma.emailAccount.create({
            data: {
              userId: user.id,
              provider: "google",
              email,
              accessToken,
              refreshToken,
            },
          });
        } else {
          await prisma.emailAccount.update({
            where: {
              id: account.id,
            },
            data: {
              accessToken,
              refreshToken:
                refreshToken ?? account.refreshToken,
            },
          });
        }

        return done(null, {
          id: user.id,
          email: user.email,
        });
      } catch (error) {
        console.error(error);
        return done(error, null);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id },
    });

    done(null, user);
  } catch (err) {
    done(err);
  }
});

export default passport;