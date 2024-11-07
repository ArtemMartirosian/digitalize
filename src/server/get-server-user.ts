import { auth } from "@/auth";
import "server-only";

export const getServerUser = async () => {
  const session = await auth();
  return session?.user ?? null;
};
