import Image from "next/image";
import ArticleCard from "../components/ArticleCard";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-sans">
      <main className="flex flex-col gap-8 row-start-2 items-center text-center max-w-4xl mx-auto">

        {/* Hero Text */}
        <Hero />

      </main>

      {/* Article Grid Section */}
      <section className="row-start-3 w-full max-w-[1400px] mx-auto px-4 md:px-8 py-16">
        <div className="flex items-center justify-between mb-12">
          <h2 className="font-display text-4xl">Terbaru</h2>
          <button className="text-sm border border-white/20 px-4 py-2 rounded-full hover:bg-white hover:text-black transition-colors">
            Lihat Semua
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ArticleCard
            title="Tidak Ada Raja Tanpa Cerita"
            category="Lagu"
            date="January 20, 2026"
            slug="tidak-ada-raja"
            thumbnail=""
          />
          <ArticleCard
            title="Jadikan senja gurau sebagai motivasi"
            category="Lagu"
            date="January 18, 2026"
            slug="bersenja-gurau"
            thumbnail=""
          />
          <ArticleCard
            title="Color, Repetition, and the Sound of"
            category="Lagu"
            date="July 11, 2028"
            slug="color-repetition"
            thumbnail=""
          />
          <ArticleCard
            title="Mirrors, Image Loops, and Feed..."
            category="Lagu"
            date="June 24, 2028"
            slug="mirrors-loops"
            thumbnail=""
          />
        </div>
      </section>
    </div>
  );
}
