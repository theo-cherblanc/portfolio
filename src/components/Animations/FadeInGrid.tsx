"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface StaggerGridProps {
    children: React.ReactNode;
    className: string;
    y?: number;
    rotate?: number;
    duration?: number;
    stagger?: number;
    fadeOutDuration?: number;
}

export default function StaggerGrid({
    children,
    className,
    y = 40,
    rotate = -6,
    duration = 0.45,
    stagger = 0.15,
    fadeOutDuration = 0.25,
}: StaggerGridProps) {
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!gridRef.current) return;

        const items = Array.from(gridRef.current.children) as HTMLElement[];

        // état initial
        gsap.set(items, {
            opacity: 0,
            y,
            rotate,
            transformOrigin: "center center",
        });

        items.forEach((item, index) => {
            ScrollTrigger.create({
                trigger: item,
                start: "top 90%",
                onEnter: () => {
                    gsap.to(item, {
                        opacity: 1,
                        y: 0,
                        rotate: 0,
                        duration,
                        ease: "power3.out",
                        delay: stagger * index, // stagger manuel
                    });
                },
                onLeaveBack: () => {
                    gsap.to(item, {
                        opacity: 0,
                        y,
                        rotate,
                        duration: fadeOutDuration,
                        ease: "power2.out",
                        delay: stagger * index, // petit décalage pour un fade-out plus doux
                    });
                },
            });
        });
    }, [y, rotate, duration, stagger, fadeOutDuration]);

    return (
        <div className={className} ref={gridRef}>
            {children}
        </div>
    );
}
