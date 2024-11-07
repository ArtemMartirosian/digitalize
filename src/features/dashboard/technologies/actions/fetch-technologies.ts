"use server";

import { db } from "@/lib/db";

export const fetchTechnologies = async () => {
  try {
    const data = await db.technology.findMany();
    return { data, error: null };
  } catch (error) {
    return { error: "Server error", data: [] };
  }
};
