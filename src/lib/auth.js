import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "./server/db/index.js"; // your drizzle instance

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "sqlite", // or "mysql", "pg"
  }),
  emailAndPassword: {
    enabled: true,
  }
});
