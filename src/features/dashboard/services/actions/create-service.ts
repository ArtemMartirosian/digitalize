"use server";

import { db } from "@/lib/db";
import { serviceSchema, ServiceSchema } from "../schemas/service-schema";
import { ServiceFeatureProps } from "../types/definitions";

export const createService = async (values: ServiceSchema, features: ServiceFeatureProps[]) => {
  try {
    const arrayOfFeatures = features.map(item => item.feature);
    const validatedFields = serviceSchema.safeParse(values);
    if (!validatedFields.success)
      return { error: "Invalid fields", success: null, newService: null };
    const data = validatedFields.data;
    const newService = await db.service.create({ data: { ...data, features: arrayOfFeatures } });
    return { newService, success: "Service has been added successfully", error: null };
  } catch (error) {
    return { error: "Server error", success: null, newService: null };
  }
};
