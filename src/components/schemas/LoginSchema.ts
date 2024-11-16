import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, { message: "Password must be at least 8 characters" }),
});

// Type inferred from the schema
export type ILogin = z.infer<typeof loginSchema>;
