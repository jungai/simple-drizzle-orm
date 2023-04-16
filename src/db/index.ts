import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

const pool = new Pool({
	host: process.env.DB_HOST ?? "127.0.0.1",
	port: +(process.env.DB_PORT ?? 5432),
	user: process.env.DB_USER ?? "postgres",
	password: process.env.DB_PASSWORD ?? "password",
	database: process.env.DB_NAME ?? "db_name",
});

export const db = drizzle(pool);