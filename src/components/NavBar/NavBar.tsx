"use client";

import { useLocale, useTranslations } from "next-intl";
import LocaleSwitcher from "../Switchers/LocaleSwitcher";
import ThemeSwitcher from "../Switchers/ThemeSwitcher";
import Icon from "@/src/assets/icon_small.svg";
import Link from "next/link";
import BurgerIcon from "@/src/assets/burger.svg";
import { useEffect, useState } from "react";
import clsx from "clsx";
import CloseIcon from "@/src/assets/close.svg";

export default function NavBar() {
    const t = useTranslations("Common");
    const locale = useLocale();

    const [menuIsOpen, setOpenMenu] = useState(false);

    useEffect(() => {
        if (menuIsOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [menuIsOpen]);

    return (
        <nav className="fixed p-4 lg:p-8 flex justify-between items-center w-full z-30 backdrop-blur-md">
            <div className="flex gap-8 items-center text-2xl">
                <Link href={`/${locale}`} className="bg-primary rounded-lg p-2">
                    <Icon className="w-11 h-11 lg:w-16 lg:h-16 text-black" />
                </Link>
                <Link href={`/${locale}/projects`} className="hidden lg:flex">
                    {t("projects")}
                </Link>
                <Link href={`/${locale}/about`} className="hidden lg:flex">
                    {t("about")}
                </Link>
                <Link href={`/${locale}/contact`} className="hidden lg:flex">
                    {t("contact")}
                </Link>
            </div>
            <div className="flex gap-8 items-center">
                <div className="hidden lg:flex">
                    <LocaleSwitcher />
                </div>
                <div className="">
                    <ThemeSwitcher />
                </div>
                <button
                    onClick={() => {
                        setOpenMenu(!menuIsOpen);
                    }}
                >
                    <BurgerIcon className="w-8 h-8 lg:hidden" />
                </button>
            </div>
            <div
                className={clsx(
                    menuIsOpen ? "fixed" : "hidden",
                    "inset-0 w-screen h-screen bg-background z-40"
                )}
            >
                <div className="flex items-center justify-center w-full h-full">
                    <ul className="space-y-12 text-3xl font-title text-center">
                        <li>
                            <Link
                                href={`/${locale}/projects`}
                                className=""
                                onClick={() => setOpenMenu(false)}
                            >
                                {t("projects")}
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={`/${locale}/about`}
                                className=""
                                onClick={() => setOpenMenu(false)}
                            >
                                {t("about")}
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={`/${locale}/contact`}
                                className=""
                                onClick={() => setOpenMenu(false)}
                            >
                                {t("contact")}
                            </Link>
                        </li>
                        <li>
                            <LocaleSwitcher />
                        </li>
                    </ul>
                </div>
                <button
                    className="absolute bottom-20 left-1/2"
                    onClick={() => setOpenMenu(!menuIsOpen)}
                >
                    <CloseIcon className="w-8 h-8" />
                </button>
            </div>
        </nav>
    );
}
