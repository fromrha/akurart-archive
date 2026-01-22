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
            // If on home, only fix navbar after scrolling past marquee
            const threshold = isHome ? marqueeHeight : 0;
            setIsScrolled(window.scrollY > threshold);
        };

        // Check initially
        handleScroll();

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isHome]);

    return (
        <nav
            className={`
                ${isScrolled ? 'fixed top-0' : 'absolute'} 
                ${!isScrolled && isHome ? 'top-0' : 'top-0'} 
                left-0 right-0 z-[100] flex flex-col items-center px-4 py-6 bg-transparent transition-all gap-4
            `}
        >
            {/* Brand Description Text */}
            <p className="text-center text-[#8C8D92] text-[15px] md:text-[18px] font-sans font-bold leading-tight max-w-[90%] md:max-w-xl">
                Media budaya & sinema berbasis narasi,<br className="md:hidden" /> refleksi, dan pengalaman manusia.
            </p>

            {/* Navigation Pills */}
            <div className="flex items-center justify-center gap-2 w-full px-2">
                <NavButton
                    href="/"
                    label="Home"
                    colorClass="bg-[#FF5700] text-[#0F0E0E]"
                    borderRadius="rounded-md"
                    isActive={pathname === "/"}
                />
                <NavButton
                    href="/archive"
                    label="Arsip"
                    colorClass="bg-[#32CE57] text-[#0F0E0E]"
                    borderRadius="rounded-full"
                    isActive={pathname === "/archive"}
                />
                <NavButton
                    href="/about"
                    label="Tentang"
                    colorClass="bg-[#A3CAFF] text-[#0F0E0E]"
                    borderRadius="rounded-lg"
                    isActive={pathname === "/about"}
                />
            </div>
        </nav>
    );
}

function NavButton({
    href,
    label,
    colorClass,
    borderRadius,
    isActive
}: {
    href: string;
    label: string;
    colorClass: string;
    borderRadius: string;
    isActive: boolean;
}) {
    return (
        <Link
            href={href}
            className={`
        px-5 py-2 text-sm md:text-base font-semibold font-sans transition-transform duration-200 hover:scale-105 active:scale-95
        ${colorClass}
        ${borderRadius}
        ${!isActive ? 'opacity-90 hover:opacity-100' : 'opacity-100 ring-2 ring-white/20'}
      `}
        >
            {label}
        </Link>
    );
}
