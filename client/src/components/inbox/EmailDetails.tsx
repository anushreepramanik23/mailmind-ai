import { useEffect, useMemo, useState } from "react";
import {
  Sparkles,
  Bot,
  Clock3,
  AlertTriangle,
  Tag,
  Smile,
  Copy,
  CheckCircle2,
} from "lucide-react";

import {
  summarizeEmail,
  generateReplies,
} from "../../services/ai.services";

import type { Email } from "../../pages/InboxPage";

interface Props {
  email: Email;
}

export default function EmailDetails({ email }: Props) {
  const [summary, setSummary] = useState("");
  const [replies, setReplies] = useState("");
  const [emailBody, setEmailBody] = useState(email.snippet);

  const [loadingEmail, setLoadingEmail] = useState(false);
  const [loadingSummary, setLoadingSummary] = useState(false);
  const [loadingReplies, setLoadingReplies] = useState(false);

  const [copied, setCopied] = useState(false);

  useEffect(() => {
    loadEmail();
  }, [email.id]);

  const loadEmail = async () => {
    try {
      setLoadingEmail(true);

      const res = await fetch(
        `http://localhost:8000/api/gmail/message/${email.id}`,
        {
          credentials: "include",
        }
      );

      const data = await res.json();

      setEmailBody(data.body || email.snippet);
      setSummary("");
      setReplies("");
    } catch (err) {
      console.error(err);
      setEmailBody(email.snippet);
    } finally {
      setLoadingEmail(false);
    }
  };

  const handleSummary = async () => {
    try {
      setLoadingSummary(true);

      const result = await summarizeEmail(emailBody);

      setSummary(result.summary);
    } catch (err) {
      console.error(err);
      alert("Failed to generate summary");
    } finally {
      setLoadingSummary(false);
    }
  };

  const handleReplies = async () => {
    try {
      setLoadingReplies(true);

      const result = await generateReplies(emailBody);

      setReplies(result.reply);
    } catch (err) {
      console.error(err);
      alert("Failed to generate replies");
    } finally {
      setLoadingReplies(false);
    }
  };

  const copyReplies = async () => {
    await navigator.clipboard.writeText(replies);
    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
  };

  const aiInfo = useMemo(() => {
    const text = emailBody.toLowerCase();

    const urgent =
      text.includes("urgent") ||
      text.includes("asap") ||
      text.includes("immediately");

    return {
      priority: urgent ? "High" : "Normal",
      sentiment: urgent ? "Urgent" : "Neutral",
      confidence: "97%",
      readingTime: `${Math.max(
        1,
        Math.ceil(emailBody.split(" ").length / 200)
      )} min`,
    };
  }, [emailBody]);

  return (
    <div className="h-full overflow-y-auto rounded-3xl bg-slate-900 p-8">

      <div className="border-b border-slate-800 pb-6">

        <h1 className="text-3xl font-bold text-white">
          {email.subject || "(No Subject)"}
        </h1>

        <div className="mt-4 flex flex-wrap gap-3">

          <span className="rounded-full bg-slate-800 px-4 py-2 text-sm">
            {email.from}
          </span>

          <span className="rounded-full bg-indigo-500/10 px-4 py-2 text-sm text-indigo-300">
            Gmail
          </span>

          <span className="rounded-full bg-red-500/10 px-4 py-2 text-sm text-red-300">
            {aiInfo.priority} Priority
          </span>

          <span className="rounded-full bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300">
            {aiInfo.readingTime}
          </span>

        </div>

      </div>

      <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-950 p-6 whitespace-pre-wrap leading-8 text-slate-300">

        {loadingEmail ? "Loading email..." : emailBody}

      </div>

      <div className="mt-8 rounded-2xl border border-indigo-500/20 bg-indigo-500/5 p-6">

        <div className="mb-5 flex items-center gap-2">

          <Sparkles className="text-indigo-400" />

          <h2 className="text-xl font-bold">
            AI Analysis
          </h2>

        </div>

        <div className="grid gap-4 md:grid-cols-2">

          <Info
            icon={<AlertTriangle size={18} />}
            title="Priority"
            value={aiInfo.priority}
          />

          <Info
            icon={<Smile size={18} />}
            title="Sentiment"
            value={aiInfo.sentiment}
          />

          <Info
            icon={<Clock3 size={18} />}
            title="Reading Time"
            value={aiInfo.readingTime}
          />

          <Info
            icon={<Tag size={18} />}
            title="AI Confidence"
            value={aiInfo.confidence}
          />

        </div>

      </div>

      <div className="mt-8 flex flex-wrap gap-4">

        <button
          onClick={handleSummary}
          disabled={loadingSummary}
          className="rounded-xl bg-indigo-600 px-6 py-3 font-semibold hover:bg-indigo-700"
        >
          {loadingSummary ? "Generating..." : "✨ Generate Summary"}
        </button>

        <button
          onClick={handleReplies}
          disabled={loadingReplies}
          className="rounded-xl bg-violet-600 px-6 py-3 font-semibold hover:bg-violet-700"
        >
          {loadingReplies ? "Generating..." : "🤖 Generate Replies"}
        </button>
              </div>

      {summary && (
        <div className="mt-8 rounded-2xl border border-indigo-500/20 bg-slate-950 p-6">
          <h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-indigo-400">
            <Sparkles />
            AI Summary
          </h2>

          <p className="whitespace-pre-wrap leading-8 text-slate-300">
            {summary}
          </p>
        </div>
      )}

      {replies && (
        <div className="mt-8 rounded-2xl border border-violet-500/20 bg-slate-950 p-6">

          <div className="mb-5 flex items-center justify-between">

            <h2 className="flex items-center gap-2 text-xl font-bold text-violet-400">
              <Bot />
              Suggested Replies
            </h2>

            <button
              onClick={copyReplies}
              className="flex items-center gap-2 rounded-lg bg-slate-800 px-3 py-2 text-sm transition hover:bg-slate-700"
            >
              {copied ? (
                <>
                  <CheckCircle2 size={16} />
                  Copied
                </>
              ) : (
                <>
                  <Copy size={16} />
                  Copy
                </>
              )}
            </button>

          </div>

          <pre className="whitespace-pre-wrap font-sans leading-8 text-slate-300">
            {replies}
          </pre>

        </div>
      )}

    </div>
  );
}

function Info({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-xl bg-slate-900 p-4">

      <div className="mb-2 flex items-center gap-2 text-indigo-400">
        {icon}
        <span className="text-sm font-semibold">
          {title}
        </span>
      </div>

      <p className="text-lg font-bold text-white">
        {value}
      </p>

    </div>
  );
}