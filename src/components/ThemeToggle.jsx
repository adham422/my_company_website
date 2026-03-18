export default function ThemeToggle({ dark, setDark }) {
  return (
    <button
      className="px-3 py-1 rounded-lg bg-accent text-black hover:bg-accent-dark transition"
      onClick={() => setDark(!dark)}
    >
      {dark ? "☀" : "🌙"}
    </button>
  );
}
