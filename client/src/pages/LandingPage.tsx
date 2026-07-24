import { Link } from "react-router-dom";
import {
  Sparkles,
  Mail,
  Brain,
  BarChart3,
  Shield,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Email Summary",
    desc: "Generate concise summaries of lengthy emails using Google Gemini.",
  },
  {
    icon: Mail,
    title: "Smart Reply Generator",
    desc: "Create professional replies instantly with AI assistance.",
  },
  {
    icon: BarChart3,
    title: "Inbox Analytics",
    desc: "Visualize email activity, categories, and AI productivity insights.",
  },
  {
    icon: Shield,
    title: "Secure Authentication",
    desc: "JWT authentication with protected routes and secure APIs.",
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Navbar */}

      <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">

        <div className="flex items-center gap-3">

          <Sparkles className="text-indigo-400" size={30} />

          <h1 className="text-2xl font-bold">
            MailMind AI
          </h1>

        </div>

        <div className="flex gap-4">

          <Link
            to="/login"
            className="rounded-xl border border-slate-700 px-5 py-2 hover:bg-slate-900"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="rounded-xl bg-indigo-600 px-5 py-2 hover:bg-indigo-700"
          >
            Get Started
          </Link>

        </div>

      </nav>

      {/* Hero */}

      <section className="mx-auto flex max-w-7xl flex-col items-center px-8 py-24 text-center">

        <div className="rounded-full bg-indigo-500/10 px-5 py-2 text-indigo-300">
          ✨ Powered by Google Gemini
        </div>

        <h1 className="mt-8 max-w-5xl text-6xl font-extrabold leading-tight">
          Manage Your Inbox with
          <span className="text-indigo-400">
            {" "}Artificial Intelligence
          </span>
        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-400">
          MailMind AI helps you summarize emails, generate smart replies,
          analyze inbox trends, and improve productivity with AI-powered tools.
        </p>

        <div className="mt-12 flex gap-5">

          <Link
            to="/register"
            className="flex items-center gap-2 rounded-2xl bg-indigo-600 px-8 py-4 text-lg font-semibold hover:bg-indigo-700"
          >
            Get Started
            <ArrowRight size={20} />
          </Link>

          <Link
            to="/login"
            className="rounded-2xl border border-slate-700 px-8 py-4 text-lg hover:bg-slate-900"
          >
            Login
          </Link>

        </div>

      </section>

      {/* Features */}

      <section className="mx-auto max-w-7xl px-8 pb-20">

        <h2 className="mb-12 text-center text-4xl font-bold">
          Everything You Need
        </h2>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {features.map((item) => {

            const Icon = item.icon;

            return (

              <div
                key={item.title}
                className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition hover:-translate-y-2 hover:border-indigo-500"
              >

                <div className="mb-6 rounded-2xl bg-indigo-500/10 p-4 w-fit">

                  <Icon
                    size={30}
                    className="text-indigo-400"
                  />

                </div>

                <h3 className="text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-400">
                  {item.desc}
                </p>

              </div>

            );

          })}

        </div>

      </section>

      {/* Why Choose */}

      <section className="mx-auto max-w-6xl px-8 py-20">

        <div className="rounded-3xl bg-slate-900 p-12">

          <h2 className="text-center text-4xl font-bold">
            Why MailMind AI?
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">

            {[
              "AI-powered email summaries",
              "Professional smart replies",
              "Beautiful analytics dashboard",
              "Responsive modern interface",
              "Secure authentication",
              "Built using React + Node + Gemini",
            ].map((item) => (

              <div
                key={item}
                className="flex items-center gap-4 rounded-xl bg-slate-950 p-5"
              >

                <CheckCircle2 className="text-green-400" />

                <span>{item}</span>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="py-20 text-center">

        <h2 className="text-5xl font-bold">
          Ready to Supercharge Your Inbox?
        </h2>

        <p className="mt-6 text-xl text-slate-400">
          Experience AI-powered email productivity today.
        </p>

        <Link
          to="/register"
          className="mt-10 inline-flex items-center gap-2 rounded-2xl bg-indigo-600 px-10 py-5 text-lg font-semibold hover:bg-indigo-700"
        >
          Start for Free
          <ArrowRight />
        </Link>

      </section>

      {/* Footer */}

      <footer className="border-t border-slate-800 py-8 text-center text-slate-500">
        © 2026 MailMind AI • Built with React, Node.js, Express, MongoDB & Google Gemini
      </footer>

    </div>
  );
}