import { z } from "zod";

// interface BlogPropsType {
//   _id?: string;
//   id?: string;
//   title: string;
//   excerpt: string;
//   image: string;
//   category: string;
//   createdAt: string;
//   description: string;
//   author: string;
//   readTime: number;
//   url: string;
// }

export const BlogFormType = z.object({
  id: z.string().optional(),
  _id: z.string().optional(),
  title: z.string().min(1, "Title is required"),
  excerpt: z.string().min(1, "Excerpt is required"),
  description: z.string().min(1, "Description is required"),
  author: z.string().min(1, "Author is required"),
  tags: z.array(z.string()).min(1, "At least one tag is required"),
  image: z.string().min(1, "Image is required"),
  createdAt: z.string().optional(),
  relatedPosts: z
    .array(z.string())
    .min(1, "At least one related post is required"),
});

export type BlogPostFormProps = z.infer<typeof BlogFormType>;
