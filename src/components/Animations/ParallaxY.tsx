"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function ParallaxY({
    children,
    from = -50,
    to = 50,
}: {
    children: React.ReactNode;
    from?: number;
    to?: number;
}) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!ref.current) return;

        gsap.fromTo(
            ref.current,
            { y: from },
            {
                y: to,
                ease: "none",
                scrollTrigger: {
                    trigger: ref.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                },
            }
        );
    }, [from, to]);

    return <div ref={ref}>{children}</div>;
}
