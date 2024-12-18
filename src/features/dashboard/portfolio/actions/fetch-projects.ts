"use server";

import { db } from "@/lib/db";

export const fetchProjects = async () => {
  try {
    return await db.portfolio.findMany();
  } catch (error) {
    console.log(error);
    return [];
  }
};
