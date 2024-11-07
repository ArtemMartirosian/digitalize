"use server";

import { db } from "@/lib/db";
import { lucia } from "@/lib/lucia";
import { registerSchema, RegisterSchema } from "@/schemas/register-schema";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";

export const register = async (values: RegisterSchema) => {
  try {
    const validatedFields = await registerSchema.safeParseAsync(values);
    if (!validatedFields.success) return null;
    const { password, username } = validatedFields.data;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await db.user.create({ data: { username, password: hashedPassword } });
    const session = await lucia.createSession(user.id, {});
    const sessionCookie = await lucia.createSessionCookie(session.id);
    cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
  } catch (error) {
    console.log(error);
  }
};
