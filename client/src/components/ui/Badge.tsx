type Props = {
  children: React.ReactNode;
};

export default function Badge({ children }: Props) {
  return (
    <span className="inline-flex rounded-full border border-indigo-700 bg-indigo-900/40 px-4 py-2 text-indigo-300">
      {children}
    </span>
  );
}