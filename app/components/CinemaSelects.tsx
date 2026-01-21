
interface Movie {
    _id: string;
    title: string;
    year: string;
    mood: string;
    whyWatch: string;
}

export default function CinemaSelects({ movies = [] }: { movies?: Movie[] }) {
    // Hide if no movies
    if (!movies || movies.length === 0) return null;

    return (
        <section className="w-full max-w-[1400px] mx-auto px-4 md:px-8 py-20 border-t border-white/5">
            <div className="mb-12">
                <h2 className="font-display text-7xl md:text-9xl tracking-tighter leading-[0.8]">
                    Cinema<br />Selects
                </h2>
            </div>

            <div className="w-full overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[600px]">
                    <thead>
                        <tr className="border-b border-white/20 text-[#8C8D92] font-sans text-sm uppercase tracking-wider">
                            <th className="py-4 pr-8 font-medium w-[25%]">Film</th>
                            <th className="py-4 pr-8 font-medium w-[10%]">Year</th>
                            <th className="py-4 pr-8 font-medium w-[20%]">Mood</th>
                            <th className="py-4 font-medium w-[45%] text-right">Why watch</th>
                        </tr>
                    </thead>
                    <tbody className="font-sans">
                        {movies.map((movie) => (
                            <tr key={movie._id} className="group border-b border-white/10 hover:bg-white/5 transition-colors">
                                <td className="py-6 pr-8 font-bold text-lg group-hover:text-[#FF5700] transition-colors">
                                    {movie.title}
                                </td>
                                <td className="py-6 pr-8 text-[#8C8D92]">
                                    {movie.year}
                                </td>
                                <td className="py-6 pr-8 text-[#FDFFFF]">
                                    {movie.mood}
                                </td>
                                <td className="py-6 text-right text-[#8C8D92] group-hover:text-[#FDFFFF] transition-colors">
                                    {movie.whyWatch}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}
