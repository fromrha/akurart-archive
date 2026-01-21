import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative w-full h-screen bg-[#0F0E0E] p-[10px]">

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
                        {/* Main Title "Akurart Archive" - Mixed case, not uppercase */}
                        <h1 className="font-display text-[15vw] md:text-[12vw] leading-[0.8] tracking-tighter text-[#FDFFFF] whitespace-nowrap">
                            Akurart Archive
                        </h1>

                        {/* Cinema Text - Overlaid over "rt" with -10deg rotation */}
                        <span
                            className="absolute top-0 font-serif italic text-[#9FAC14] text-4xl md:text-6xl pointer-events-none"
                            style={{
                                zIndex: 10,
                                transform: 'rotate(-10deg)',
                                left: '38%',
                                transformOrigin: 'left center'
                            }}
                        >
                            Cinema
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
