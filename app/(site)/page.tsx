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
  const data = await client.fetch(HOME_PAGE_QUERY);
  const { recentArticles, movies } = data;

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-brand-orange selection:text-white">
      <Marquee />
      <Hero />
      <ArticleGrid articles={recentArticles} />
      <CinemaSelects movies={movies} />
      <SubscriptionCTA />
    </main>
  );
}
