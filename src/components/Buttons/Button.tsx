import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

type ButtonProps = {
    label: string;
    variant: "primary" | "secondary";
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
    label,
    variant = "primary",
    ...props
}: ButtonProps) {
    const variants = {
        primary: "bg-foreground text-background",
        secondary: "bg-primary text-background border border-foreground",
    };

    return (
        <button
            className={clsx(
                "font-title rounded-lg py-4 px-6 text-2xl",
                variants[variant]
            )}
            {...props}
        >
            {label}
        </button>
    );
}
