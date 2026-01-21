
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="w-full bg-[#050505] text-white py-12 md:py-20 border-t border-white/10">
            <div className="max-w-[1400px] mx-auto px-4 md:px-8">

                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">

                    {/* Left Column: Brand (Large) */}
                    <div className="flex flex-col gap-2 max-w-md">
                        <div className="relative">
                            {/* Similar logic to Hero for consistency if desired, or simpler */}
                            <span className="absolute -top-4 left-10 font-serif italic text-brand-orange text-2xl z-10">
                                Cinema
                            </span>
                            <h2 className="font-display text-6xl md:text-8xl tracking-tighter leading-none">
                                Akurart<br />Archive
                            </h2>
                        </div>
                        <div className="mt-8 text-xs text-zinc-500 max-w-xs">
                            &copy; 2026 Akurart Cinema<br />
                            We adhere the rules, and break the limit.
                        </div>
                    </div>

                    {/* Mobile/Tab Centered Layout might need adjustment. 
               The design shows:
               Desktop: Left (Brand), Right (Links)
               Mobile: Center Stack
            */}

                    {/* Right Column: Links */}
                    <div className="flex flex-row gap-16 md:gap-24 w-full md:w-auto justify-between md:justify-end">

                        {/* Site Links */}
                        <div className="flex flex-col gap-4 text-center md:text-right">
                            <div className="border border-white/30 rounded-full px-3 py-1 text-[10px] uppercase tracking-widest self-center md:self-end mb-2">
                                Links
                            </div>
                            <Link href="/" className="hover:text-brand-orange transition-colors underline-offset-4 hover:underline">Home</Link>
                            <Link href="/archive" className="hover:text-brand-green transition-colors underline-offset-4 hover:underline">Archive</Link>
                            <Link href="/about" className="hover:text-brand-blue transition-colors underline-offset-4 hover:underline">About</Link>
                        </div>

                        {/* Social Links */}
                        <div className="flex flex-col gap-4 text-center md:text-right">
                            <div className="border border-white/30 rounded-full px-3 py-1 text-[10px] uppercase tracking-widest self-center md:self-end mb-2">
                                Connect
                            </div>
                            <a href="#" className="hover:text-white text-zinc-400 transition-colors">Instagram</a>
                            <a href="#" className="hover:text-white text-zinc-400 transition-colors">Threads</a>
                            <a href="#" className="hover:text-white text-zinc-400 transition-colors">YouTube</a>
                            <a href="#" className="hover:text-white text-zinc-400 transition-colors">Email</a>
                        </div>
                    </div>

                </div>

            </div>
        </footer>
    );
}
