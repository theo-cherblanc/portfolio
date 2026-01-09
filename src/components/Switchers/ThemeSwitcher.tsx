"use client";
import { useEffect, useState } from "react";
import MoonIcon from "@/src/assets/moon.svg";
import SunIcon from "@/src/assets/sun.svg";
import "./ThemeSwitcher.css";
import clsx from "clsx";
export default function ThemeSwitcher() {
    const getInitialTheme = () => {
        if (typeof window === "undefined") return false;

        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "dark") return true;
        if (storedTheme === "light") return false;

        return window.matchMedia("(prefers-color-scheme: dark)").matches;
    };

    const [isDark, setIsDark] = useState(getInitialTheme);

    useEffect(() => {
        document.documentElement.classList.toggle("dark", isDark);
        localStorage.setItem("theme", isDark ? "dark" : "light");
    }, [isDark]);

    return (
        <button
            onClick={() => setIsDark(!isDark)}
            className={clsx(
                "ThemeSwitcher",
                "transition-transform duration-200 ease-out hover:scale-105",
                isDark ? "ThemeSwitcher_switched" : ""
            )}
        >
            <SunIcon className="text-foreground w-4 h-4" />
            <MoonIcon className="text-foreground w-4 h-4" />
        </button>
        // <button
        //     onClick={toggleTheme}
        //     className="relative w-14 h-8 bg-gray-300 dark:bg-gray-700 rounded-full p-1 flex items-center transition-colors duration-300"
        // >
        //     {/* Cercle animé */}
        //     <div
        //         className={`absolute w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
        //             isDark ? "translate-x-6" : "translate-x-0"
        //         } flex items-center justify-center`}
        //     >
        //         {isDark ? (
        //             <div className="w-4 h-4 text-gray-800">M</div>
        //         ) : (
        //             <div className="w-4 h-4 text-yellow-400">S</div>
        //         )}
        //     </div>
        // </button>
    );
}
