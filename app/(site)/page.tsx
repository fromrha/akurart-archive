import Marquee from "../components/Marquee";
import Hero from "../components/Hero";
import ArticleGrid from "../components/ArticleGrid";
import CinemaSelects from "../components/CinemaSelects";
import SubscriptionCTA from "../components/SubscriptionCTA";
import { client } from "@/app/sanity/client";
import { HOME_PAGE_QUERY } from "@/app/sanity/queries";

// Revalidate every 60 seconds
export const revalidate = 60;

export default async function Home() {
  let data = { recentArticles: [], movies: [] };

  try {
    data = await client.fetch(HOME_PAGE_QUERY);
  } catch (error) {
    console.error("Failed to fetch data from Sanity:", error);
    // You could also redirect to a dedicated error page or show a toast
  }

  const { recentArticles = [], movies = [] } = data;

  return (
    <main className="min-h-screen bg-[#0F0E0E] text-[#FDFFFF] selection:bg-[#FF5700] selection:text-[#0F0E0E]">
      <Hero />
      <ArticleGrid articles={recentArticles} />
      <CinemaSelects movies={movies} />
      <SubscriptionCTA />
    </main>
  );
}
