import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Button from "../ui/Button";
import Badge from "../ui/Badge";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-32">

      {/* Background Blur */}

      <div className="absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-indigo-600/20 blur-[150px]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-center text-center"
      >
        <Badge>

          Enterprise AI Email Intelligence

        </Badge>

        <h1 className="mt-10 max-w-5xl text-7xl font-black leading-tight">

          Stop Reading Emails.

          <br />

          Let AI Think For You.

        </h1>

        <p className="mt-8 max-w-3xl text-xl text-slate-400">

          AI summarizes, prioritizes, drafts replies,
          extracts tasks, and automates enterprise
          communication.

        </p>

        <div className="mt-12 flex gap-6">

          <Link to="/register">

            <Button>

              Get Started

            </Button>

          </Link>

          <Link to="/login">

            <Button variant="outline">

              Live Demo

            </Button>

          </Link>

        </div>

      </motion.div>

    </section>
  );
}