import { Link } from "react-router-dom";
import {
  Inbox,
  Sparkles,
  BarChart3,
  Settings,
} from "lucide-react";

const actions = [
  {
    title: "Inbox",
    icon: Inbox,
    link: "/inbox",
    color: "bg-blue-500/10 text-blue-400",
  },
  {
    title: "AI Assistant",
    icon: Sparkles,
    link: "/assistant",
    color: "bg-indigo-500/10 text-indigo-400",
  },
  {
    title: "Analytics",
    icon: BarChart3,
    link: "/analytics",
    color: "bg-green-500/10 text-green-400",
  },
  {
    title: "Settings",
    icon: Settings,
    link: "/settings",
    color: "bg-orange-500/10 text-orange-400",
  },
];

export default function QuickActions() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {actions.map((item) => {
        const Icon = item.icon;

        return (
          <Link
            key={item.title}
            to={item.link}
            className="rounded-3xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-2 hover:border-indigo-500"
          >
            <div className={`w-fit rounded-2xl p-4 ${item.color}`}>
              <Icon size={30} />
            </div>

            <h2 className="mt-6 text-xl font-bold">
              {item.title}
            </h2>

            <p className="mt-2 text-slate-400">
              Open {item.title}
            </p>
          </Link>
        );
      })}
    </div>
  );
}