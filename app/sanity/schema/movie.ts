
import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'movie',
    title: 'Movie (Cinema Selects)',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'year',
            title: 'Year',
            type: 'string',
        }),
        defineField({
            name: 'mood',
            title: 'Mood',
            type: 'string',
            description: 'e.g. Hazy, melancholic',
        }),
        defineField({
            name: 'whyWatch',
            title: 'Why Watch',
            type: 'text',
            rows: 3,
            description: 'Brief reason to watch',
        }),
        defineField({
            name: 'poster',
            title: 'Poster Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
    ],
})
