
interface Movie {
    _id: string;
    title: string;
    year: string;
    mood: string;
    whyWatch: string;
}

export default function CinemaSelects({ movies = [] }: { movies?: Movie[] }) {
    // Show max 6 movies
    const displayMovies = movies.slice(0, 6);

    if (!displayMovies || displayMovies.length === 0) return null;

    return (
        <section className="w-full bg-[#0F0E0E] px-[10px] pb-[10px]">
            {/* White Card Container */}
            <div className="w-full bg-[#FDFFFF] rounded-2xl md:rounded-3xl px-4 py-12 md:px-12 md:py-24 overflow-hidden">
                <div className="mb-16 md:mb-24">
                    <h2 className="font-display text-7xl md:text-9xl tracking-tighter leading-[0.8] text-[#0F0E0E]">
                        Cinema<br />Selects
                    </h2>
                </div>

                <div className="w-full overflow-x-auto">
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
                                <tr key={movie._id} className="group border-b-2 border-dotted border-[#0F0E0E]/20 hover:bg-[#0F0E0E]/5 transition-colors">
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
            </div>
        </section>
    );
}
