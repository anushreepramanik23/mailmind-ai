import type { Email } from "../../pages/InboxPage";

type Props = {
  email: Email;
  selected: boolean;
  onClick: () => void;
};

export default function EmailCard({
  email,
  selected,
  onClick,
}: Props) {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer rounded-2xl border p-5 transition-all duration-300 ${
        selected
          ? "border-indigo-500 bg-slate-800 shadow-lg"
          : "border-slate-800 bg-slate-900 hover:border-indigo-500 hover:bg-slate-800"
      }`}
    >
      <div className="flex items-start justify-between">
        <div className="min-w-0 flex-1">
          <h3 className="truncate text-lg font-semibold text-white">
            {email.from}
          </h3>

          <p className="mt-1 truncate font-medium text-slate-200">
            {email.subject || "(No Subject)"}
          </p>
        </div>

        <span className="ml-3 whitespace-nowrap text-sm text-slate-400">
          {email.date}
        </span>
      </div>

      <p className="mt-3 line-clamp-2 text-sm text-slate-400">
        {email.snippet}
      </p>

      <div className="mt-5 flex items-center justify-between">
        <span className="rounded-full bg-indigo-600/20 px-3 py-1 text-xs font-semibold text-indigo-300">
          Gmail
        </span>

        {email.labels.includes("UNREAD") && (
          <div className="h-3 w-3 rounded-full bg-blue-500" />
        )}
      </div>
    </div>
  );
}