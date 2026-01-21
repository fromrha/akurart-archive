import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './app/sanity/schema'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

export default defineConfig({
    basePath: '/studio',
    name: 'Akurart_Studio',
    title: 'Akurart Studio',

    projectId,
    dataset,

    plugins: [structureTool()],

    schema: {
        types: schemaTypes,
    },
})
