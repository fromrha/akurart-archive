import Marquee from "../../components/Marquee";
import ArticleGrid from "../../components/ArticleGrid";
import CinemaSelects from "../../components/CinemaSelects";
import SubscriptionCTA from "../../components/SubscriptionCTA";
import { client } from "@/app/sanity/client";
import { ALL_ARTICLES_QUERY } from "@/app/sanity/queries";

// Revalidate every 60 seconds
export const revalidate = 60;

export default async function Archive() {
  let data = { articles: [], movies: [] };

  try {
    const articles = await client.fetch(ALL_ARTICLES_QUERY);
    const movies = await client.fetch(`*[_type == "movie"] | order(year desc){
      _id,
      title,
      year,
      mood,
      whyWatch,
      poster
    }`);
    data = { articles, movies };
  } catch (error) {
    console.error("Failed to fetch data from Sanity:", error);
  }

  const { articles = [], movies = [] } = data;

  return (
    <main className="min-h-screen bg-[#0F0E0E] text-[#FDFFFF] selection:bg-[#FF5700] selection:text-[#0F0E0E]">
      <div className="hidden md:block">
        <Marquee />
      </div>
      <div className="w-full px-[10px] pt-[20px] pb-[10px]">
        <h1 className="text-center font-serif italic text-4xl md:text-5xl text-[#FDFFFF]">
          Arsip
        </h1>
      </div>
      <ArticleGrid articles={articles} showAll={true} />
      <CinemaSelects movies={movies} />
      <SubscriptionCTA />
    </main>
  );
}