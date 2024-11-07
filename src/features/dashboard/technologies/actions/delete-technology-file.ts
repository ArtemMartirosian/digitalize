"use server";

import { db } from "@/lib/db";
import { UTApi } from "uploadthing/server";

export const deleteTechnologyFile = async (id: string, fileKey: string) => {
  try {
    const deletedFile = await db.technology.delete({ where: { id } });
    if (!deletedFile) return { error: "Failed to delete file", deletedFile: null, success: null };

    const utapi = new UTApi();
    await utapi.deleteFiles(fileKey);

    return { success: "File has been deleted successfully", deletedFile, error: null };
  } catch (error) {
    console.log(error);
    return { error: "Server error", deletedFile: null, success: null };
  }
};
