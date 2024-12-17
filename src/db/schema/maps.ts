import {
  integer,
  pgEnum,
  pgTable,
  serial,
  text,
  timestamp,
} from 'drizzle-orm/pg-core';

export const MapTypeEnum = pgEnum('type', ['LINEAR', 'STAGED']);

export const maps = pgTable('maps', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  author: text('author').notNull(),
  tier: integer('tier').notNull(),
  type: MapTypeEnum('type').notNull(),
  stages: integer('stages').notNull(),
  bonuses: integer('bonuses').notNull(),
  fileChecksum: integer('fileChecksum').notNull(),
  fileSize: integer('fileSize').notNull(),
  downloadUrl: text('downloadUrl').notNull(),
  thumbnailUrl: text('thumbnailUrl').notNull(),
  createdAt: timestamp('createdAt').notNull(),
  updatedAt: timestamp('updatedAt').notNull(),
});
