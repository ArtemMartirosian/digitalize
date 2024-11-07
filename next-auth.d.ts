import { DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    username: string;
  }
}

export type ExtendedUser = DefaultSession["user"] & {
  id: string;
  username: string;
};

declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
  }
}
