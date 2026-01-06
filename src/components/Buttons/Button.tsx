import clsx from "clsx";
import Link from "next/link";
import { ButtonHTMLAttributes } from "react";

type ButtonProps = {
    label: string;
    variant?: "primary" | "secondary";
    href?: string;
    className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
    label,
    variant = "primary",
    href,
    className,
    ...props
}: ButtonProps) {
    const variants = {
        primary: "bg-foreground text-background",
        secondary: "bg-primary text-background border border-foreground",
    };

    const classes = clsx(
        "font-title rounded-lg py-4 px-6 text-2xl inline-flex items-center justify-center",
        variants[variant],
        className
    );

    if (href) {
        return (
            <Link href={href} className={classes}>
                {label}
            </Link>
        );
    }

    return (
        <button className={classes} {...props}>
            {label}
        </button>
    );
}
