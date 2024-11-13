"use server";

import { db } from "@/lib/db";
import { registerSchema, RegisterSchema } from "@/schemas/register-schema";
import bcrypt from "bcryptjs";

export const register = async (values: RegisterSchema) => {
  try {
    const validatedFields = await registerSchema.safeParseAsync(values);
    if (!validatedFields.success) return null;
    const { password, username } = validatedFields.data;
    const hashedPassword = await bcrypt.hash(password, 10);
    await db.user.create({ data: { username, password: hashedPassword } });

  } catch (error) {
    console.log(error);
  }
};
