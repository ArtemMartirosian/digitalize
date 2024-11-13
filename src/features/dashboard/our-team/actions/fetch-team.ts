"use server";

import { db } from "@/lib/db";

export const fetchTeam = async () => {
  try {
    return await db.team.findMany();
  } catch (error) {
    console.log(error);
    return [];
  }
};
