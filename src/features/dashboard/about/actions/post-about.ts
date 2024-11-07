"use server";

import { db } from "@/lib/db";
import { aboutSchema, AboutSchema } from "../schemas/about-schema";

export const postAbout = async (values: AboutSchema) => {
  try {
    const validatedFields = aboutSchema.safeParse(values);

    if (!validatedFields.success) {
      return { error: "Invalid fields", success: null };
    }

    const data = validatedFields.data;

    const existingAbout = await db.about.findFirst();

    if (!existingAbout) {
      const newAbout = await db.about.create({ data });
      if (!newAbout) {
        return { error: "Failed to create about", success: null };
      }
      return { success: "About has beed created successfully", error: null };
    }

    const updatedAbout = await db.about.update({
      where: { id: existingAbout.id },
      data,
    });

    if (!updatedAbout) {
      return { error: "Failed to update about", success: null };
    }

    return {
      error: null,
      success: "About has beed updated successfully",
    };
  } catch (err) {
    console.log(err);
    return { error: "Server error", success: null };
  }
};
