import { defineField, defineType } from "sanity";

export const aboutPage = defineType({
    name: "aboutPage",
    title: "About Page",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Page Title",
            type: "string",
            initialValue: "About",
        }),
        defineField({
            name: "galleryImages",
            title: "Gallery Images",
            type: "array",
            of: [{ type: "image", options: { hotspot: true } }],
            description: "Images for the horizontal scrolling gallery",
        }),
        defineField({
            name: "sectionTitle",
            title: "Section Title",
            type: "string",
            initialValue: "Why this exists",
            description: "e.g., 'Why this exists'",
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "text",
            description: "The main text content for the about page.",
        }),
    ],
});
