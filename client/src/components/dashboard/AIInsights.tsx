type AIResult = {
  summary: string;
  priority: string;
  sentiment: string;
  category: string;
  actionItems: string[];
};

type Props = {
  result?: AIResult;
};

const defaultResult: AIResult = {
  summary: "Select an email to generate AI insights.",
  priority: "Medium",
  sentiment: "Neutral",
  category: "Updates",
  actionItems: [],
};

export default function AIInsights({ result = defaultResult }: Props) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="mb-6 text-xl font-bold text-white">
        AI Insights
      </h2>

      <div className="space-y-6">
        <div>
          <h3 className="mb-2 text-sm font-semibold text-indigo-400">
            Summary
          </h3>

          <p className="text-slate-300">
            {result.summary}
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <p className="text-xs text-slate-500">Priority</p>
            <p className="mt-1 font-semibold text-white">
              {result.priority}
            </p>
          </div>

          <div>
            <p className="text-xs text-slate-500">Sentiment</p>
            <p className="mt-1 font-semibold text-white">
              {result.sentiment}
            </p>
          </div>

          <div>
            <p className="text-xs text-slate-500">Category</p>
            <p className="mt-1 font-semibold text-white">
              {result.category}
            </p>
          </div>
        </div>

        <div>
          <h3 className="mb-2 text-sm font-semibold text-indigo-400">
            Action Items
          </h3>

          {result.actionItems.length === 0 ? (
            <p className="text-slate-400">
              No action items detected.
            </p>
          ) : (
            <ul className="list-disc space-y-2 pl-5 text-slate-300">
              {result.actionItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}