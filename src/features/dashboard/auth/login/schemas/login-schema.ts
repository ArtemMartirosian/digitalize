import { z } from "zod";

export const loginSchema = z.object({
  username: z.string().min(1, { message: "Please enter username" }),
  password: z.string().min(1, { message: "Please enter password" }),
});

export type LoginSchema = z.infer<typeof loginSchema>;
