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
                        textClassName="font-geist-sans text-xl md:text-3xl leading-relaxed text-[#FDFFFF]"
                    >
                        {description}
                    </ScrollReveal>
                </div>
            </div>

            <SubscriptionCTA />
        </main>
    );
}
