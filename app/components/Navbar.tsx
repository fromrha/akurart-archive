"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-transparent backdrop-blur-sm">
            {/* Logo Area */}
            <Link href="/" className="flex items-center gap-2">
                <img
                    src="/akurart-logo-main.svg"
                    alt="Akurart Archive"
                    className="h-8 w-auto brightness-0 invert"
                />
            </Link>

            {/* Navigation Pills */}
            <div className="flex items-center gap-2">
                <NavButton
                    href="/"
                    label="Halaman Utama"
                    colorClass="bg-brand-orange text-white"
                    isActive={pathname === "/"}
                />
                <NavButton
                    href="/archive"
                    label="Arsip"
                    colorClass="bg-brand-green text-black"
                    isActive={pathname === "/archive"}
                />
                <NavButton
                    href="/about"
                    label="Tentang Kami"
                    colorClass="bg-brand-blue text-white"
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
    isActive
}: {
    href: string;
    label: string;
    colorClass: string;
    isActive: boolean;
}) {
    return (
        <Link
            href={href}
            className={`
        px-4 py-1.5 rounded-full text-sm font-medium transition-transform duration-200 hover:scale-105 active:scale-95
        ${colorClass}
        ${!isActive ? 'opacity-90 hover:opacity-100' : 'opacity-100 ring-2 ring-white/20'}
      `}
        >
            {label}
        </Link>
    );
}
