import { UserI } from "@/interfaces/user";
import { User as NextAuthUser } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      accessToken: string;
      data: UserI;
    } & DefaultSession["user"];
  }

  interface User extends NextAuthUser {
    accessToken: string;
    user: UserI;
  }
}
