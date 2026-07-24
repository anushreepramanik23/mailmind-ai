import { useState } from "react";
import {
  Bell,
  Search,
  Sparkles,
  Mail,
  ChevronDown,
  LogOut,
  Settings,
  User,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const pageTitles: Record<string, string> = {
  "/dashboard": "Dashboard",
  "/inbox": "Inbox",
  "/analytics": "Analytics",
  "/assistant": "AI Assistant",
  "/settings": "Settings",
};

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const { user, logoutUser } = useAuth();

  const [open, setOpen] = useState(false);

  const title = pageTitles[location.pathname] || "MailMind AI";

  async function handleLogout() {
    try {
      setOpen(false);
      await logoutUser();
      navigate("/login", { replace: true });
    } catch (error) {
      console.error("Logout failed:", error);
    }
  }

  return (
    <header className="sticky top-0 z-40 flex items-center justify-between border-b border-slate-800 bg-slate-950/90 px-8 py-5 backdrop-blur-lg">
      <div>
        <h2 className="text-3xl font-bold text-white">{title}</h2>

        <p className="mt-1 text-sm text-slate-400">
          AI-powered smart email workspace
        </p>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 focus-within:border-indigo-500">
          <Search size={18} className="text-slate-400" />

          <input
            placeholder="Search emails..."
            className="w-60 bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
          />
        </div>

        <div className="flex items-center gap-2 rounded-xl border border-indigo-500/20 bg-indigo-500/10 px-4 py-3">
          <Sparkles size={18} className="text-indigo-400" />

          <span className="text-sm font-medium text-indigo-300">
            Gemini Online
          </span>
        </div>

        <button className="relative rounded-xl border border-slate-800 bg-slate-900 p-3 hover:border-indigo-500">
          <Mail size={20} />

          <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600 text-[10px] font-bold">
            5
          </span>
        </button>

        <button className="relative rounded-xl border border-slate-800 bg-slate-900 p-3 hover:border-indigo-500">
          <Bell size={20} />

          <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold">
            2
          </span>
        </button>

        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900 px-3 py-2 hover:border-indigo-500"
          >
            <img
              src={
                user?.avatar ||
                "https://ui-avatars.com/api/?name=User&background=6366f1&color=fff"
              }
              alt="profile"
              className="h-11 w-11 rounded-full"
            />

            <div className="text-left">
              <h3 className="text-sm font-semibold text-white">
                {user?.name || "Guest"}
              </h3>

              <p className="text-xs text-slate-400">
                {user?.email || "Not logged in"}
              </p>
            </div>

            <ChevronDown size={18} className="text-slate-400" />
          </button>

          {open && (
            <div className="absolute right-0 mt-3 w-64 rounded-xl border border-slate-800 bg-slate-900 shadow-2xl">
              <button
                onClick={() => {
                  setOpen(false);
                  navigate("/settings");
                }}
                className="flex w-full items-center gap-3 px-4 py-3 text-left text-white hover:bg-slate-800"
              >
                <Settings size={18} />
                Settings
              </button>

              <button
                onClick={() => {
                  setOpen(false);
                  navigate("/dashboard");
                }}
                className="flex w-full items-center gap-3 px-4 py-3 text-left text-white hover:bg-slate-800"
              >
                <User size={18} />
                Profile
              </button>

              <button
                onClick={handleLogout}
                className="flex w-full items-center gap-3 border-t border-slate-800 px-4 py-3 text-left text-red-400 hover:bg-slate-800"
              >
                <LogOut size={18} />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}