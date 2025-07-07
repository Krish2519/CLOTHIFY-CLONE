import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      return (
        localStorage.getItem("theme") === "dark" ||
        (!localStorage.getItem("theme") &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      );
    }
    return false;
  });

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark((prev) => !prev)}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 p-2 sm:p-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 shadow-lg transition z-50"
      aria-label="Toggle Dark Mode"
    >
      <span className="block sm:hidden">{dark ? "🌙" : "☀️"}</span>
      <span className="hidden sm:block">{dark ? "🌙 Dark" : "☀️ Light"}</span>
    </button>
  );
};

export default ThemeToggle;