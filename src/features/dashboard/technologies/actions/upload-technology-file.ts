"use server";

import { db } from "@/lib/db";

export const uploadTechnologyFile = async (file: string, fileKey: string) => {
  try {
    const uploadedFile = await db.technology.create({ data: { image: file, imageKey: fileKey } });
    if (!uploadedFile) return { error: "Failed to upload", uploadedFile: null, success: null };
    return { uploadedFile, success: "File has been uploaded successfully", error: null };
  } catch (error) {
    console.log(error);
    return { error: "Server error", success: null, uploadedFile: null };
  }
};
