import { useState } from "react";
import {
  User,
  Mail,
  Bell,
  Shield,
  Moon,
  Bot,
  LogOut,
  Save,
  CheckCircle2,
} from "lucide-react";

export default function SettingsPage() {
  const [saved, setSaved] = useState(false);

  const saveChanges = () => {
    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2000);
  };

  return (
    <div className="space-y-8">

      <div>

        <h1 className="text-4xl font-bold text-white">
          ⚙️ Settings
        </h1>

        <p className="mt-2 text-slate-400">
          Manage your MailMind AI preferences.
        </p>

      </div>

      {/* Profile */}

      <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

        <div className="mb-6 flex items-center gap-3">

          <User className="text-indigo-400" />

          <h2 className="text-2xl font-bold">
            Profile
          </h2>

        </div>

        <div className="grid gap-6 md:grid-cols-2">

          <div>

            <label className="mb-2 block text-sm text-slate-400">
              Name
            </label>

            <input
              defaultValue="Anushree"
              className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3 outline-none focus:border-indigo-500"
            />

          </div>

          <div>

            <label className="mb-2 block text-sm text-slate-400">
              Email
            </label>

            <input
              defaultValue="anushree@example.com"
              className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3 outline-none focus:border-indigo-500"
            />

          </div>

        </div>

      </div>

      {/* Connected Account */}

      <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

        <div className="mb-6 flex items-center gap-3">

          <Mail className="text-green-400" />

          <h2 className="text-2xl font-bold">
            Connected Gmail
          </h2>

        </div>

        <div className="flex items-center justify-between rounded-2xl bg-slate-950 p-5">

          <div>

            <h3 className="font-semibold">
              Gmail Account
            </h3>

            <p className="mt-1 text-slate-400">
              Connected successfully
            </p>

          </div>

          <CheckCircle2
            className="text-green-400"
            size={28}
          />

        </div>

      </div>

      {/* AI */}

      <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

        <div className="mb-6 flex items-center gap-3">

          <Bot className="text-violet-400" />

          <h2 className="text-2xl font-bold">
            AI Preferences
          </h2>

        </div>

        <div className="space-y-4">

          <div className="flex items-center justify-between rounded-xl bg-slate-950 p-4">

            <span>Gemini Flash</span>

            <span className="rounded-full bg-green-500/10 px-4 py-2 text-green-400">
              Active
            </span>

          </div>

          <div className="flex items-center justify-between rounded-xl bg-slate-950 p-4">

            <span>AI Email Summary</span>

            <input type="checkbox" defaultChecked />

          </div>

          <div className="flex items-center justify-between rounded-xl bg-slate-950 p-4">

            <span>Smart Reply Generator</span>

            <input type="checkbox" defaultChecked />

          </div>

        </div>

      </div>

      {/* Notifications */}

      <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

        <div className="mb-6 flex items-center gap-3">

          <Bell className="text-yellow-400" />

          <h2 className="text-2xl font-bold">
            Notifications
          </h2>

        </div>

        <div className="space-y-4">

          <div className="flex items-center justify-between rounded-xl bg-slate-950 p-4">

            <span>Email Alerts</span>

            <input type="checkbox" defaultChecked />

          </div>

          <div className="flex items-center justify-between rounded-xl bg-slate-950 p-4">

            <span>AI Updates</span>

            <input type="checkbox" defaultChecked />

          </div>

        </div>

      </div>

      {/* Appearance */}

      <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

        <div className="mb-6 flex items-center gap-3">

          <Moon className="text-indigo-400" />

          <h2 className="text-2xl font-bold">
            Appearance
          </h2>

        </div>

        <div className="rounded-xl bg-slate-950 p-4">

          <p>Dark Theme Enabled</p>

        </div>

      </div>

      {/* Security */}

      <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

        <div className="mb-6 flex items-center gap-3">

          <Shield className="text-red-400" />

          <h2 className="text-2xl font-bold">
            Security
          </h2>

        </div>

        <div className="rounded-xl bg-slate-950 p-4">

          JWT Authentication Enabled

        </div>

      </div>

      {/* Buttons */}

      <div className="flex justify-between">

        <button className="flex items-center gap-2 rounded-xl bg-red-600 px-6 py-3 font-semibold hover:bg-red-700">

          <LogOut size={18} />

          Logout

        </button>

        <button
          onClick={saveChanges}
          className="flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 font-semibold hover:bg-indigo-700"
        >

          <Save size={18} />

          {saved ? "Saved" : "Save Changes"}

        </button>

      </div>

    </div>
  );
}