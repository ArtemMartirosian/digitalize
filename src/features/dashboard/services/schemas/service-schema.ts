import { z } from "zod";

export const serviceSchema = z.object({
  name: z.string().min(1, { message: "Please enter a service name." }),
  price: z.string().min(1, { message: "Please enter a service price." }),
});

export type ServiceSchema = z.infer<typeof serviceSchema>;

export const serviceDefaultValues = {
  name: "",
  price: "",
} satisfies ServiceSchema;
