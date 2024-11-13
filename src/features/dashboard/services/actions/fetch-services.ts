"use server";

import { db } from "@/lib/db";

export const fetchServices = async () => {
  try {
    return await db.service.findMany();
  } catch (error) {
    console.log(error);
    return [];
  }
};
