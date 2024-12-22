"use server";

import { db } from "@/lib/db";
import { utapiDeleteFiles } from "@/lib/utapi-delete-files";

export const deleteProject = async (id: string, imageKey: string) => {
  try {
    const existingProject = await db.portfolio.findUnique({ where: { id } });
    if (!existingProject)
      return { error: "Project not found", success: null, deletedProject: null };
    const deletedProject = await db.portfolio.delete({ where: { id: existingProject.id } });
    if (!deletedProject)
      return { error: "Failed to delete project", success: null, deletedProject: null };

    await utapiDeleteFiles(imageKey);

    return { success: "Project has been deleted successfully", deletedProject, error: null };
  } catch (error) {
    console.log(error);

    return { error: "Server error", deletedProject: null, success: null };
  }
};
