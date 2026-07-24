import StatsCard from "./StatsCard";
import { stats } from "../../constants/dashboardData";

export default function DashboardStats() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => (
        <StatsCard
          key={item.title}
          title={item.title}
          value={item.value}
          change={item.change}
          color={item.color}
        />
      ))}
    </div>
  );
}