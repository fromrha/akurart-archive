import Marquee from "../../components/Marquee";
import ArticleGrid from "../../components/ArticleGrid";
import SubscriptionCTA from "../../components/SubscriptionCTA";
import ScrollReveal from '../../components/ScrollReveal';
import { client } from "@/app/sanity/client";
import { ALL_ARTICLES_QUERY } from "@/app/sanity/queries";

// Revalidate every 60 seconds
export const revalidate = 60;

export default async function Archive() {
  let articles = [];

  try {
    articles = await client.fetch(ALL_ARTICLES_QUERY);
  } catch (error) {
    console.error("Failed to fetch data from Sanity:", error);
  }

  return (
    <main className="min-h-screen bg-[#0F0E0E] text-[#FDFFFF] selection:bg-[#FF5700] selection:text-[#0F0E0E]">
      <div className="hidden md:block">
        <Marquee />
      </div>
      <div className="w-full px-[10px] py-[60px] md:py-[100px]">
        <h1 className="text-center font-tilt-warp font-semibold text-7xl md:text-9xl text-[#FDFFFF] tracking-tight">
          Archive
        </h1>
      </div>
      <ArticleGrid articles={articles} showAll={true} />
      <div className="min-h-screen flex items-center justify-center bg-[#0F0E0E] px-[10px] py-[60px] md:py-[100px]">
        <ScrollReveal
          baseOpacity={0}
          enableBlur
          baseRotation={3}
          blurStrength={4}
          textClassName="font-geist-sans font-semibold"
        >
          Kami menulis tentang lagu-lagu favorit karena musik menyimpan cerita. Setiap lagu yang kami bahas merupakan sebuah ornamen yang secara personal meninggalkan jejak, emosi, ingatan, dan pengalaman tak terlupakan
        </ScrollReveal>
      </div>
      <SubscriptionCTA />
    </main>
  );
}