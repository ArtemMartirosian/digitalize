"use server";

import { signOut } from "@/auth";

export const logout = async () => {
  await signOut({ redirect: true, redirectTo: "/dashboard/auth/login" });
};
