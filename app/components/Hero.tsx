import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="flex flex-col gap-8 items-center text-center max-w-5xl mx-auto w-full pt-12 md:pt-20">

            {/* Main Headline */}
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tighter uppercase max-w-4xl">
                Jadikan senja gurau <br />
                sebagai motivasi hidup
            </h1>

            {/* Meta Info */}
            <div className="flex items-center gap-4 text-xl md:text-2xl font-serif italic text-white/60">
                <span>Lagu</span>
                <span className="w-1.5 h-1.5 rounded-full bg-white/30"></span>
                <span>January 18, 2026</span>
            </div>

            {/* Hero Image / Featured Article Card */}
            <div className="w-full aspect-video relative mt-8 rounded-xl overflow-hidden bg-white/5 border border-white/10 group cursor-pointer shadow-2xl shadow-black/50">

                {/* Background Image */}
                <Image
                    src="/akurart-archive-hero.webp"
                    alt="Hero Image"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority /* Critical image for LCP */
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10 opacity-80 group-hover:opacity-70 transition-opacity duration-500"></div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 z-20 text-left flex flex-col items-start gap-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="inline-block px-3 py-1 bg-brand-orange text-white border border-brand-orange/30 rounded-full text-sm font-medium backdrop-blur-md shadow-lg shadow-brand-orange/20">
                        Featured
                    </div>

                    <h2 className="font-display text-4xl md:text-6xl leading-tight drop-shadow-lg">
                        Bersenja Gurau - Raim Laode
                    </h2>

                    <p className="font-serif italic text-white/80 max-w-2xl text-lg md:text-xl line-clamp-2 md:line-clamp-none drop-shadow-md">
                        Dalam lanskap musik Indonesia kontemporer, karya-karya Raim Laode menempati ruang yang unik, menggabungkan lirik puitis dengan melodi yang menghanyutkan.
                    </p>
                </div>
            </div>
        </section>
    );
}
