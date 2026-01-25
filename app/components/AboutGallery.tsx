"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { client } from "@/app/sanity/client";
import { createImageUrlBuilder } from "@sanity/image-url";

const builder = createImageUrlBuilder(client);
function urlFor(source: any) {
    return source ? builder.image(source) : null;
}

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function AboutGallery({ images }: { images: any[] }) {
    const sectionRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!images || images.length === 0) return;

        const section = sectionRef.current;
        const trigger = triggerRef.current;

        if (!section || !trigger) return;

        const totalWidth = section.scrollWidth;
        const windowWidth = window.innerWidth;
        const xMovement = -(totalWidth - windowWidth);

        // Only animate if content is wider than screen
        if (totalWidth > windowWidth) {
            gsap.fromTo(
                section,
                { x: 0 },
                {
                    x: xMovement,
                    ease: "none",
                    scrollTrigger: {
                        trigger: trigger,
                        start: "center center",
                        end: () => `+=${totalWidth}`,
                        scrub: 1,
                        pin: true,
                        invalidateOnRefresh: true,
                        // anticipatePin: 1,
                    },
                }
            );
        }
    }, { scope: triggerRef, dependencies: [images] });

    if (!images || images.length === 0) return null;

    return (
        <section ref={triggerRef} className="overflow-hidden bg-[#0F0E0E] relative min-h-screen flex items-center">
            <div
                ref={sectionRef}
                className="flex items-center gap-10 md:gap-8 px-10 md:px-10 w-max"
            >
                {images.map((img, i) => (
                    <div key={img._key || i} className="relative w-[70vw] md:w-[45vw] lg:w-[25vw] aspect-square flex-shrink-0 flex items-center justify-center">
                        <Image
                            src={urlFor(img)?.url() || ""}
                            alt={`About gallery image ${i + 1}`}
                            fill
                            className="object-contain drop-shadow-2xl"
                            unoptimized
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
