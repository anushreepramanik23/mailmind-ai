import clsx from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={clsx(
        "rounded-xl px-6 py-3 font-semibold transition-all duration-300",

        variant === "primary" &&
          "bg-indigo-600 hover:bg-indigo-500 text-white",

        variant === "secondary" &&
          "bg-slate-800 hover:bg-slate-700 text-white",

        variant === "outline" &&
          "border border-slate-700 hover:bg-slate-900 text-white",

        className
      )}
    >
      {children}
    </button>
  );
}