import Image from "next/image";
import ArticleCard from "../components/ArticleCard";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-sans">
      <main className="flex flex-col gap-8 row-start-2 items-center text-center max-w-4xl mx-auto">

        {/* Hero Text */}
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tighter uppercase">
          Jadikan senja gurau <br />
          sebagai motivasi hidup
        </h1>

        <div className="flex items-center gap-4 text-xl md:text-2xl font-serif italic text-white/60">
          <span>Lagu</span>
          <span className="w-1.5 h-1.5 rounded-full bg-white/30"></span>
          <span>January 18, 2026</span>
        </div>

        {/* Hero Image Placeholder - To be replaced by CMS content */}
        <div className="w-full aspect-video relative mt-8 rounded-lg overflow-hidden bg-white/5 border border-white/10 group cursor-pointer">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
          <div className="absolute inset-0 flex items-center justify-center text-white/20 group-hover:text-white/40 transition-colors z-0">
            {/* Placeholder until we have the hero image */}
            <div className="text-center">
              <span className="block font-display text-6xl opacity-20">HERO</span>
            </div>
          </div>

          <div className="absolute bottom-8 left-8 right-8 z-20 text-left">
            <div className="inline-block px-3 py-1 bg-brand-orange/20 text-brand-orange border border-brand-orange/30 rounded-full text-sm font-medium mb-3 backdrop-blur-md">
              Featured
            </div>
            <h2 className="font-display text-3xl md:text-5xl leading-tight">Bersenja Gurau - Raim Laode</h2>
            <p className="font-serif italic text-white/70 mt-2 max-w-xl text-lg">
              Dalam lanskap musik Indonesia kontemporer, karya-karya Raim Laode menempati ruang yang unik...
            </p>
          </div>
        </div>

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
