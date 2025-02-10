import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "./server/db/index.js"; // your drizzle instance
import { user, session, account, verification } from "./server/db/schema.js";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "sqlite", // or "mysql", "pg"
    schema: {
      user: user,
      account: account,
      session: session,
      verification: verification
    },
  }),
  emailAndPassword: {
    enabled: true,
  }
});
