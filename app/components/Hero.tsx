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
    // Date formatting
    const formattedDate = featuredArticle?.publishedAt
        ? new Date(featuredArticle.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
        : "";

    return (
        <section className="relative w-full h-screen flex flex-col justify-center items-center text-center px-4 md:px-8 overflow-hidden">

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

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-black/60 bg-gradient-to-t from-black/80 via-black/40 to-black/30"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center gap-6 pt-20">

                {featuredArticle ? (
                    <>
                        {/* Featured Label / Cinema Brand */}
                        <div className="flex flex-col items-center mb-4">
                            <div className="font-serif italic text-brand-orange text-2xl md:text-3xl mb-2">
                                Cinema
                            </div>
                            {/* Optional Logo or text if needed, but keeping it clean for now */}
                        </div>

                        {/* Main Headline (Article Title) */}
                        <Link href={`/article/${featuredArticle.slug?.current}`}>
                            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tighter text-white uppercase hover:text-zinc-200 transition-colors drop-shadow-lg cursor-pointer">
                                {featuredArticle.title}
                            </h1>
                        </Link>

                        {/* Meta Info */}
                        <div className="flex items-center gap-4 text-xl md:text-2xl font-serif italic text-white/80 mt-4">
                            <span>{featuredArticle.category || "Feature"}</span>
                            {formattedDate && (
                                <>
                                    <span className="w-1.5 h-1.5 rounded-full bg-white/40"></span>
                                    <span>{formattedDate}</span>
                                </>
                            )}
                        </div>
                    </>
                ) : (
                    /* Fallback if no featured article */
                    <h1 className="font-display text-6xl md:text-8xl text-white opacity-20 uppercase">
                        Akurart Archive
                    </h1>
                )}
            </div>
        </section>
    );
}

