export default function AISummary() {
  return (
    <div className="mt-6 rounded-2xl border border-indigo-500/30 bg-slate-900 p-6">
      <h2 className="mb-4 text-xl font-bold text-indigo-400">
        AI Analysis
      </h2>

      <div className="space-y-5">

        <div>
          <p className="text-sm text-slate-400">Summary</p>
          <p className="mt-2">
            Your package has been shipped and will arrive tomorrow before
            9 PM.
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-400">Sentiment</p>

          <span className="mt-2 inline-block rounded-full bg-green-600 px-3 py-1 text-sm">
            Positive
          </span>
        </div>

        <div>
          <p className="text-sm text-slate-400">Priority</p>

          <span className="mt-2 inline-block rounded-full bg-yellow-500 px-3 py-1 text-black">
            Medium
          </span>
        </div>

        <div>
          <p className="text-sm text-slate-400">Action Required</p>

          <p className="mt-2">
            No action needed. Wait for delivery.
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-400">Suggested Reply</p>

          <div className="mt-2 rounded-xl bg-slate-800 p-4">
            Thank you for the update.
          </div>
        </div>

      </div>
    </div>
  );
}