
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { client } from "@/app/sanity/client";
import { ARTICLE_QUERY } from "@/app/sanity/queries";
import { notFound } from "next/navigation";
import imageUrlBuilder from "@sanity/image-url";

// Image Builder Helper
const builder = imageUrlBuilder(client);
function urlFor(source: any) {
    return source ? builder.image(source) : null;
}

export const revalidate = 60; // Revalidate every 60 seconds

export default async function ArticlePage({ params }: { params: { slug: string } }) {
    const { slug } = params;
    const article = await client.fetch(ARTICLE_QUERY, { slug });

    if (!article) {
        notFound();
    }

    return (
        <article className="min-h-screen bg-[#050505] text-white selection:bg-brand-orange selection:text-white">

            {/* Header Section */}
            <header className="max-w-[1400px] mx-auto px-4 md:px-8 pt-12 md:pt-20 flex flex-col items-center text-center">

                {/* Title */}
                <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tighter max-w-5xl mb-6">
                    {article.title}
                </h1>

                {/* Meta */}
                <div className="flex items-center gap-3 text-xl md:text-2xl font-serif italic text-white/60 mb-12">
                    <span>{article.category || "Uncategorized"}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-white/30"></span>
                    <span>
                        {new Date(article.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </span>
                </div>

                {/* Featured Image (Banner) */}
                <div className="w-full aspect-video md:aspect-[21/9] relative rounded-lg overflow-hidden border border-white/10 mb-16">
                    {article.bannerImage || article.mainImage ? (
                        <Image
                            src={urlFor(article.bannerImage || article.mainImage)?.url() || ""}
                            alt={article.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    ) : (
                        <div className="w-full h-full bg-zinc-900 flex items-center justify-center text-zinc-700">No Image</div>
                    )}
                </div>
            </header>

            {/* Intro Section - Two Column */}
            <section className="max-w-[1400px] mx-auto px-4 md:px-8 mb-20">
                <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 border-t border-white/10 pt-8">
                    <div className="font-display text-xl text-zinc-400">Intro</div>
                    <div className="font-sans text-lg md:text-xl leading-relaxed text-zinc-200 max-w-3xl">
                        {article.introBlurb}
                    </div>
                </div>
            </section>

            {/* Content Section - White Paper Style */}
            <section className="bg-[#ededed] text-black w-full rounded-t-[2.5rem] md:rounded-t-[4rem] px-4 md:px-8 py-20 min-h-screen">
                <div className="max-w-3xl mx-auto">

                    {/* Inner Header */}
                    <div className="mb-12 border-b border-black/10 pb-8">
                        <h2 className="font-display text-3xl md:text-4xl leading-tight mb-2">
                            {article.title} {article.author?.name && `- ${article.author.name}`}
                        </h2>
                    </div>

                    {/* Rich Text Content */}
                    <div className="prose prose-lg prose-zinc max-w-none">
                        <PortableText
                            value={article.body}
                            components={{
                                block: {
                                    normal: ({ children }) => <p className="font-sans text-lg md:text-xl leading-relaxed mb-6">{children}</p>,
                                    h2: ({ children }) => <h2 className="font-display text-3xl font-bold mt-12 mb-6">{children}</h2>,
                                    h3: ({ children }) => <h3 className="font-display text-2xl font-bold mt-8 mb-4">{children}</h3>,
                                    blockquote: ({ children }) => <blockquote className="border-l-4 border-brand-orange pl-6 py-2 my-8 font-serif italic text-2xl bg-white/50">{children}</blockquote>
                                },
                                types: {
                                    image: ({ value }) => {
                                        return (
                                            <div className="relative w-full aspect-video my-12 rounded-lg overflow-hidden">
                                                <Image src={urlFor(value)?.url() || ""} alt="Content Image" fill className="object-cover" />
                                            </div>
                                        )
                                    }
                                }
                            }}
                        />
                    </div>
                </div>
            </section>

        </article>
    );
}
