import { PrismaAdapter } from "@auth/prisma-adapter";
import bcryptjs from "bcryptjs";
import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { ZodError } from "zod";
import { loginSchema } from "./features/dashboard/auth/login/schemas/login-schema";
import { db } from "./lib/db";

export default {
  providers: [
    Credentials({
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const validatedFields = loginSchema.safeParse(credentials);

          if (validatedFields.success) {
            const { password, username } = validatedFields.data;

            const user = await db.user.findUnique({
              where: { username },
            });

            if (!user || !user.password) return null;

            const passwordMatch = await bcryptjs.compare(
              password,
              user.password
            );

            if (passwordMatch) return user;
          }

          return null;
        } catch (err) {
          console.log("Authorize error: ", err);
          if (err instanceof ZodError) {
            throw new Error("Zod error: ", err);
          }
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/sign-in",
    error: "/auth/error",
  },
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider !== "credentials") {
        return true;
      }

      if (!user || !user.id) return false;
      const existingUser = await db.user.findUnique({ where: { id: user.id } });
      if (!existingUser) return false;

      return true;
    },
    async session({ session, token }) {
      if (token.sub && token.username && session.user) {
        session.user.id = token.sub;
        session.user.username = token.username;
      }

      return session;
    },
    async jwt({ token }) {
      if (!token.sub) return token;
      const existingUser = await db.user.findUnique({
        where: { id: token.sub },
      });
      if (!existingUser) return token;
      token.username = existingUser.username as string;
      return token;
    },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
} satisfies NextAuthConfig;
