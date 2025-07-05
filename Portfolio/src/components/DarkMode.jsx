// src/components/DarkModeToggle.jsx
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react"; // or any icon library

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className=" z-50 p-2 rounded-full shadow-md bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
      aria-label="Toggle Dark Mode"
    >
      {darkMode ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}
