import { z } from "zod";

export const teamSchema = z.object({
  firstName: z.string().min(1, { message: "Please enter first name" }),
  lastName: z.string().min(1, { message: "Please enter last name" }),
  professionPosition: z.string().min(1, { message: "Please enter profession postition" }),
  companyPosition: z.optional(z.string()),
});

export type TeamSchema = z.infer<typeof teamSchema>;

export const teamDefaultValues = {
  firstName: "",
  lastName: "",
  professionPosition: "",
  companyPosition: "",
} satisfies TeamSchema;
