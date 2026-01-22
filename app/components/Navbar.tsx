"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);

    // Height of Marquee (approx 54px)
    const marqueeHeight = 54;
    const isHome = pathname === "/";

    useEffect(() => {
        const handleScroll = () => {
            // Keep scroll logic if needed for desktop or future use
            const threshold = isHome ? marqueeHeight : 0;
            setIsScrolled(window.scrollY > threshold);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isHome]);

    return (
        <nav
            className={`
                w-full z-[100] transition-all
                
                /* Mobile Styles (Default) */
                relative bg-[#0F0E0E] py-6 flex flex-col items-center gap-6 justify-center
                
                /* Desktop Styles (md+) */
                md:absolute md:bg-transparent md:flex-row md:justify-between md:px-6 md:py-4 md:gap-0
                
                /* Sticky State (Optional: applies to both but mostly relevant for desktop overlay behavior) */
                ${isScrolled ? 'md:fixed md:top-0 md:bg-[#0F0E0E]/90' : 'md:top-0 md:top-[54px]'}
            `}
        >
            {/* Desktop Logo */}
            <Link href="/" className="hidden md:flex items-center gap-2">
                <img
                    src="/akurart-logo-main.svg"
                    alt="Akurart Archive"
                    className="h-8 md:h-12 w-auto brightness-0 invert"
                />
            </Link>

            {/* Mobile Brand Text (Hidden on Desktop) */}
            <p className="md:hidden text-center text-[#8C8D92] text-[14px] font-sans font-bold leading-tight max-w-[375px] tracking-wider z-20">
                Media budaya & sinema berbasis narasi, refleksi, dan pengalaman manusia.
            </p>

            {/* Navigation Pills */}
            <div className={`
                flex items-center justify-center w-full md:w-auto
                
                /* Mobile Positioning: Absolute below the text, overlapping the hero */
                absolute top-[140%] left-0 z-30
                
                /* Desktop Positioning: Static flex */
                md:static md:justify-end md:gap-2
            `}>
                <div className="flex items-center gap-3 scale-95 md:scale-100 origin-top">
                    <NavButton
                        href="/"
                        label="Halaman Utama"
                        mobileLabel="Home"
                        colorClass="bg-[#FF5700] text-[#0F0E0E]"
                        borderRadius=""
                        isActive={pathname === "/"}
                    />
                    <NavButton
                        href="/archive"
                        label="Arsip"
                        mobileLabel="Arsip"
                        colorClass="bg-[#32CE57] text-[#0F0E0E]"
                        borderRadius="rounded-full"
                        isActive={pathname === "/archive"}
                    />
                    <NavButton
                        href="/about"
                        label="Tentang Kami"
                        mobileLabel="Tentang"
                        colorClass="bg-[#A3CAFF] text-[#0F0E0E]"
                        borderRadius="rounded-lg"
                        isActive={pathname === "/about"}
                    />
                </div>
            </div>
        </nav>
    );
}

function NavButton({
    href,
    label,
    mobileLabel,
    colorClass,
    borderRadius,
    isActive
}: {
    href: string;
    label: string;
    mobileLabel: string;
    colorClass: string;
    borderRadius: string;
    isActive: boolean;
}) {
    return (
        <Link
            href={href}
            className={`
        px-6 py-2.5 md:px-5 md:py-2 text-base md:text-base font-semibold font-sans transition-transform duration-200 hover:scale-105 active:scale-95
        ${colorClass}
        ${borderRadius}
        ${!isActive ? 'opacity-90 hover:opacity-100' : 'opacity-100 ring-2 ring-white/20'}
      `}
        >
            <span className="md:hidden">{mobileLabel}</span>
            <span className="hidden md:inline">{label}</span>
        </Link>
    );
}
