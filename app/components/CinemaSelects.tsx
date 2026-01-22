"use client";

import { useRef, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { client } from "@/app/sanity/client";
import { createImageUrlBuilder } from "@sanity/image-url";

const builder = createImageUrlBuilder(client);
function urlFor(source: any) {
    return source ? builder.image(source) : null;
}

interface Movie {
    _id: string;
    title: string;
    year: string;
    mood: string;
    whyWatch: string;
    poster?: any;
}

export default function CinemaSelects({ movies = [] }: { movies?: Movie[] }) {
    // Show max 6 movies
    const displayMovies = movies.slice(0, 6);

    // State & Refs for Cursor Tracking
    const [hoveredMovie, setHoveredMovie] = useState<Movie | null>(null);
    const [mounted, setMounted] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const previewRef = useRef<HTMLDivElement>(null);

    // GSAP QuickTo for high-performance mouse tracking
    const xTo = useRef<any>(null);
    const yTo = useRef<any>(null);

    // Ensure we are mounted before using document.body
    useEffect(() => {
        setMounted(true);
    }, []);

    useGSAP(() => {
        if (!previewRef.current) return;

        // Initialize quickTo functions
        // Reduced duration for snappier feel, power2 for natural but quick movement
        xTo.current = gsap.quickTo(previewRef.current, "x", { duration: 0.05, ease: "power2.out" });
        yTo.current = gsap.quickTo(previewRef.current, "y", { duration: 0.05, ease: "power2.out" });
    }, { scope: containerRef, dependencies: [mounted] }); // Scope to container, re-run on mount

    // Handle Mouse Move
    const handleMouseMove = (e: React.MouseEvent) => {
        if (!xTo.current || !yTo.current) return;

        // Use viewport coordinates directly since the preview is 'fixed'
        xTo.current(e.clientX);
        yTo.current(e.clientY);
    };

    // Handle Entry/Exit Animation
    const handleMouseEnterRow = (movie: Movie) => {
        setHoveredMovie(movie);
        if (previewRef.current) {
            gsap.to(previewRef.current, { scale: 1, opacity: 1, duration: 0.2, ease: "back.out(1.7)" });
        }
    };

    const handleMouseLeaveRow = () => {
        setHoveredMovie(null);
        if (previewRef.current) {
            gsap.to(previewRef.current, { scale: 0, opacity: 0, duration: 0.15 });
        }
    };

    if (!displayMovies || displayMovies.length === 0) return null;

    return (
        <section className="w-full bg-[#0F0E0E] px-[10px] pb-[10px]">
            {/* White Card Container */}
            <div
                ref={containerRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={() => {
                    setHoveredMovie(null);
                    if (previewRef.current) {
                        gsap.to(previewRef.current, { scale: 0, opacity: 0, duration: 0.15 });
                    }
                }}
                className="relative w-full bg-[#FDFFFF] rounded-2xl md:rounded-3xl px-4 py-12 md:px-12 md:py-24 overflow-hidden"
            >
                <div className="mb-16 md:mb-24">
                    <h2 className="font-display text-7xl md:text-9xl tracking-tighter leading-[0.8] text-[#0F0E0E]">
                        Cinema<br />Selects
                    </h2>
                </div>

                <div className="w-full overflow-x-auto relative z-10">
                    <table className="w-full text-left border-collapse min-w-[800px]">
                        <thead>
                            <tr className="border-b-2 border-dotted border-[#0F0E0E]/30 text-[#8C8D92] font-sans text-sm font-medium">
                                <th className="py-4 pr-8 w-[25%]">Film</th>
                                <th className="py-4 pr-8 w-[10%]">Year</th>
                                <th className="py-4 pr-8 w-[20%]">Mood</th>
                                <th className="py-4 w-[45%] text-right">Why watch</th>
                            </tr>
                        </thead>
                        <tbody className="font-sans">
                            {displayMovies.map((movie) => (
                                <tr
                                    key={movie._id}
                                    onMouseEnter={() => handleMouseEnterRow(movie)}
                                    // Don't clear on mouse leave row immediately, handled by container or switching rows
                                    className="group border-b-2 border-dotted border-[#0F0E0E]/20 hover:bg-[#0F0E0E]/5 transition-colors cursor-default"
                                >
                                    <td className="py-6 pr-8 font-bold text-lg text-[#0F0E0E] group-hover:text-[#FF5700] transition-colors">
                                        {movie.title}
                                    </td>
                                    <td className="py-6 pr-8 text-[#0F0E0E]">
                                        {movie.year}
                                    </td>
                                    <td className="py-6 pr-8 text-[#0F0E0E]">
                                        {movie.mood}
                                    </td>
                                    <td className="py-6 text-right text-[#8C8D92] group-hover:text-[#0F0E0E] transition-colors">
                                        {movie.whyWatch}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Floating Preview Image - Portaled to Body to escape overflow/transforms */}
                {mounted && createPortal(
                    <div
                        ref={previewRef}
                        className="fixed top-0 left-0 w-[200px] h-[300px] pointer-events-none z-50 origin-center opacity-0 scale-0"
                        style={{
                            // Start centered on cursor but slightly offset
                            marginTop: -150,
                            marginLeft: 20
                        }}
                    >
                        {hoveredMovie?.poster && (
                            <div className="relative w-full h-full overflow-hidden bg-gray-200">
                                <Image
                                    src={urlFor(hoveredMovie.poster)?.width(400).url() || ""}
                                    alt={hoveredMovie.title}
                                    fill
                                    unoptimized
                                    className="object-cover"
                                />
                            </div>
                        )}
                    </div>,
                    document.body
                )}
            </div>
        </section>
    );
}
