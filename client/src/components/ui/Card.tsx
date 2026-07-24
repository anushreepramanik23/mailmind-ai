import clsx from "clsx";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Card({
  children,
  className,
}: Props) {
  return (
    <div
      className={clsx(
        "rounded-2xl border border-slate-800 bg-slate-900 p-8",
        className
      )}
    >
      {children}
    </div>
  );
}
