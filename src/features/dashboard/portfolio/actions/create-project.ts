"use server";

import { db } from "@/lib/db";
import { portfolioSchema, PortfolioSchema } from "../schemas/portfolio-schema";

export const createProject = async (values: PortfolioSchema, file: string, fileKey: string) => {
  try {
    const validatedFields = portfolioSchema.safeParse(values);
    if (!validatedFields.success) return { error: "Invalid fields", success: null, project: null };

    const data = validatedFields.data;

    if (!file || !fileKey)
      return { error: "Image or image key is missing", success: null, project: null };

    const project = await db.portfolio.create({
      data: { ...data, image: file, imageKey: fileKey },
    });

    if (!project) {
      return { error: "Failed to create project", success: null, project: null };
    }

    return { error: null, success: "Project has been created successfully", project };
  } catch (err) {
    console.log(err);
    return { error: "Server error", success: null, project: null };
  }
};
