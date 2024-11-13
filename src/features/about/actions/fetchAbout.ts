"use server";

import { db } from "@/lib/db";

export const fetchAbout = async () => {
  try {
    const about = await db.about.findFirst();
    if (about === null) return { error: "About is empty", about: null };

    return { about, error: null };
  } catch (error) {
    return { error: "Server error", about: null };
  }
};
