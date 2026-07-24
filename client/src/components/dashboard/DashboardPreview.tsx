import { motion } from "framer-motion";

export default function DashboardPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="mx-auto mt-24 max-w-6xl rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-2xl"
    >
      <div className="grid gap-6 md:grid-cols-4">

        <div className="rounded-xl bg-slate-800 p-6">
          <p className="text-slate-400">Emails Today</p>
          <h2 className="mt-2 text-4xl font-bold">248</h2>
        </div>

        <div className="rounded-xl bg-slate-800 p-6">
          <p className="text-slate-400">AI Summaries</p>
          <h2 className="mt-2 text-4xl font-bold">196</h2>
        </div>

        <div className="rounded-xl bg-slate-800 p-6">
          <p className="text-slate-400">Urgent</p>
          <h2 className="mt-2 text-4xl font-bold text-red-400">
            14
          </h2>
        </div>

        <div className="rounded-xl bg-slate-800 p-6">
          <p className="text-slate-400">AI Replies</p>
          <h2 className="mt-2 text-4xl font-bold text-green-400">
            102
          </h2>
        </div>

      </div>
    </motion.div>
  );
}