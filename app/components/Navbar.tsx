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
                ${isScrolled ? 'fixed top-0 left-0 right-0 bg-transparent py-4' : 'absolute py-6 md:py-4'} 
                ${!isScrolled && isHome ? 'top-0 md:top-[54px]' : 'top-0'} 
                left-0 right-0 z-[100] flex flex-col md:flex-row items-center md:justify-between px-4 md:px-6 bg-transparent transition-all gap-4 md:gap-0
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
            <p className="md:hidden text-center text-[#8C8D92] text-[13px] font-sans font-bold leading-tight max-w-[280px] uppercase tracking-[0.2em]">
                Media budaya & sinema berbasis narasi,<br /> refleksi, dan pengalaman manusia.
            </p>

            {/* Navigation Pills */}
            <div className="flex items-center justify-center md:justify-end gap-3 md:gap-2 w-full md:w-auto">
                <NavButton
                    href="/"
                    label="Halaman Utama"
                    mobileLabel="Home"
                    colorClass="bg-[#FF5700] text-[#0F0E0E]"
                    borderRadius="rounded-sm"
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
        px-4 md:px-5 py-2 text-sm md:text-base font-semibold font-sans transition-transform duration-200 hover:scale-105 active:scale-95
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
