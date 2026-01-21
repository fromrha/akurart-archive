
import { groq } from "next-sanity";

// Query for the Homepage
export const HOME_PAGE_QUERY = groq`{
  "featuredArticle": *[_type == "article" && featured == true][0]{
    _id,
    title,
    slug,
    introBlurb,
    publishedAt,
    mainImage,
    bannerImage, 
    "category": categories[0]->title
  },
  "recentArticles": *[_type == "article" && featured != true] | order(publishedAt desc)[0..7]{
    _id,
    title,
    slug,
    introBlurb,
    publishedAt,
    mainImage,
    "category": categories[0]->title
  },
  "movies": *[_type == "movie"] | order(year desc){
    _id,
    title,
    year,
    mood,
    whyWatch
  }
}`;

// Query for the Article Detail Page
// Requires $slug parameter
export const ARTICLE_QUERY = groq`*[_type == "article" && slug.current == $slug][0]{
  _id,
  title,
  publishedAt,
  introBlurb,
  body,
  mainImage,
  bannerImage,
  "category": categories[0]->title,
  "author": author->{name, image}
}`;
