"use server";

import { db } from "@/lib/db";
import { serviceSchema, ServiceSchema } from "../schemas/service-schema";
import { ServiceFeatureProps } from "../types/definitions";

export const updateService = async (
  id: string,
  values: ServiceSchema,
  features: ServiceFeatureProps[]
) => {
  try {
    const validatedFields = serviceSchema.safeParse(values);
    if (!validatedFields.success)
      return { error: "Invalid fields", success: null, updatedService: null };
    const data = validatedFields.data;

    const existingService = await db.service.findUnique({ where: { id } });
    if (!existingService)
      return { error: "Service not found", success: null, updatedService: null };

    const arrayOfFeatures = features.map(item => item.feature);

    const updatedService = await db.service.update({
      where: { id },
      data: { ...data, features: arrayOfFeatures },
    });

    return { error: null, updatedService, success: "Service has been updated successfully" };
  } catch (error) {
    return { error: "Server error", updatedService: null, success: null };
  }
};
