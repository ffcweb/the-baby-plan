import { defineCollection, z } from 'astro:content';

/**
 * STANDARD SCHEMA
 * Used for all Roadmap stages (Pregnancy, Parenting, Toddler, Youth)
 */
const standardSchema = z.object({
  title: z.string(),
  description: z.string(),
  kit: z.string(),           // The main "Featured" product
  kitLink: z.string().url(), // The link for the main product
  image: z.string().optional(), // Optional header image for the milestone
  // Support for multiple products in the sidebar
  recommendedProducts: z.array(z.object({
    name: z.string(),
    price: z.string(),
    link: z.string(),
    retailer: z.string()
  })).optional(),
});

/**
 * BLOG SCHEMA
 * Used for deep-dive articles and audits
 */
const blogSchema = z.object({
  title: z.string(),
  date: z.date(),
  description: z.string(),
  image: z.string().optional(),        // Cover image for the blog
  downloadFile: z.string().optional(), // Link to PDF checklists
  recommendedProducts: z.array(z.object({
    name: z.string(),
    price: z.string(),
    link: z.string(),
    retailer: z.string()
  })).optional(),
});

// Define the collections
const pregnancy = defineCollection({ type: 'content', schema: standardSchema });
const parenting = defineCollection({ type: 'content', schema: standardSchema });
const toddler = defineCollection({ type: 'content', schema: standardSchema });
const youth = defineCollection({ type: 'content', schema: standardSchema });
const blog = defineCollection({ type: 'content', schema: blogSchema });

// Export all collections
export const collections = { pregnancy, parenting, toddler, youth, blog };