"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { usePathname } from "next/navigation";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
}

export default function SmoothScrollWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    const pathname = usePathname();

    useGSAP(() => {
        ScrollSmoother.create({
            wrapper: wrapperRef.current,
            content: contentRef.current,
            smooth: 1.5,
            effects: true,
        });
    }, { scope: wrapperRef });

    useGSAP(() => {
        // Prevent browser native scroll restoration logic
        if ("scrollRestoration" in window.history) {
            window.history.scrollRestoration = "manual";
        }

        const smoother = ScrollSmoother.get();

        // Force native browser scroll to top immediately
        window.scrollTo(0, 0);

        if (smoother) {
            // Reset to top immediately to catch most cases
            smoother.scrollTop(0);

            // Force a refresh after a tick to ensure new content height is calculated
            const timer = setTimeout(() => {
                ScrollTrigger.refresh();
                smoother.scrollTop(0); // Ensure it's 0 after refresh
                window.scrollTo(0, 0); // Ensure native scroll is 0
            }, 100);

            return () => clearTimeout(timer);
        }
    }, { dependencies: [pathname] });

    return (
        <div id="smooth-wrapper" ref={wrapperRef}>
            <div id="smooth-content" ref={contentRef}>
                {children}
            </div>
        </div>
    );
}
