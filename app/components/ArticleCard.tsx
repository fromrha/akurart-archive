import Image from "next/image";
import Link from "next/link";

interface ArticleCardProps {
    title: string;
    category: "Lagu" | "Visual" | "Musik" | "Lainnya";
    date: string;
    thumbnail: string; // URL for now
    intro?: string;
    slug: string;
}

export default function ArticleCard({ title, category, date, thumbnail, intro, slug }: ArticleCardProps) {
    // Map category to brand colors
    const categoryColor = {
        "Lagu": "text-brand-orange",
        "Visual": "text-brand-blue",
        "Musik": "text-brand-green",
        "Lainnya": "text-zinc-400"
    }[category];

    return (
        <Link href={`/article/${slug}`} className="group block">
            <div className="flex flex-col gap-4">
                {/* Image Container */}
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-md bg-zinc-900 border border-white/10">
                    {/* Placeholder for image, or actual image if provided */}
                    {/* We use a simple div with colored gradient as placeholder if no image for now */}
                    <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-950 transition-transform duration-500 group-hover:scale-105">
                        {thumbnail && !thumbnail.startsWith("/") ? (
                            // Attempt to show image if it's an external URL
                            <Image
                                src={thumbnail}
                                alt={title}
                                fill
                                className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                            />
                        ) : (
                            <div className="absolute inset-0 flex items-center justify-center text-zinc-700 font-display text-4xl opacity-20">
                                Akurart
                            </div>
                        )}
                    </div>

                    {/* Overlay Content (Title overlay at bottom like in design) */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent pt-12">
                        <h3 className="font-display text-3xl leading-none tracking-tight text-white mb-2 group-hover:underline decoration-brand-orange decoration-2 underline-offset-4">
                            {title}
                        </h3>
                    </div>
                </div>

                {/* Meta Data */}
                <div className="flex items-center justify-between border-t border-white/10 pt-3">
                    <div className="flex flex-col">
                        <span className={`font-serif italic text-lg ${categoryColor}`}>{category}</span>
                        <span className="text-xs text-zinc-500 uppercase tracking-wider">{date}</span>
                    </div>
                    {/* Arrow Icon */}
                    <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform rotate-45 group-hover:rotate-0 transition-transform">
                            <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
            </div>
        </Link>
    );
}
