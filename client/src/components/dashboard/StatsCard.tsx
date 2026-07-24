import type { ReactNode } from "react";
import {
  Mail,
  MailOpen,
  Sparkles,
  AlertTriangle,
  TrendingUp,
} from "lucide-react";

type StatsCardProps = {
  title: string;
  value: string;
  change: string;
  color: string;
};

const icons: Record<string, ReactNode> = {
  Inbox: <Mail size={24} />,
  Unread: <MailOpen size={24} />,
  "AI Summaries": <Sparkles size={24} />,
  Important: <AlertTriangle size={24} />,
};

export default function StatsCard({
  title,
  value,
  change,
  color,
}: StatsCardProps) {
  return (
    <div className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500 hover:shadow-indigo-500/10">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-slate-400">
            {title}
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white">
            {value}
          </h2>
        </div>

        <div className="rounded-xl bg-indigo-500/10 p-3 text-indigo-400 transition group-hover:scale-110">
          {icons[title] ?? <TrendingUp size={24} />}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <p className={`text-sm font-semibold ${color}`}>
          {change} this week
        </p>

        <div className="h-2 w-2 rounded-full bg-emerald-400" />
      </div>
    </div>
  );
}