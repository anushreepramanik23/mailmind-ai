import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function LoginPage() {
  const navigate = useNavigate();

  const { loginUser } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setError("");

    try {
      setLoading(true);

      await loginUser({
        email,
        password,
      });

      navigate("/dashboard");
    } catch (err: any) {
      setError(
        err?.response?.data?.message ||
          "Invalid email or password."
      );
    } finally {
      setLoading(false);
    }
  }

  function handleGoogleLogin() {
    window.location.href =
      "http://localhost:8000/api/auth/google";
  }

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6">

      <div className="w-full max-w-md rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl p-8">

        <div className="text-center mb-8">

          <h1 className="text-4xl font-bold text-white">
            MailMind AI
          </h1>

          <p className="text-slate-400 mt-2">
            Sign in to continue
          </p>

        </div>

        {error && (
          <div className="mb-5 rounded-lg bg-red-500/15 border border-red-500 text-red-400 px-4 py-3">
            {error}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <div>

            <label className="block text-sm text-slate-300 mb-2">
              Email
            </label>

            <input
              type="email"
              required
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              className="w-full rounded-lg bg-slate-800 border border-slate-700 px-4 py-3 text-white outline-none focus:border-blue-500"
              placeholder="Enter your email"
            />

          </div>

          <div>

            <label className="block text-sm text-slate-300 mb-2">
              Password
            </label>

            <input
              type="password"
              required
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              className="w-full rounded-lg bg-slate-800 border border-slate-700 px-4 py-3 text-white outline-none focus:border-blue-500"
              placeholder="Enter your password"
            />

          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-blue-600 hover:bg-blue-700 transition py-3 text-white font-semibold disabled:opacity-60"
          >
            {loading
              ? "Signing In..."
              : "Login"}
          </button>
        </form>

        <div className="my-6 flex items-center">

          <div className="flex-1 border-t border-slate-700" />

          <span className="px-4 text-slate-500 text-sm">
            OR
          </span>

          <div className="flex-1 border-t border-slate-700" />

        </div>

        <button
          onClick={handleGoogleLogin}
          className="w-full rounded-lg border border-slate-700 py-3 text-white hover:bg-slate-800 transition"
        >
          Continue with Google
        </button>

        <p className="mt-8 text-center text-slate-400">

          Don't have an account?{" "}

          <Link
            to="/register"
            className="text-blue-500 hover:text-blue-400 font-medium"
          >
            Register
          </Link>

        </p>

      </div>

    </div>
  );
}