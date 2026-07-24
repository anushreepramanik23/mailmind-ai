import {
  Search,
  Filter,
  RefreshCw,
  Sparkles,
  SlidersHorizontal,
} from "lucide-react";

export default function InboxHeader() {
  return (
    <section className="mb-8 rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-lg">

      {/* Top Row */}
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

        <div>
          <h1 className="text-4xl font-bold text-white">
            📥 Inbox
          </h1>

          <p className="mt-2 text-slate-400">
            Organize, summarize and reply to emails with AI assistance.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">

          <span className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-sm font-medium text-indigo-300">
            ✨ Gemini Online
          </span>

          <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-300">
            126 Emails
          </span>

          <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-2 text-sm font-medium text-yellow-300">
            18 Unread
          </span>

        </div>

      </div>

      {/* Toolbar */}

      <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        {/* Search */}

        <div className="flex w-full max-w-xl items-center gap-3 rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 focus-within:border-indigo-500">

          <Search
            size={18}
            className="text-slate-400"
          />

          <input
            type="text"
            placeholder="Search emails..."
            className="w-full bg-transparent text-white placeholder:text-slate-500 outline-none"
          />

        </div>

        {/* Actions */}

        <div className="flex flex-wrap gap-3">

          <button className="flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 transition hover:border-indigo-500">
            <Filter size={18} />
            Filters
          </button>

          <button className="flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 transition hover:border-indigo-500">
            <SlidersHorizontal size={18} />
            Categories
          </button>

          <button className="flex items-center gap-2 rounded-xl border border-indigo-600 bg-indigo-600 px-4 py-3 font-medium transition hover:bg-indigo-700">
            <RefreshCw size={18} />
            Refresh
          </button>

          <button className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-4 py-3 font-medium transition hover:opacity-90">
            <Sparkles size={18} />
            Analyze Inbox
          </button>

        </div>

      </div>

    </section>
  );
}