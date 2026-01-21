"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="sticky top-0 flex items-center justify-between px-6 py-4 bg-transparent">
            {/* Logo Area */}
            <Link href="/" className="flex items-center gap-2">
                <img
                    src="/akurart-logo-main.svg"
                    alt="Akurart Archive"
                    className="h-8 md:h-12 w-auto brightness-0 invert"
                />
            </Link>

            {/* Navigation Pills */}
            <div className="flex items-center gap-2">
                <NavButton
                    href="/"
                    label="Halaman Utama"
                    colorClass="bg-brand-orange text-white"
                    borderRadius=""
                    isActive={pathname === "/"}
                />
                <NavButton
                    href="/archive"
                    label="Arsip"
                    colorClass="bg-brand-green text-black"
                    borderRadius="rounded-full"
                    isActive={pathname === "/archive"}
                />
                <NavButton
                    href="/about"
                    label="Tentang Kami"
                    colorClass="bg-brand-blue text-white"
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
        px-5 py-2 text-sm md:text-base font-medium transition-transform duration-200 hover:scale-105 active:scale-95
        ${colorClass}
        ${borderRadius}
        ${!isActive ? 'opacity-90 hover:opacity-100' : 'opacity-100 ring-2 ring-white/20'}
      `}
        >
            {label}
        </Link>
    );
}
