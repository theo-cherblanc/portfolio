"use client";

import { useParams } from "next/navigation";
import { Locale } from "next-intl";
import { ChangeEvent, ReactNode, useTransition } from "react";
import { usePathname, useRouter } from "../../i18n/navigation";
import clsx from "clsx";

type Props = {
    items: { value: string; label: string }[];
    defaultValue: string;
};

export default function LocaleSwitcherSelect({ items, defaultValue }: Props) {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const pathname = usePathname();
    const params = useParams();

    function handleChange(value: Locale) {
        startTransition(() => {
            router.replace(
                // @ts-expect-error -- TypeScript will validate that only known `params`
                // are used in combination with a given `pathname`. Since the two will
                // always match for the current route, we can skip runtime checks.
                { pathname, params },
                { locale: value }
            );
        });
    }

    return (
        <div className="flex gap-4">
            {items.map((el) => (
                <button
                    key={el.value}
                    onClick={() => handleChange(el.value)}
                    disabled={isPending}
                    className={clsx(
                        "capitalize p-2 rounded-lg transform transition-transform duration-200 ease-out hover:scale-105",
                        defaultValue === el.value
                            ? "bg-foreground text-background"
                            : "transition-transform duration-200 hover:scale-105"
                    )}
                >
                    {el.label}
                </button>
            ))}
        </div>
    );
}
