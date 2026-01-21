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

                {/* Text Content - Bottom Center */}
                <div className="absolute bottom-2 left-0 right-0 w-full flex justify-center items-end px-2 md:px-4">
                    <div className="relative w-full text-center">
                        {/* Main Title "Akurart Archive" - Full width, centered, single line
                        Calibrated size: roughly 13.5vw fits 15 chars end-to-end
                    */}
                        <h1 className="font-display text-[14vw] md:text-[13.5vw] leading-[0.75] tracking-tighter text-[#FDFFFF] whitespace-nowrap w-full">
                            Akurart Archive
                        </h1>

                        {/* Cinema Text - Positioned over "rt" of Akurart */}
                        <span
                            className="absolute top-[5%] md:top-[15%] font-serif italic text-[#9FAC14] text-[4vw] md:text-[4.5vw] pointer-events-none"
                            style={{
                                zIndex: 10,
                                transform: 'rotate(-10deg)',
                                left: '52%', /* Adjusted for center alignment "rt" position */
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
