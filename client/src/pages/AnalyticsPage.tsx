import AnalyticsCards from "../components/analytics/AnalyticsCards";
import EmailActivityChart from "../components/analytics/EmailActivityChart";
import CategoryPieChart from "../components/analytics/CategoryPieChart";
import AIInsights from "../components/dashboard/AIInsights";

export default function AnalyticsPage() {
  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-4xl font-bold text-white">
          📊 Analytics
        </h1>

        <p className="mt-2 text-slate-400">
          AI-powered insights into your inbox activity.
        </p>
      </div>

      <AnalyticsCards />

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">

        <EmailActivityChart />

        <CategoryPieChart />

      </div>

      <AIInsights />

    </div>
  );
}