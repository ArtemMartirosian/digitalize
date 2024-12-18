import { z } from "zod";

export const portfolioSchema = z.object({
  name: z.string().min(1, { message: "Please enter project name" }),
  url: z.string().url({ message: "Please enter valid URL address" }),
});

export type PortfolioSchema = z.infer<typeof portfolioSchema>;
