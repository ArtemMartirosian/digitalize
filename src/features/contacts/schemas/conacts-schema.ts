import { z } from "zod";

export const contactsSchema = z.object({
  firstName: z.string().min(1, { message: "Please enter a first name" }),
  lastName: z.string().min(1, { message: "Please enter a last name" }),
  email: z.string().email("Please enter a valid email address"),
  phoneNumber: z.string().min(1, { message: "Please enter a phone number" }),
  message: z
    .string()
    .min(1, { message: "Please enter a message" })
    .max(256, { message: "Message can not be longer than 256 characters" }),
});

export type ContactsSchema = z.infer<typeof contactsSchema>;

export const contactsDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  message: "",
  phoneNumber: "",
} satisfies ContactsSchema;
