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
  }),
});

const servicosCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
  servicos: servicosCollection,
};
