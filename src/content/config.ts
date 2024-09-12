

import { defineCollection, reference, z } from "astro:content";

const blogCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        date: z.date(),
        description: z.string(),
        image: z.string(),
        //relaciones
        tags: z.array(z.string()),
        // author: z.string(),
        author: reference('author'),
        isDraft: z.boolean().default(false),
    }),
});

const authorCollection = defineCollection({
    type: "data",
    schema: ({image}) => z.object({
        name: z.string(),
        avatar: image(),
        twitter: z.string(),
        github: z.string(),
        linkedIn: z.string(),
        bio: z.string(),
        subtitle: z.string(),
    }),
});



export const collections = {
    //blog es el nombre de la colección, y de la carpeta que contiene los archivos dentro de content
    blog: blogCollection,
    author: authorCollection,
}