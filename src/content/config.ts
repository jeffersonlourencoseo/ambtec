import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    draft: z.boolean().default(false),
    author: z.string().default('Ambtec'),
    authorRole: z.string().optional(),
    authorCredentials: z.string().optional(),
    tags: z.array(z.string()).optional(),
    updatedDate: z.coerce.date().optional(),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).optional(),
  }),
});

const servicosCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string().optional(),
    h1: z.string().optional(),
    seoTitle: z.string().optional(),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).optional(),
  }),
});

export const collections = {
  blog: blogCollection,
  servicos: servicosCollection,
};
