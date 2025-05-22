import { z } from "zod";

export const ProductFormType = z.object({
  _id: z.string().optional(),
  image: z.string().min(1, "Image is required"),
  name: z.string().min(1, "Name is required"),
  category: z.string().min(1, "Category is required"),
  brand: z.string().min(1, "Brand is required"),
  price: z.string().min(0, "Price must be a positive number"),
  originalPrice: z.string().optional(),
  rating: z.string().min(1).max(5),
  inStock: z.string(),
  isProductNew: z.string(),
  features: z.string().min(1, "Features are required"),
  description: z.string().min(1, "Description is required"),
  specifications: z.string().min(1, "Features are required"),
  relatedProducts: z.array(z.string()).optional(),
});

export type ProductFormProps = z.infer<typeof ProductFormType>;
