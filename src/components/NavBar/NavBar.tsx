"use client";

import { useLocale, useTranslations } from "next-intl";
import LocaleSwitcher from "../Switchers/LocaleSwitcher";
import ThemeSwitcher from "../Switchers/ThemeSwitcher";
import Icon from "@/src/assets/icon_small.svg";
import Link from "next/link";
import BurgerIcon from "@/src/assets/burger.svg";
import { useState } from "react";
import FadeInOnLoad from "../Animations/FadeInOnLoad";
import MobileMenu from "../MobileMenu/MobileMenu";

export default function NavBar() {
    const t = useTranslations("Common");
    const locale = useLocale();
    const [menuIsOpen, setOpenMenu] = useState(false);

    return (
        <>
            <nav className="fixed p-4 lg:p-8 flex justify-between items-center w-full z-30 backdrop-blur-md">
                <div className="flex gap-8 items-center lg:text-xl xl:text-2xl">
                    <FadeInOnLoad className="flex">
                        <Link
                            href={`/${locale}`}
                            className="bg-primary rounded-lg p-2 transition-transform duration-200 ease-out hover:scale-105"
                        >
                            <Icon className="w-11 h-11 lg:w-16 lg:h-16 text-black" />
                        </Link>
                    </FadeInOnLoad>

                    <FadeInOnLoad delay={0.1}>
                        <Link
                            href={`/${locale}/projects`}
                            className="hidden lg:flex transition-transform duration-200 ease-out hover:scale-105"
                        >
                            {t("projects")}
                        </Link>
                    </FadeInOnLoad>

                    <FadeInOnLoad delay={0.2}>
                        <Link
                            href={`/${locale}/about`}
                            className="hidden lg:flex transition-transform duration-200 ease-out hover:scale-105"
                        >
                            {t("about")}
                        </Link>
                    </FadeInOnLoad>

                    <FadeInOnLoad delay={0.3}>
                        <Link
                            href={`/${locale}/contact`}
                            className="hidden lg:flex transition-transform duration-200 ease-out hover:scale-105"
                        >
                            {t("contact")}
                        </Link>
                    </FadeInOnLoad>
                </div>

                <div className="flex gap-8 items-center">
                    <div className="hidden lg:flex">
                        <FadeInOnLoad delay={0.4}>
                            <LocaleSwitcher />
                        </FadeInOnLoad>
                    </div>

                    <FadeInOnLoad delay={0.5}>
                        <ThemeSwitcher />
                    </FadeInOnLoad>

                    <button onClick={() => setOpenMenu(true)}>
                        <FadeInOnLoad delay={0.6}>
                            <BurgerIcon className="w-8 h-8 lg:hidden" />
                        </FadeInOnLoad>
                    </button>
                </div>
            </nav>

            <MobileMenu
                isOpen={menuIsOpen}
                onClose={() => setOpenMenu(false)}
                locale={locale}
                t={t}
            />
        </>
    );
}
