"use server";

import { contactsSchema, ContactsSchema } from "../schemas/conacts-schema";

export const sendEmail = async (values: ContactsSchema) => {
  const validatedFields = contactsSchema.safeParse(values);
  if (!validatedFields.success) return { error: "Invalid fields", success: null };
};
