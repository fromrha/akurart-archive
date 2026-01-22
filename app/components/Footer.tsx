
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full bg-[#0F0E0E] text-[#FDFFFF] pt-20 pb-12 md:pb-20">
            <div className="max-w-[1400px] mx-auto px-4 md:px-8">

                <div className="flex flex-col">

                    {/* Top Section: Logo & Links */}
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-start gap-12">

                        {/* Brand Logo Section */}
                        <div className="relative group w-full lg:w-auto mb-12 lg:mb-0">
                            {/* Cinema - Placed on 'rt' of Akurart */}
                            <span
                                className="absolute font-serif italic text-[#9FAC14] z-20 pointer-events-none whitespace-nowrap
                                /* Mobile positioning (Over single line) */
                                left-[140px] top-[-10px] text-[32px]
                                /* Tablet positioning (Over single line) */
                                md:left-[180px] md:top-[-15px] md:text-[50px]
                                /* Desktop positioning (Over stacked 'rt') */
                                lg:left-[390px] lg:top-[-25px] lg:text-[70px]
                                "
                                style={{ transform: 'rotate(-10deg)' }}
                            >
                                Cinema
                            </span>

                            {/* Brand Name - Stacked on Desktop, Single Line on Mobile/Tab */}
                            <h2 className="font-display leading-[0.8] tracking-tighter flex flex-col md:flex-row lg:flex-col items-start gap-x-6">
                                {/* Akurart */}
                                <span className="text-[18vw] sm:text-[15vw] md:text-[90px] lg:text-[158px]">
                                    Akurart
                                </span>
                                {/* Archive */}
                                <span className="text-[22vw] sm:text-[18vw] md:text-[110px] lg:text-[200px]">
                                    Archive
                                </span>
                            </h2>
                        </div>

                        {/* Right Content: Links & Copyright (Desktop) */}
                        <div className="flex flex-col items-end w-full lg:w-auto gap-8">
                            {/* Navigation Links */}
                            <div className="flex flex-row gap-12 sm:gap-16 md:gap-24 w-full justify-between md:justify-end">
                                {/* Site Links */}
                                <div className="flex flex-col gap-3 text-left md:text-right">
                                    <div className="border border-white/30 rounded-full px-3 py-1 text-[10px] uppercase tracking-widest self-start md:self-end mb-2">
                                        Links
                                    </div>
                                    <Link href="/" scroll={false} className="text-lg md:text-xl hover:text-[#FF5700] transition-colors leading-none">Home</Link>
                                    <Link href="/archive" scroll={false} className="text-lg md:text-xl hover:text-[#32CE57] transition-colors leading-none">Archive</Link>
                                    <Link href="/about" scroll={false} className="text-lg md:text-xl hover:text-[#A3CAFF] transition-colors leading-none">About</Link>
                                </div>

                                {/* Social Links */}
                                <div className="flex flex-col gap-3 text-left md:text-right">
                                    <div className="border border-white/30 rounded-full px-3 py-1 text-[10px] uppercase tracking-widest self-start md:self-end mb-2">
                                        Connect
                                    </div>
                                    <a href="#" className="text-lg md:text-xl hover:text-[#FDFFFF] text-[#8C8D92] transition-colors leading-none">Instagram</a>
                                    <a href="#" className="text-lg md:text-xl hover:text-[#FDFFFF] text-[#8C8D92] transition-colors leading-none">Threads</a>
                                    <a href="#" className="text-lg md:text-xl hover:text-[#FDFFFF] text-[#8C8D92] transition-colors leading-none">YouTube</a>
                                    <a href="#" className="text-lg md:text-xl hover:text-[#FDFFFF] text-[#8C8D92] transition-colors leading-none">Email</a>
                                </div>
                            </div>

                            {/* Desktop Copyright Position */}
                            <div className="hidden lg:block text-right text-sm text-[#8C8D92] font-sans leading-relaxed mt-4">
                                <div>© 2026 Akurart Cinema.</div>
                                <div>We adhere the rules, and break the limit.</div>
                            </div>
                        </div>
                    </div>

                    {/* Tablet/Mobile Footer Line & Copyright */}
                    <div className="lg:hidden w-full border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 text-[#8C8D92]">
                        <div className="text-xs sm:text-sm font-sans leading-relaxed">
                            <span className="block">© 2026 Akurart Cinema.</span>
                            <span className="block">We adhere the rules, and break the limit.</span>
                        </div>
                    </div>

                </div>

            </div>
        </footer>
    );
}
