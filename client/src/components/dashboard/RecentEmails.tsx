const emails = [
  {
    sender: "Google",
    subject: "Security Alert",
    status: "High",
  },
  {
    sender: "Amazon",
    subject: "Order Delivered",
    status: "Normal",
  },
  {
    sender: "LinkedIn",
    subject: "New Job Matches",
    status: "Medium",
  },
];

export default function RecentEmails() {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

      <h2 className="mb-6 text-2xl font-bold">
        Recent Emails
      </h2>

      <div className="space-y-4">

        {emails.map((email) => (

          <div
            key={email.subject}
            className="rounded-2xl bg-slate-950 p-5 flex justify-between items-center"
          >

            <div>

              <h3 className="font-semibold">
                {email.sender}
              </h3>

              <p className="text-slate-400">
                {email.subject}
              </p>

            </div>

            <span className="rounded-full bg-indigo-500/10 px-4 py-2 text-sm text-indigo-300">
              {email.status}
            </span>

          </div>

        ))}

      </div>

    </div>
  );
}