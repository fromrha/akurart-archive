import ArticleGrid from "../../components/ArticleGrid";
import { client } from "@/app/sanity/client";
import { ALL_ARTICLES_QUERY } from "@/app/sanity/queries";

// Revalidate every 60 seconds
export const revalidate = 60;

export default async function Archive() {
  let articles = [];

  try {
    articles = await client.fetch(ALL_ARTICLES_QUERY);
  } catch (error) {
    console.error("Failed to fetch articles from Sanity:", error);
  }

  return (
    <main className="min-h-screen bg-[#0F0E0E] text-[#FDFFFF] selection:bg-[#FF5700] selection:text-[#0F0E0E]">
      <div className="w-full px-[10px] pt-[20px] pb-[10px]">
        <h1 className="text-center font-serif italic text-4xl md:text-5xl text-[#FDFFFF]">
          Archive
        </h1>
      </div>
      <ArticleGrid articles={articles} showAll={true} />
    </main>
  );
}