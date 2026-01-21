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
    // Show exactly 4 items
    const displayArticles = articles.slice(0, 4);

    if (!displayArticles || displayArticles.length === 0) {
        return null;
    }

    return (
        <section className="w-full bg-[#0F0E0E] px-[10px] pb-[10px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[10px]">
                {displayArticles.map((article) => (
                    <ArticleCard key={article._id} article={article} />
                ))}
            </div>

            {/* "Baca lain nya" Bottom Button */}
            <div className="mt-[10px] w-full">
                <Link
                    href="/archive"
                    className="flex items-center justify-center w-full bg-[#FDFFFF] py-8 rounded-2xl transition-transform duration-300 hover:scale-[1.005] active:scale-[0.995]"
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
    // Generate URL and use unoptimized to bypass potential local DNS/IP issues with Next.js images
    const imageUrl = article.mainImage ? urlFor(article.mainImage)?.url() : null;

    return (
        <Link href={`/article/${article.slug.current}`} className="group relative block w-full overflow-hidden rounded-2xl bg-zinc-900 aspect-[625/700]">
            {/* Image Container */}
            <div className="relative w-full h-full overflow-hidden">
                {imageUrl ? (
                    <Image
                        src={imageUrl}
                        alt={article.title}
                        fill
                        unoptimized
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-zinc-700 font-display text-2xl">
                        NO IMAGE
                    </div>
                )}

                {/* Gradient for text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>

            {/* Content Glassmorphic Overlay */}
            <div className="absolute bottom-4 left-4 right-4 md:bottom-5 md:left-5 md:right-5">
                <div className="bg-[#acacac]/10 backdrop-blur-md rounded-xl p-6 border border-white/10 shadow-2xl">
                    <h3 className="font-sans font-semibold text-xl md:text-2xl text-[#FDFFFF] leading-tight mb-2">
                        {article.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-[#FDFFFF]/80 font-sans">
                        <span className="font-medium tracking-wider">{article.category}</span>
                        <span className="opacity-40">•</span>
                        <span>{new Date(article.publishedAt || (article as any)._createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
}
