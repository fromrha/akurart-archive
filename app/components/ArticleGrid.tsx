import Link from "next/link";
import Image from "next/image";
import { client } from "@/app/sanity/client";
import { createImageUrlBuilder } from "@sanity/image-url";

const builder = createImageUrlBuilder(client);
function urlFor(source: any) {
    return source ? builder.image(source) : null;
}

// TODO: Replace with Sanity Type
interface Article {
    _id: string;
    title: string;
    category: string;
    publishedAt: string;
    slug: { current: string };
    mainImage?: any; // Sanity Image
    introBlurb?: string;
}

export default function ArticleGrid({ articles = [] }: { articles?: Article[] }) {
    // If no articles fetch, fallback (layout check) or empty
    const displayArticles = articles;

    if (!displayArticles || displayArticles.length === 0) {
        return null;
    }

    return (
        <section className="w-full max-w-[1400px] mx-auto px-4 md:px-8 py-16">
            <div className="flex items-center justify-between mb-12">
                <h2 className="font-display text-4xl">Terbaru</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                {displayArticles.map((article) => (
                    <ArticleCard key={article._id} article={article} />
                ))}
            </div>

            {/* "Baca lain nya" Bottom Button */}
            <div className="mt-16 w-full">
                <Link
                    href="/archive"
                    className="flex items-center justify-center w-full bg-[#FDFFFF] py-8 rounded-md transition-transform duration-300 hover:scale-[1.01] active:scale-[0.99]"
                >
                    <span className="font-serif italic text-4xl md:text-5xl text-[#0F0E0E]">
                        Baca lain nya
                    </span>
                </Link>
            </div>
        </section>
    );
}

function ArticleCard({ article }: { article: Article }) {
    const imageUrl = article.mainImage ? urlFor(article.mainImage)?.width(800).url() : null;

    return (
        <Link href={`/article/${article.slug.current}`} className="group relative block w-full overflow-hidden rounded-xl bg-zinc-900 border border-white/5">
            {/* Image Container */}
            <div className="relative aspect-[16/10] md:aspect-square lg:aspect-[4/3] w-full overflow-hidden">
                {imageUrl ? (
                    <Image
                        src={imageUrl}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-zinc-700 font-display text-2xl">
                        NO IMAGE
                    </div>
                )}

                {/* Subtle gradient overlay for better text contrast if needed */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Content Glassmorphic Overlay - Fixed at Bottom */}
            <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6">
                <div className="bg-[#1a1a1a]/60 backdrop-blur-md rounded-xl p-6 border border-white/10 shadow-2xl">
                    <h3 className="font-sans font-semibold text-xl md:text-2xl lg:text-3xl text-[#FDFFFF] leading-tight mb-3">
                        {article.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-[#FDFFFF]/80 font-sans">
                        <span className="font-medium">{article.category}</span>
                        <span>•</span>
                        <span>{new Date(article.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
}
