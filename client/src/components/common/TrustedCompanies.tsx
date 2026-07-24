export default function TrustedCompanies() {
  const companies = [
    "Microsoft",
    "Google",
    "Amazon",
    "IBM",
    "Accenture",
    "Adobe",
  ];

  return (
    <section className="py-20">

      <p className="text-center text-slate-500">

        Inspired by enterprise workflows used across

      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-10">

        {companies.map((company) => (
          <div
            key={company}
            className="text-xl font-semibold text-slate-400"
          >
            {company}
          </div>
        ))}

      </div>

    </section>
  );
}