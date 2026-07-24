export default function ActivityChart() {
  const data = [35, 70, 45, 95, 60, 82, 50];

  return (
    <div className="rounded-2xl border border-slate-700 bg-slate-900 p-6">
      <h2 className="mb-6 text-2xl font-bold">
        Weekly Email Activity
      </h2>

      <div className="flex h-72 items-end gap-4">
        {data.map((value, index) => (
          <div
            key={index}
            className="flex-1 rounded-t-xl bg-indigo-500 transition hover:bg-indigo-400"
            style={{
              height: `${value}%`,
            }}
          />
        ))}
      </div>
    </div>
  );
}