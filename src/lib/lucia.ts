import { Lucia } from "lucia";
import { PrismaAdapter } from "@lucia-auth/adapter-prisma";
import { db } from "@/lib/db";

const adapter = new PrismaAdapter(db.session, db.user);

export const lucia = new Lucia(adapter, {
  sessionCookie: {
    name: "DIGITALIZE_AUTH_COOKIE",
    expires: true,
    attributes: {
      secure: process.env.NODE_ENV === "production",
    },
  },
});
