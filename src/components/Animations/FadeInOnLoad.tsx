"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { usePathname } from "next/navigation";

export default function FadeInOnLoad({
    children,
    y = 40,
    rotate = 6,
    duration = 0.45,
    delay = 0,
    className,
}: {
    children: React.ReactNode;
    y?: number;
    rotate?: number;
    duration?: number;
    delay?: number;
    className?: string;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const pathName = usePathname();

    useEffect(() => {
        if (!ref.current) return;

        gsap.set(ref.current, {
            opacity: 0,
            y,
            rotate,
            transformOrigin: "center center",
        });

        const ctx = gsap.context(() => {
            gsap.fromTo(
                ref.current,
                {
                    opacity: 0,
                    y,
                    rotate,
                    transformOrigin: "center center",
                },
                {
                    opacity: 1,
                    y: 0,
                    rotate: 0,
                    delay,
                    duration,
                    ease: "power3.out",
                }
            );
        }, ref);

        return () => ctx.revert();
    }, [y, rotate, duration, delay, pathName]);

    return (
        <div ref={ref} className={className}>
            {children}
        </div>
    );
}
