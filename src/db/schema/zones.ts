import { integer, jsonb, pgEnum, pgTable, serial } from 'drizzle-orm/pg-core';

export const ZoneTypeEnum = pgEnum('type', [
  'START',
  'END',
  'STOP',
  'STAGE',
  'FREESTYLE',
]);

export const zones = pgTable('zones', {
  id: serial('id').primaryKey(),
  track: integer('track').notNull(),
  type: ZoneTypeEnum('type').notNull(),
  index: integer('index').notNull(),
  pointA: jsonb('pointA').notNull(),
  pointB: jsonb('pointB').notNull(),
});
