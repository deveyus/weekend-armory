import { z } from 'zod';
import {
  ReforgeOfferingSchema,
  ReforgeStationSchema,
  SimpleReforgeOfferingSchema,
  StatPairReforgeOfferingSchema,
  StatTripletReforgeOfferingSchema,
} from './reforge.schema';

// --- Discriminated Union for IReforgeOffering ---

/** A reforge that targets a broad category without specific pre-defined stats. */
export type ISimpleReforgeOffering = z.infer<typeof SimpleReforgeOfferingSchema>;

/** A reforge that targets a specific, pre-defined pair of stats. */
export type IStatPairReforgeOffering = z.infer<typeof StatPairReforgeOfferingSchema>;

/** A reforge that targets a specific, pre-defined triplet of stats. */
export type IStatTripletReforgeOffering = z.infer<typeof StatTripletReforgeOfferingSchema>;

/**
 * @type IReforgeOffering
 * @description Represents a single reroll action. Its specific function and data are
 * determined by its 'type' property.
 * This type is inferred from the Zod schema to ensure consistency.
 */
export type IReforgeOffering = z.infer<typeof ReforgeOfferingSchema>;

// --- Reforge Station Interface ---

/**
 * @type IReforgeStation
 * @description The persistent state of the entire Reforge system for the player's run.
 * This type is inferred from the Zod schema to ensure consistency.
 */
export type IReforgeStation = z.infer<typeof ReforgeStationSchema>;