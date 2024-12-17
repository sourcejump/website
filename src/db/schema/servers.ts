import { pgTable, serial, text } from 'drizzle-orm/pg-core';

export const servers = pgTable('servers', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  address: text('address').notNull(),
  discordLink: text('discordLink'),
  ownerSteamid: text('ownerSteamid'),
  countryName: text('countryName').notNull(),
});
