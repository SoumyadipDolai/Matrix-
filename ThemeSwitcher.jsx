export default function ThemeSwitcher({ theme, setTheme }) {
  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="bg-purple-600 text-white px-3 py-1 rounded"
    >
      {theme === "light" ? "Dark Mode" : "Light Mode"}
    </button>
  );
}
