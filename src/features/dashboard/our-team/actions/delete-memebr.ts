"use server";

import { db } from "@/lib/db";
import { utapiDeleteFiles } from "@/lib/utapi-delete-files";

export const deleteMember = async (id: string, imageKey: string) => {
  try {
    const existingTeamMember = await db.team.findUnique({ where: { id } });
    if (!existingTeamMember)
      return { error: "Team member not found", success: null, deletedMember: null };

    const deletedMember = await db.team.delete({ where: { id: existingTeamMember.id } });
    if (!deletedMember)
      return { error: "Failed to delete the team member", success: null, deletedMember: null };

    const deletedFile = await utapiDeleteFiles(imageKey);
    if (!deletedFile)
      return { error: "Failed to delete the image", success: null, deletedMember: null };

    return {
      success: "Team member has been deleted successfully",
      error: null,
      deletedMember,
    };
  } catch (error) {
    return { error: "Server error", success: null, deletedMember: null };
  }
};
