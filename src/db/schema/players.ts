import { boolean, integer, pgTable, serial, text } from 'drizzle-orm/pg-core';

export const players = pgTable('players', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  points: integer('points').notNull(),
  banned: boolean('banned').notNull(),
  country: text('country'),
  steamid: text('steamid').notNull(),
});
