import Marquee from "../../components/Marquee";
import ScrollReveal from '../../components/ScrollReveal';
import AboutGallery from "../../components/AboutGallery";
import SubscriptionCTA from "../../components/SubscriptionCTA";
import { client } from "@/app/sanity/client";
import { ABOUT_PAGE_QUERY } from "@/app/sanity/queries";

// Revalidate every 60 seconds
export const revalidate = 60;

export default async function About() {
    let aboutData = null;

    try {
        aboutData = await client.fetch(ABOUT_PAGE_QUERY);
    } catch (error) {
        console.error("Failed to fetch data from Sanity:", error);
    }

    // Fallback defaults
    const images = aboutData?.galleryImages || [];
    const description = aboutData?.description || "Grain Archive is a running record of the fuzz, fragments, and found moments in music, film, and visual culture. From washed-out shoegaze to sun-faded celluloid, we document the tones that don't always get clean airtime.";
    const sectionTitle = aboutData?.sectionTitle || "Why this exists";
    const pageTitle = aboutData?.title || "About";

    return (
        <main className="min-h-screen bg-[#0F0E0E] text-[#FDFFFF] selection:bg-[#FF5700] selection:text-[#0F0E0E]">
            <div className="hidden md:block">
                <Marquee />
            </div>

            {/* Main Title */}
            <div className="w-full px-[10px] pt-[60px] pb-0 md:pt-[150px]">
                <h1 className="text-center font-tilt-warp font-extrabold text-7xl md:text-9xl text-[#FDFFFF] tracking-tight">
                    {pageTitle}
                </h1>
            </div>

            {/* Horizontal Gallery */}
            <AboutGallery images={images} />

            {/* Text Content */}
            <div className="min-h-[50vh] flex flex-col md:flex-row items-start justify-center bg-[#0F0E0E] px-6 md:px-[60px] py-[60px] md:py-[100px] gap-8 md:gap-20 max-w-[1400px] mx-auto">
                <div className="w-full md:w-1/4 pt-2">
                    <h2 className="font-sans font-bold text-2xl md:text-3xl text-[#FDFFFF]">{sectionTitle}</h2>
                </div>
                <div className="w-full md:w-3/4">
                    <ScrollReveal
                        baseOpacity={0}
                        enableBlur
                        baseRotation={0}
                        blurStrength={3}
                        containerClassName="my-0"
                        textClassName="font-geist-sans font-thin text-xl md:text-3xl leading-relaxed text-[#FDFFFF]"
                    >
                        {description}
                    </ScrollReveal>
                </div>
            </div>

            {/* Target Pembaca */}
            <div className="min-h-[50vh] flex flex-col md:flex-row items-start justify-center bg-[#0F0E0E] px-6 md:px-[60px] py-[60px] md:py-[100px] gap-8 md:gap-20 max-w-[1400px] mx-auto">
                <div className="w-full md:w-1/4 pt-2">
                    <h2 className="font-sans font-bold text-2xl md:text-3xl text-[#FDFFFF]">Target Pembaca/Penonton</h2>
                </div>
                <div className="w-full md:w-3/4">
                    <ScrollReveal
                        baseOpacity={0}
                        enableBlur
                        baseRotation={0}
                        blurStrength={3}
                        containerClassName="my-0"
                        textClassName="font-geist-sans font-thin text-xl md:text-3xl leading-relaxed text-[#FDFFFF]"
                    >
                        Target pembaca Akurart Cinema adalah generasi muda dan dewasa muda berusia 18–30 tahun yang memiliki ketertarikan pada musik, film, seni, dan budaya populer. Mereka terbiasa mengonsumsi konten digital melalui website, media sosial, dan platform streaming, serta cenderung menyukai tulisan reflektif, opini personal, dan ulasan yang tidak kaku. Audiens kami adalah pembaca yang mencari makna, bukan sekadar informasi cepat.
                    </ScrollReveal>
                </div>
            </div>

            {/* Value Proposition */}
            <div className="min-h-[50vh] flex flex-col md:flex-row items-start justify-center bg-[#0F0E0E] px-6 md:px-[60px] py-[60px] md:py-[100px] gap-8 md:gap-20 max-w-[1400px] mx-auto">
                <div className="w-full md:w-1/4 pt-2">
                    <h2 className="font-sans font-bold text-2xl md:text-3xl text-[#FDFFFF]">Value Proposition</h2>
                </div>
                <div className="w-full md:w-3/4">
                    <ScrollReveal
                        baseOpacity={0}
                        enableBlur
                        baseRotation={0}
                        blurStrength={3}
                        containerClassName="my-0"
                        textClassName="font-geist-sans font-thin text-xl md:text-3xl leading-relaxed text-[#FDFFFF]"
                    >
                        Keunikan Akurart Cinema terletak pada pendekatan naratif dan personal dalam membahas musik, film, dan budaya. Kami tidak berfokus pada tren atau rating, melainkan pada cerita, konteks, dan pengalaman manusia di balik karya. Akurart Cinema menawarkan konten yang tenang, reflektif, dan berjarak dari clickbait, menjadikannya ruang alternatif bagi pembaca yang ingin memahami budaya secara lebih dalam dan jujur.
                    </ScrollReveal>
                </div>
            </div>

            <SubscriptionCTA />
        </main>
    );
}
