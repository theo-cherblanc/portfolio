"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import clsx from "clsx";
import CloseIcon from "@/src/assets/close.svg";
import LocaleSwitcher from "../Switchers/LocaleSwitcher";

type MobileMenuProps = {
    isOpen: boolean;
    onClose: () => void;
    locale: string;
    t: (key: string) => string;
};

export default function MobileMenu({
    isOpen,
    onClose,
    locale,
    t,
}: MobileMenuProps) {
    const menuRef = useRef<HTMLDivElement>(null);
    const itemsRef = useRef<HTMLLIElement[]>([]);

    const setItemRef = (el: HTMLLIElement | null) => {
        if (el && !itemsRef.current.includes(el)) {
            itemsRef.current.push(el);
        }
    };

    useEffect(() => {
        if (!menuRef.current || !itemsRef.current.length) return;

        if (isOpen) {
            // reset
            gsap.set(itemsRef.current, { y: 30, opacity: 0 });

            gsap.to(menuRef.current, {
                opacity: 1,
                duration: 0.3,
                ease: "power2.out",
            });

            gsap.to(itemsRef.current, {
                y: 0,
                opacity: 1,
                duration: 0.6,
                ease: "power3.out",
                stagger: 0.1,
                delay: 0.15,
            });
        } else {
            gsap.to(itemsRef.current, {
                y: 20,
                opacity: 0,
                duration: 0.3,
                ease: "power2.in",
                stagger: {
                    each: 0.05,
                    from: "end",
                },
            });

            gsap.to(menuRef.current, {
                opacity: 0,
                duration: 0.25,
                delay: 0.15,
            });
        }
    }, [isOpen]);

    return (
        <div
            ref={menuRef}
            className={clsx(
                "fixed inset-0 z-40 bg-background",
                "opacity-0 pointer-events-none"
            )}
            style={{ pointerEvents: isOpen ? "auto" : "none" }}
        >
            <div className="flex items-center justify-center w-full h-full">
                <ul className="space-y-12 text-3xl font-title text-center">
                    <li ref={setItemRef}>
                        <Link href={`/${locale}/projects`} onClick={onClose}>
                            {t("projects")}
                        </Link>
                    </li>
                    <li ref={setItemRef}>
                        <Link href={`/${locale}/about`} onClick={onClose}>
                            {t("about")}
                        </Link>
                    </li>
                    <li ref={setItemRef}>
                        <Link href={`/${locale}/contact`} onClick={onClose}>
                            {t("contact")}
                        </Link>
                    </li>
                    <li ref={setItemRef}>
                        <LocaleSwitcher />
                    </li>
                </ul>
            </div>

            <button
                className="absolute bottom-20 left-1/2 -translate-x-1/2"
                onClick={onClose}
            >
                <CloseIcon className="w-8 h-8" />
            </button>
        </div>
    );
}
