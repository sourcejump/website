import {
  integer,
  numeric,
  pgTable,
  serial,
  timestamp,
} from 'drizzle-orm/pg-core';
import { maps } from './maps';
import { players } from './players';
import { servers } from './servers';

export const runs = pgTable('runs', {
  id: serial('id').primaryKey(),
  datetime: timestamp('datetime').notNull(),
  serverId: integer('serverId')
    .references(() => servers.id)
    .notNull(),
  playerId: integer('playerId')
    .references(() => players.id)
    .notNull(),
  mapId: integer('mapId')
    .references(() => maps.id)
    .notNull(),
  track: integer('track').notNull(),
  style: integer('style').notNull(),
  ticks: integer('ticks').notNull(),
  jumps: integer('jumps').notNull(),
  strafes: integer('strafes').notNull(),
  sync: numeric('sync').notNull(),
  points: integer('points').notNull(),
});
