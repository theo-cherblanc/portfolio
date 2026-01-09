"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function FadeIn({
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
                    duration,
                    delay: delay,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ref.current,
                        start: "top 85%",
                        toggleActions: "play reverse play reverse",
                    },
                }
            );
        }, ref);

        return () => ctx.revert();
    }, [y, rotate, duration]);

    return (
        <div ref={ref} className={className}>
            {children}
        </div>
    );
}
