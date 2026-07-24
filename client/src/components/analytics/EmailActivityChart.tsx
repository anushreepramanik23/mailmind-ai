import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { day: "Mon", emails: 22 },
  { day: "Tue", emails: 34 },
  { day: "Wed", emails: 18 },
  { day: "Thu", emails: 41 },
  { day: "Fri", emails: 29 },
  { day: "Sat", emails: 13 },
  { day: "Sun", emails: 26 },
];

export default function EmailActivityChart() {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">

      <h2 className="mb-6 text-xl font-bold">
        Weekly Email Activity
      </h2>

      <div className="h-80">

        <ResponsiveContainer>

          <AreaChart data={data}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="day" />

            <YAxis />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="emails"
              stroke="#6366f1"
              fill="#6366f1"
              fillOpacity={0.25}
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}