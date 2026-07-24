const cards = [
  {
    title: "Emails Processed",
    value: "12,487",
    color: "text-indigo-400",
  },
  {
    title: "AI Summaries",
    value: "9,842",
    color: "text-green-400",
  },
  {
    title: "Spam Detected",
    value: "378",
    color: "text-red-400",
  },
  {
    title: "High Priority",
    value: "92",
    color: "text-yellow-400",
  },
];

export default function AnalyticsCards() {
  return (
    <div className="grid grid-cols-4 gap-6">
      {cards.map((card) => (
        <div
          key={card.title}
          className="rounded-2xl border border-slate-700 bg-slate-900 p-6"
        >
          <p className="text-slate-400">{card.title}</p>

          <h2 className={`mt-3 text-4xl font-bold ${card.color}`}>
            {card.value}
          </h2>
        </div>
      ))}
    </div>
  );
}