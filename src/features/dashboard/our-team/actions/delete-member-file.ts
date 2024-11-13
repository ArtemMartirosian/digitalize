"use server";

import { utapiDeleteFiles } from "@/lib/utapi-delete-files";

export const deleteMemberFile = async (fileKey: string) => {
  try {
    const deletedFile = await utapiDeleteFiles(fileKey);
    if (!deletedFile) return { error: "Failed to delete file", success: null };
    return { success: "File has beed deleted successfully", error: null };
  } catch (err) {
    console.log(err);
    return { success: null, error: "Server error" };
  }
};
