"use server";

import { db } from "@/lib/db";

export const deleteService = async (id: string) => {
  try {
    const existingService = await db.service.findUnique({ where: { id } });
    if (!existingService)
      return { error: "Service not found", success: null, deletedService: null };
    const deletedService = await db.service.delete({ where: { id: existingService.id } });
    if (!deletedService)
      return { error: "Failed to delete service", success: null, deletedService: null };
    return { success: "Service has been deleted successfully", deletedService, error: null };
  } catch (error) {
    return { error: "Server error", deletedService: null, success: null };
  }
};
