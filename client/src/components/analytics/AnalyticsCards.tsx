import {
  Mail,
  MailOpen,
  Sparkles,
  TrendingUp,
} from "lucide-react";

const stats = [
  {
    title: "Total Emails",
    value: "126",
    icon: Mail,
    color: "text-indigo-400",
  },
  {
    title: "Unread",
    value: "18",
    icon: MailOpen,
    color: "text-yellow-400",
  },
  {
    title: "AI Summaries",
    value: "92",
    icon: Sparkles,
    color: "text-green-400",
  },
  {
    title: "Reply Rate",
    value: "89%",
    icon: TrendingUp,
    color: "text-pink-400",
  },
];

export default function AnalyticsCards() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      {stats.map((item) => {

        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="rounded-3xl border border-slate-800 bg-slate-900 p-6 hover:border-indigo-500 transition"
          >
            <div className="flex justify-between">

              <div>

                <p className="text-slate-400">
                  {item.title}
                </p>

                <h2 className="mt-3 text-4xl font-bold">
                  {item.value}
                </h2>

              </div>

              <Icon
                size={34}
                className={item.color}
              />

            </div>

          </div>
        );

      })}

    </div>
  );
}