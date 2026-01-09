"use client";

import clsx from "clsx";
import Link from "next/link";
import { ButtonHTMLAttributes, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type ButtonProps = {
    label: string;
    variant?: "primary" | "secondary";
    href?: string;
    className?: string;
    delay?: number;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
    label,
    variant = "primary",
    href,
    className,
    delay = 0,
    ...props
}: ButtonProps) {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        if (!wrapperRef.current || !textRef.current) return;

        gsap.set(wrapperRef.current, { opacity: 0, duration: 0.25 });
        ScrollTrigger.create({
            trigger: wrapperRef.current,
            start: "top 95%",
            onEnter: () => {
                gsap.fromTo(
                    wrapperRef.current,
                    { y: 20, scaleX: 0.3, opacity: 1 },
                    {
                        y: 0,
                        scaleX: 1,
                        duration: 0.6,
                        delay,
                        ease: "power2.out",
                    }
                );

                gsap.fromTo(
                    textRef.current,
                    { opacity: 0, scaleX: 0 },
                    {
                        opacity: 1,
                        scaleX: 1,
                        duration: 0.3,
                        delay: delay + 0.3,
                        ease: "power2.out",
                    }
                );
            },
            onLeaveBack: () =>
                gsap.to(wrapperRef.current, { opacity: 0, duration: 0.25 }),
        });
    }, []);

    const variants = {
        primary: "bg-foreground text-background",
        secondary: "bg-primary text-background border border-foreground",
    };

    const classes = clsx(
        "font-title rounded-lg py-4 px-6 text-2xl inline-flex items-center justify-center",
        "transform-origin-left overflow-hidden",
        variants[variant],
        className
    );

    return (
        <div ref={wrapperRef} className="inline-block">
            {href ? (
                <Link href={href} className={classes}>
                    <span ref={textRef} className="inline-block">
                        {label}
                    </span>
                </Link>
            ) : (
                <button className={classes} {...props}>
                    <span ref={textRef} className="inline-block">
                        {label}
                    </span>
                </button>
            )}
        </div>
    );
}
