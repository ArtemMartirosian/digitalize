"use server";

import { db } from "@/lib/db";
import { utapiDeleteFiles } from "@/lib/utapi-delete-files";

export const deleteTechnologyFile = async (id: string, fileKey: string) => {
  try {
    const deletedFile = await db.technology.delete({ where: { id } });
    if (!deletedFile) return { error: "Failed to delete file", deletedFile: null, success: null };

    await utapiDeleteFiles(fileKey);

    return { success: "File has been deleted successfully", deletedFile, error: null };
  } catch (error) {
    console.log(error);
    return { error: "Server error", deletedFile: null, success: null };
  }
};
