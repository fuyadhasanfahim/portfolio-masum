import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name").max(80),
  email: z.string().email("Enter a valid email"),
  subject: z.string().min(3, "Subject is too short").max(120),
  message: z.string().min(10, "Tell me a bit more (10+ chars)").max(2000),
});

export type ContactInput = z.infer<typeof contactSchema>;
