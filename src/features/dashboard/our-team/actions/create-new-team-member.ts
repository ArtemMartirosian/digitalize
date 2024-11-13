"use server";

import { db } from "@/lib/db";
import { teamSchema, TeamSchema } from "../schemas/teamSchema";

export const createNewTeamMember = async (values: TeamSchema, image: string, imageKey: string) => {
  const validatedFields = teamSchema.safeParse(values);
  if (!validatedFields.success)
    return { error: "Invalid fields", newTeamMember: null, success: null };

  const validatedData = validatedFields.data;

  try {
    const newTeamMember = await db.team.create({ data: { ...validatedData, image, imageKey } });

    if (!newTeamMember)
      return { error: "Failed to add new team member", newTeamMember: null, success: null };

    return { newTeamMember, success: "New team memeber has been added successfully", error: null };
  } catch (error) {
    console.log(error);
    return { error: "Server error", newTeamMember: null, success: null };
  }
};
