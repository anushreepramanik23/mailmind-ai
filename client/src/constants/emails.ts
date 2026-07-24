export interface Email {
  id: number;
  sender: string;
  subject: string;
  preview: string;
  body: string;
  time: string;
  unread: boolean;
  category: string;
}

export const emails: Email[] = [
  {
    id: 1,
    sender: "Google",
    subject: "Security Alert",
    preview: "A new sign in was detected from a MacBook in Bhubaneswar.",
    body: `Hi Anushree,

We detected a new sign-in to your Google Account from a MacBook in Bhubaneswar.

If this was you, no further action is needed.

If you don't recognize this activity, secure your account immediately.

Regards,
Google Security Team`,
    time: "2 min ago",
    unread: true,
    category: "Important",
  },
  {
    id: 2,
    sender: "Amazon",
    subject: "Your package has shipped",
    preview: "Your order will arrive tomorrow before 9 PM.",
    body: `Hello Anushree,

Good news!

Your Amazon order has been shipped and is expected to arrive tomorrow before 9 PM.

Track your shipment using the Amazon app.

Thank you for shopping with us!`,
    time: "20 min ago",
    unread: false,
    category: "Shopping",
  },
  {
    id: 3,
    sender: "LinkedIn",
    subject: "Recruiters viewed your profile",
    preview: "Five recruiters searched your profile today.",
    body: `Hi Anushree,

Your profile is getting noticed.

Five recruiters viewed your profile today.

Complete your profile to improve your chances of getting contacted.

Best,
LinkedIn Team`,
    time: "1 hr ago",
    unread: true,
    category: "Career",
  },
  {
    id: 4,
    sender: "OpenAI",
    subject: "GPT API Usage",
    preview: "Your monthly API report is now available.",
    body: `Hello,

Your monthly API usage report has been generated.

Total Tokens Used: 1,245,230

Visit your dashboard to see detailed analytics.

Thanks,
OpenAI`,
    time: "Today",
    unread: false,
    category: "AI",
  },
  {
    id: 5,
    sender: "GitHub",
    subject: "Pull Request Review",
    preview: "Someone reviewed your latest pull request.",
    body: `Hi Anushree,

Your pull request has received a review.

Please resolve the requested changes before merging.

Happy Coding!

GitHub`,
    time: "Yesterday",
    unread: true,
    category: "Development",
  },
];