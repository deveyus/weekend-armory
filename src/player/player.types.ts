import { z } from 'zod';
import { PlayerSchema, PointLedgerEntrySchema } from './player.schema';

/**
 * @type IPointLedgerEntry
 * @description Represents a single transaction of points.
 * This type is inferred from the Zod schema to ensure consistency.
 */
export type IPointLedgerEntry = z.infer<typeof PointLedgerEntrySchema>;

/**
 * @type IPlayer
 * @description Represents the player's entire state for the current run.
 * This type is inferred from the Zod schema to ensure consistency.
 */
export type IPlayer = z.infer<typeof PlayerSchema>;