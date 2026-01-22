"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";

export default function Preloader() {
    const [counter, setCounter] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const welcomeRef = useRef<HTMLDivElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();

    useGSAP(() => {
        // Reset styles for re-run on route change
        if (wrapperRef.current) {
            wrapperRef.current.style.display = "flex";
            wrapperRef.current.style.transform = "none";
            gsap.set(wrapperRef.current, { yPercent: 0, opacity: 1 });
        }

        const tl = gsap.timeline({
            onComplete: () => {
                if (wrapperRef.current) {
                    wrapperRef.current.style.display = "none";
                }
                ScrollTrigger.refresh();
            }
        });

        // 1. Initial State
        tl.set(containerRef.current, { opacity: 1 });
        tl.set(welcomeRef.current, { y: "110%", opacity: 1 }); // Start further down

        // 2. Animate Counter to 90%
        const counterProxy = { value: 0 };

        tl.to(counterProxy, {
            value: 90,
            duration: 1.5,
            ease: "power2.inOut",
            onUpdate: () => setCounter(Math.floor(counterProxy.value)),
        });

        // 3. Wait for Window Load (Content Ready)
        tl.call(() => {
            if (document.readyState !== "complete") {
                tl.pause();
                window.addEventListener("load", () => tl.play());
            }
        });

        // 4. Finish Counter to 100%
        tl.to(counterProxy, {
            value: 100,
            duration: 0.5,
            ease: "power2.out",
            onUpdate: () => setCounter(Math.floor(counterProxy.value)),
        });

        // 5. Fade out counter
        tl.to(containerRef.current, {
            opacity: 0,
            duration: 0.3,
            ease: "power2.out"
        });

        // 6. Reveal "Welcome"
        tl.to(welcomeRef.current, {
            y: "0%",
            duration: 0.8,
            ease: "power4.out"
        });

        tl.to({}, { duration: 0.5 }); // Hold

        // 7. Exit "Welcome"
        tl.to(welcomeRef.current, {
            y: "-110%",
            duration: 0.6,
            ease: "power2.in"
        });

        // 8. Slide Up
        tl.to(wrapperRef.current, {
            yPercent: -100,
            duration: 1,
            ease: "power4.inOut"
        });

    }, { scope: wrapperRef, dependencies: [pathname] }); // Re-run on pathname change

    return (
        <div
            ref={wrapperRef}
            className="fixed inset-0 z-[9999] bg-[#0F0E0E] flex items-center justify-center pointer-events-auto overflow-hidden"
        >
            {/* Counter */}
            <div
                ref={containerRef}
                className="absolute text-[#FDFFFF] font-tilt-warp text-9xl md:text-[12rem] font-bold tracking-tighter leading-none"
            >
                {counter}%
            </div>

            {/* Welcome Text Mask */}
            <div className="relative overflow-hidden py-4 px-2">
                <div
                    ref={welcomeRef}
                    className="font-tilt-warp text-[#FDFFFF] text-6xl md:text-8xl font-bold tracking-tight opacity-0 translate-y-full leading-none"
                >
                    Welcome
                </div>
            </div>
        </div>
    );
}
