"use server";

import { db } from "@/lib/db";
import { portfolioSchema, PortfolioSchema } from "../schemas/portfolio-schema";

export const createProject = async (values: PortfolioSchema) => {
  try {
    const validatedFields = portfolioSchema.safeParse(values);
    if (!validatedFields.success) return { error: "Invalid fields", success: null, project: null };

    const data = validatedFields.data;

    const project = await db.portfolio.create({ data });

    if (!project) {
      return { error: "Failed to create project", success: null, project: null };
    }

    return { error: null, success: "Project has been created successfully", project };
  } catch (err) {
    console.log(err);
    return { error: "Server error", success: null, project: null };
  }
};
