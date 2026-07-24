import EmailCard from "./EmailCard";
import type { Email } from "../../pages/InboxPage";

type Props = {
  emails: Email[];
  selectedEmail: Email;
  onSelectEmail: (email: Email) => void;
};

export default function EmailList({
  emails,
  selectedEmail,
  onSelectEmail,
}: Props) {
  if (emails.length === 0) {
    return (
      <div className="flex h-full items-center justify-center text-slate-400">
        No emails found.
      </div>
    );
  }

  return (
    <div className="h-full space-y-4 overflow-y-auto pr-2">
      {emails.map((email) => (
        <EmailCard
          key={email.id}
          email={email}
          selected={selectedEmail?.id === email.id}
          onClick={() => onSelectEmail(email)}
        />
      ))}
    </div>
  );
}