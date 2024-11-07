"use server";

import { db } from "@/lib/db";
import { lucia } from "@/lib/lucia";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";
import { loginSchema, LoginSchema } from "../schemas/login-schema";
import { signIn } from "@/auth";

export const login = async (values: LoginSchema) => {
  const validatedFields = loginSchema.safeParse(values);

  if (!validatedFields.success) return { error: "Invalid fields", success: null };

  const { password, username } = validatedFields.data;

  try {
    const existingUser = await db.user.findUnique({ where: { username } });

    if (!existingUser) return { error: "Invalid username", success: null };

    const isPasswordMatched = await bcrypt.compare(password, existingUser.password);

    if (!isPasswordMatched) return { error: "Invalid password", success: null };
    await signIn("credentials", { ...values, redirect: false });

    return { success: "Signed in", error: null };
  } catch (err) {
    console.log(err);
    return { error: "Server error", success: null };
  }
};
