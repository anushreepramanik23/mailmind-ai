import { useEffect, useState } from "react";
import {
  Inbox,
  Star,
  AlertTriangle,
  Send,
  Archive,
  Trash2,
} from "lucide-react";

import InboxHeader from "../components/inbox/InboxHeader";
import EmailList from "../components/inbox/EmailList";
import EmailDetails from "../components/inbox/EmailDetails";

import { getInbox } from "../services/gmail.services";

export interface Email {
  id: string;
  threadId: string;
  from: string;
  subject: string;
  snippet: string;
  date: string;
  labels: string[];
}

const folders = [
  {
    title: "Inbox",
    count: 0,
    icon: Inbox,
  },
  {
    title: "Starred",
    count: 0,
    icon: Star,
  },
  {
    title: "Important",
    count: 0,
    icon: AlertTriangle,
  },
  {
    title: "Sent",
    count: 0,
    icon: Send,
  },
  {
    title: "Archive",
    count: 0,
    icon: Archive,
  },
  {
    title: "Trash",
    count: 0,
    icon: Trash2,
  },
];

export default function InboxPage() {
  const [emails, setEmails] = useState<Email[]>([]);
  const [loading, setLoading] = useState(true);

  const [selectedEmail, setSelectedEmail] =
    useState<Email | null>(null);

  useEffect(() => {
    async function loadInbox() {
      try {
        const data = await getInbox();

        setEmails(data);

        if (data.length > 0) {
          setSelectedEmail(data[0]);
        }
      } catch (err) {
        console.error("Inbox Error:", err);
      } finally {
        setLoading(false);
      }
    }

    loadInbox();
  }, []);

  return (
    <div className="space-y-8">
      <InboxHeader />

      <div className="grid h-[78vh] grid-cols-12 gap-6">
        {/* Sidebar */}

        <aside className="col-span-2 rounded-3xl border border-slate-800 bg-slate-900 p-5">
          <h2 className="mb-5 text-lg font-bold text-white">
            Mailboxes
          </h2>

          <div className="space-y-2">
            {folders.map((folder) => {
              const Icon = folder.icon;

              return (
                <button
                  key={folder.title}
                  className="flex w-full items-center justify-between rounded-xl px-3 py-3 transition hover:bg-slate-800"
                >
                  <div className="flex items-center gap-3">
                    <Icon
                      size={18}
                      className="text-indigo-400"
                    />

                    <span className="text-white">
                      {folder.title}
                    </span>
                  </div>

                  <span className="rounded-full bg-slate-800 px-2 py-1 text-xs text-slate-300">
                    {folder.title === "Inbox"
                      ? emails.length
                      : folder.count}
                  </span>
                </button>
              );
            })}
          </div>
        </aside>

        {/* Email List */}

        <section className="col-span-4 overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 p-4">
          {loading ? (
            <div className="flex h-full items-center justify-center text-slate-400">
              Loading Inbox...
            </div>
          ) : emails.length === 0 ? (
            <div className="flex h-full items-center justify-center text-slate-400">
              No emails found.
            </div>
          ) : (
            <EmailList
              emails={emails}
              selectedEmail={selectedEmail ?? emails[0]}
              onSelectEmail={setSelectedEmail}
            />
          )}
        </section>

        {/* Email Details */}

        <section className="col-span-6 overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 p-4">
          {selectedEmail ? (
            <EmailDetails
              email={selectedEmail}
            />
          ) : (
            <div className="flex h-full items-center justify-center text-lg text-slate-400">
              Select an email to view its details.
            </div>
          )}
        </section>
      </div>
    </div>
  );
}