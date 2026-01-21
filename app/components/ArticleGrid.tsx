import Link from "next/link";
import Image from "next/image";
import { client } from "@/app/sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);
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
                <Link href="/archive" className="text-sm border border-white/20 px-4 py-2 rounded-full hover:bg-white hover:text-black transition-colors">
                    Lihat Semua
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {displayArticles.map((article) => (
                    <ArticleCard key={article._id} article={article} />
                ))}
            </div>
        </section>
    );
}

function ArticleCard({ article }: { article: Article }) {
    const imageUrl = article.mainImage ? urlFor(article.mainImage)?.width(600).url() : null;

    return (
        <Link href={`/article/${article.slug.current}`} className="group flex flex-col gap-3 cursor-pointer">
            {/* Image Container with Blur Effect */}
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-md bg-zinc-900 border border-white/10">
                {imageUrl ? (
                    <Image
                        src={imageUrl}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-zinc-700 font-display text-2xl">
                        NO IMAGE
                    </div>
                )}

                {/* Hover Text Effect Overlay (Optional per design, but good for "blurred placeholder" look) */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <p className="font-serif italic text-white/90 text-sm line-clamp-4">
                        {article.introBlurb || "Baca selengkapnya tentang artikel ini..."}
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-1">
                <h3 className="font-display text-xl leading-snug group-hover:text-brand-orange transition-colors">
                    {article.title}
                </h3>
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-zinc-500 font-medium">
                    <span className="text-brand-green">{article.category}</span>
                    <span>•</span>
                    <span>{new Date(article.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                </div>
            </div>
        </Link>
    );
}
