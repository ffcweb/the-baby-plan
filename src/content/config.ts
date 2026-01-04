import { defineCollection, z } from 'astro:content';

const pregnancyCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    kit: z.string(),
    kitLink: z.string().url(),
  }),
});

const parentingCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    kit: z.string(),
    kitLink: z.string().url(),
  }),
});

export const collections = {
  'pregnancy': pregnancyCollection,
  'parenting': parentingCollection,
};