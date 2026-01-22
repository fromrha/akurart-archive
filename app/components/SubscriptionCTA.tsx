import Image from "next/image";

export default function SubscriptionCTA() {
    return (
        <section className="relative w-full overflow-hidden bg-[#0F0E0E]">
            {/* Background Image (Rocks) */}
            <div className="absolute inset-0 z-0 opacity-80">
                <Image
                    src="/Subscribe section.png"
                    alt="Background Rocks"
                    fill
                    className="object-cover"
                />
                {/* Gradient overlays to blend with #0F0E0E */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#0F0E0E] via-transparent to-[#0F0E0E]" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0F0E0E] via-transparent to-[#0F0E0E] opacity-50" />
            </div>

            <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 md:px-8 py-32 md:py-48">
                <div className="relative w-full bg-[#FF5700] rounded-sm p-12 md:p-24 overflow-hidden flex flex-col items-center justify-center text-center gap-8 border-y-2 border-dashed border-[#0F0E0E]/20">

                    {/* Decorative dots/perforation looking elements */}
                    <div className="absolute left-4 top-0 bottom-0 w-px border-l-2 border-dashed border-[#0F0E0E]/20"></div>
                    <div className="absolute right-4 top-0 bottom-0 w-px border-r-2 border-dashed border-[#0F0E0E]/20"></div>

                    <div className="absolute left-2 top-8 w-4 h-4 rounded-full bg-[#0F0E0E]"></div>
                    <div className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#0F0E0E]"></div>
                    <div className="absolute left-2 bottom-8 w-4 h-4 rounded-full bg-[#0F0E0E]"></div>

                    <div className="absolute right-2 top-8 w-4 h-4 rounded-full bg-[#0F0E0E]"></div>
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#0F0E0E]"></div>
                    <div className="absolute right-2 bottom-8 w-4 h-4 rounded-full bg-[#0F0E0E]"></div>

                    <h2 className="font-serif italic text-4xl md:text-7xl text-[#0F0E0E] drop-shadow-sm max-w-4xl tracking-tight leading-[1]">
                        Tertarik dengan review kami?
                    </h2>
                    <p className="font-sans text-[#0F0E0E]/80 text-lg md:text-xl max-w-xl">
                        Berlangganan untuk mendapatkan review lagu-lagu indah lainnya.
                    </p>

                    <button className="bg-[#0F0E0E] text-[#FDFFFF] px-10 py-4 text-xl font-medium hover:scale-105 transition-transform duration-200 shadow-xl shadow-black/20 mt-4">
                        Berlangganan
                    </button>
                </div>
            </div>
        </section>
    );
}
