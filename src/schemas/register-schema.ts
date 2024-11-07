import { z } from "zod";

export const registerSchema = z.object({
  username: z.string(),
  password: z.string(),
});

export type RegisterSchema = z.infer<typeof registerSchema>;
