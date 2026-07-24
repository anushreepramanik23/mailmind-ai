import {
  FiHome,
  FiInbox,
  FiStar,
  FiSend,
  FiFileText,
  FiTrash2,
  FiBarChart2,
  FiSettings,
} from "react-icons/fi";

const menuItems = [
  {
    icon: <FiHome size={20} />,
    label: "Dashboard",
  },
  {
    icon: <FiInbox size={20} />,
    label: "Inbox",
  },
  {
    icon: <FiStar size={20} />,
    label: "Starred",
  },
  {
    icon: <FiSend size={20} />,
    label: "Sent",
  },
  {
    icon: <FiFileText size={20} />,
    label: "Drafts",
  },
  {
    icon: <FiTrash2 size={20} />,
    label: "Trash",
  },
  {
    icon: <FiBarChart2 size={20} />,
    label: "Analytics",
  },
  {
    icon: <FiSettings size={20} />,
    label: "Settings",
  },
];

export default function Sidebar() {
  return (
    <aside className="flex h-screen w-72 flex-col border-r border-slate-800 bg-slate-950">

      {/* Logo */}

      <div className="border-b border-slate-800 p-6">

        <h1 className="text-2xl font-bold text-white">
          MailMind
          <span className="text-indigo-500"> AI</span>
        </h1>

        <p className="mt-2 text-sm text-slate-400">
          AI Email Assistant
        </p>

      </div>

      {/* Navigation */}

      <nav className="flex-1 space-y-2 p-4">

        {menuItems.map((item) => (
          <button
            key={item.label}
            className="
              flex
              w-full
              items-center
              gap-4
              rounded-xl
              px-4
              py-3
              text-slate-300
              transition-all
              hover:bg-slate-800
              hover:text-white
            "
          >
            {item.icon}

            <span className="font-medium">
              {item.label}
            </span>
          </button>
        ))}

      </nav>

      {/* User */}

      <div className="border-t border-slate-800 p-5">

        <div className="flex items-center gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-lg font-bold text-white">
            A
          </div>

          <div>

            <h2 className="font-semibold text-white">
              Anushree
            </h2>

            <p className="text-sm text-slate-400">
              Software Engineer
            </p>

          </div>

        </div>

      </div>

    </aside>
  );
}