import { useState } from "react";

export default function ReplyGenerator() {
  const [reply, setReply] = useState("");

  const generateReply = () => {
    setReply(`Hi,

Thank you for your email.

I appreciate the update. I have received your message and will take the necessary action.

Best regards,
Anushree`);
  };

  return (
    <div className="mt-6 rounded-2xl border border-slate-700 bg-slate-900 p-6">
      <h2 className="mb-4 text-xl font-bold">
        AI Reply Generator
      </h2>

      <button
        onClick={generateReply}
        className="rounded-xl bg-indigo-600 px-5 py-3 font-semibold hover:bg-indigo-700"
      >
        Generate Reply
      </button>

      {reply && (
        <textarea
          value={reply}
          readOnly
          className="mt-5 h-56 w-full rounded-xl border border-slate-700 bg-slate-950 p-4"
        />
      )}
    </div>
  );
}