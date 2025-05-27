import { z } from "zod";

export const ContactFormType = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email"),
  phone: z
    .string()
    .min(10, "Phonenumber must be 10 digits and is required")
    .max(10, "Phonenumber must be 10 digits"),
  message: z.string().min(1, "Message is required"),
});

export type ContactFormProps = z.infer<typeof ContactFormType>;
