import { pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const artists = pgTable("artists", {
	id: serial("id").primaryKey(),
	name: varchar("name", { length: 36 }).notNull(),
	alias: varchar("alias"),
});