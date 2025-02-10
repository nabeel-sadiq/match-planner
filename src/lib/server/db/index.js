import { dev } from '$app/environment';
import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
// import { env } from '$env/dynamic/private';
// if (!env.DATABASE_URL) throw new Error('DATABASE_URL is not set'); // if (!dev && !env.DATABASE_AUTH_TOKEN) throw new Error('DATABASE_AUTH_TOKEN is not set');
let database_url = "file:local.db";
const client = createClient({ url: database_url });
export const db = drizzle(client);
