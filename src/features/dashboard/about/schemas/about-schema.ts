import { About } from "@prisma/client";
import { z } from "zod";

export const aboutSchema = z.object({
  about_en: z.string().min(1, { message: "Please enter About EN input field" }),
  about_ru: z.string().min(1, { message: "Please enter About RU input field" }),
  about_am: z.string().min(1, { message: "Please enter About AM input field" }),
});

export type AboutSchema = z.infer<typeof aboutSchema>;

export const aboutDefaultValues = {
  about_am: "",
  about_en: "",
  about_ru: "",
} satisfies AboutSchema;

export const getAboutDefaultValues = (about: About | null) => {
  if (about) {
    const { about_am, about_en, about_ru } = about;
    return { about_am, about_en, about_ru } satisfies AboutSchema;
  }
  return aboutDefaultValues;
};
