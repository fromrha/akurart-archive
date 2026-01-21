import Link from "next/link";
import Image from "next/image";
import { client } from "@/app/sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);
function urlFor(source: any) {
    return source ? builder.image(source) : null;
}

interface HeroProps {
    featuredArticle?: {
        title: string;
        category: string;
        publishedAt: string;
        bannerImage: any;
        slug: { current: string };
    }
}

export default function Hero({ featuredArticle }: HeroProps) {
    return (
        <section className="relative w-full h-screen flex flex-col justify-end pb-12 px-4 md:px-8 overflow-hidden">

            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                {featuredArticle?.bannerImage ? (
                    <Image
                        src={urlFor(featuredArticle.bannerImage)?.url() || "/akurart-archive-hero.webp"}
                        alt={featuredArticle.title || "Hero"}
                        fill
                        className="object-cover"
                        priority
                    />
                ) : (
                    <Image
                        src="/akurart-archive-hero.webp"
                        alt="Default Hero"
                        fill
                        className="object-cover"
                        priority
                    />
                )}

                {/* Dark Overlay for text readability */}
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            {/* Top Navbar Placeholder (Visual only, actual Navbar is fixed) */}
            {/* We rely on the global Navbar being sticky/fixed on top */}

            {/* Content */}
            <div className="relative z-10 w-full max-w-[1400px] mx-auto flex flex-col items-start">

                {/* Absolute Position "Cinema" Text */}
                <div className="relative">
                    <span className="absolute -top-6 left-1/4 transform -translate-x-1/2 font-serif italic text-[#CFFF04] text-4xl md:text-6xl z-20 mix-blend-difference">
                        Cinema
                    </span>

                    {/* Main Title "Akurart Archive" */}
                    {/* Using a massive font size to match the reference */}
                    <h1 className="font-display text-[15vw] leading-[0.8] tracking-tighter text-white uppercase break-all md:break-normal">
                        Akurart <br className="md:hidden" /> Archive
                    </h1>
                </div>

                {/* Subtext tagline aligned with bottom or absolute as needed */}
                <div className="absolute top-0 right-0 hidden md:block max-w-sm text-right">
                    <p className="font-serif italic text-white/80 text-sm md:text-base">
                        Media budaya & sinema berbasis narasi, refleksi, dan pengalaman manusia.
                    </p>
                    {featuredArticle && (
                        <div className="mt-4 p-4 bg-white/10 backdrop-blur-md rounded-lg text-left border border-white/20">
                            <div className="text-xs uppercase tracking-widest text-[#CFFF04] mb-1">Featured</div>
                            <div className="font-display text-xl leading-tight mb-2">{featuredArticle.title}</div>
                            <Link href={`/article/${featuredArticle.slug?.current}`} className="text-sm underline underline-offset-4 hover:text-[#CFFF04]">Read Now</Link>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
