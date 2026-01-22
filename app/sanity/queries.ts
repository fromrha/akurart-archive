
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
  "recentArticles": *[_type == "article"] | order(publishedAt desc, _createdAt desc)[0..7]{
    _id,
    title,
    slug,
    introBlurb,
    publishedAt,
    _createdAt,
    mainImage,
    "category": categories[0]->title
  },
  "movies": *[_type == "movie"] | order(year desc){
    _id,
    title,
    year,
    mood,
    whyWatch,
    poster
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

// Query for all articles on Archive page
export const ALL_ARTICLES_QUERY = groq`*[_type == "article"] | order(publishedAt desc, _createdAt desc){
  _id,
  title,
  slug,
  introBlurb,
  publishedAt,
  _createdAt,
  mainImage,
  "category": categories[0]->title
}`;
