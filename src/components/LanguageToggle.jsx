export default function LanguageToggle({ lang, setLang }) {
  return (
    <button
      className="px-3 py-1 rounded-lg bg-accent text-black hover:bg-accent-dark transition"
      onClick={() => setLang(lang === "ar" ? "en" : "ar")}
    >
      {lang === "ar" ? "EN" : "AR"}
    </button>
  );
}
