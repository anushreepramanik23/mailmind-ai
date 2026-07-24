import { useState } from "react";

export default function EmailComposer() {

  const [prompt, setPrompt] = useState("");

  const [tone, setTone] = useState("Professional");

  const [result, setResult] = useState("");

  const generate = () => {

    setResult(`Subject: Follow-up Regarding Interview

Dear Hiring Manager,

I hope you are doing well.

I wanted to follow up regarding my recent interview and express my continued interest in the Software Development Engineer position.

Thank you for your time and consideration.

Best Regards,
Anushree`);
  };

  return (

    <div className="space-y-6">

      <textarea
        placeholder="Example: Write a follow-up email after an interview."
        value={prompt}
        onChange={(e)=>setPrompt(e.target.value)}
        className="h-40 w-full rounded-xl border border-slate-700 bg-slate-900 p-4"
      />

      <select
        value={tone}
        onChange={(e)=>setTone(e.target.value)}
        className="rounded-xl border border-slate-700 bg-slate-900 p-3"
      >
        <option>Professional</option>
        <option>Friendly</option>
        <option>Formal</option>
        <option>Confident</option>
      </select>

      <button
        onClick={generate}
        className="rounded-xl bg-indigo-600 px-6 py-3 font-semibold hover:bg-indigo-700"
      >
        Generate Email
      </button>

      {result && (

        <textarea
          value={result}
          readOnly
          className="h-96 w-full rounded-xl border border-slate-700 bg-slate-900 p-5"
        />

      )}

    </div>

  );

}