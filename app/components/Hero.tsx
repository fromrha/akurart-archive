import Image from "next/image";
import Navbar from "./Navbar";

export default function Hero() {
    return (
        <section className="relative w-full h-screen bg-[#050505] p-[10px]">

            {/* Navbar positioned over hero */}
            <div className="absolute top-0 left-0 right-0 z-50">
                <Navbar />
            </div>

            {/* Hero Image Container with Rounded Corners */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image
                    src="/akurart-archive-hero.webp"
                    alt="Akurart Archive"
                    fill
                    className="object-cover"
                    priority
                />

                {/* Dark Overlay for text readability */}
                <div className="absolute inset-0 bg-black/30"></div>

                {/* Text Content - Bottom Left */}
                <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12">
                    <div className="relative inline-block">
                        {/* Main Title "Akurart Archive" - ONE LINE */}
                        <h1 className="font-display text-[15vw] md:text-[12vw] leading-[0.8] tracking-tighter text-white uppercase">
                            Akurart Archive
                        </h1>

                        {/* Cinema Text - Overlaid ON TOP of "Akurart" with higher z-index */}
                        <span className="absolute top-0 left-0 font-serif italic text-[#CFFF04] text-4xl md:text-6xl pointer-events-none" style={{ zIndex: 10 }}>
                            Cinema
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
