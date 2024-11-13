"use server";

import { db } from "@/lib/db";

export const fetchUniqueService = async (id: string) => {
  try {
    const existingService = await db.service.findUnique({ where: { id } });
    if (!existingService) return { error: "Service not found", existingService: null };
    return { existingService, error: null };
  } catch (error) {
    return { error: "Server error", existingService: null };
  }
};
