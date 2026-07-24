import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import DashboardStats from "../components/dashboard/DashboardStats";
import QuickActions from "../components/dashboard/QuickActions";
import AIInsights from "../components/dashboard/AIInsights";
import RecentEmails from "../components/dashboard/RecentEmails";

export default function DashboardPage() {
  const navigate = useNavigate();

  const { user, logoutUser } = useAuth();

  async function handleLogout() {
    await logoutUser();
    navigate("/login");
  }

  return (
    <div className="space-y-8">

      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <h1 className="text-5xl font-bold text-white">
            👋 Welcome,
            <span className="text-blue-500">
              {" "}
              {user?.name || "User"}
            </span>
          </h1>

          <p className="mt-4 text-slate-400 text-lg">
            AI-powered email productivity dashboard.
          </p>

          <p className="mt-2 text-slate-500">
            {user?.email}
          </p>

        </div>

        <div className="flex items-center gap-4">

          <div className="h-14 w-14 rounded-full bg-blue-600 flex items-center justify-center text-2xl font-bold text-white">

            {user?.name
              ? user.name.charAt(0).toUpperCase()
              : "U"}

          </div>

          <button
            onClick={handleLogout}
            className="rounded-lg bg-red-600 px-5 py-3 text-white hover:bg-red-700 transition"
          >
            Logout
          </button>

        </div>

      </div>

      <DashboardStats />

      <QuickActions />

      <div className="grid gap-6 xl:grid-cols-2">

        <AIInsights />

        <RecentEmails />

      </div>

    </div>
  );
}