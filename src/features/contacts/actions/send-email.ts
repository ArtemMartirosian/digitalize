"use server";

import { resend } from "@/lib/mail";
import { contactsSchema, ContactsSchema } from "../schemas/conacts-schema";
import { ContactsMail } from "@/features/resend-mails/components/ContactsMail";

export const sendEmail = async (values: ContactsSchema) => {
  const validatedFields = contactsSchema.safeParse(values);
  if (!validatedFields.success) return { error: "Invalid fields", success: null };
  const data = validatedFields.data;

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "paxdigital.am@gmail.com",
      subject: `New Email from ${data.firstName} ${data.lastName}`,
      react: ContactsMail(data),
    });

    return { success: "Email sent successfully", error: null };
  } catch (error) {
    console.log(error);
    return { error: "Server error", success: null };
  }
};
