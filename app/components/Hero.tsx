import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative w-full h-screen bg-[#050505] flex items-end p-4 md:p-8">

            {/* Hero Image Container with Rounded Corners and Margins */}
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
                    <div className="relative">
                        {/* Cinema Text - Absolutely positioned over "Akurart" */}
                        <span className="absolute -top-8 md:-top-12 left-0 font-serif italic text-[#CFFF04] text-4xl md:text-6xl z-20 pointer-events-none">
                            Cinema
                        </span>

                        {/* Main Title "Akurart Archive" */}
                        <h1 className="font-display text-[15vw] md:text-[12vw] leading-[0.8] tracking-tighter text-white uppercase pointer-events-none">
                            Akurart <br /> Archive
                        </h1>
                    </div>
                </div>
            </div>
        </section>
    );
}
