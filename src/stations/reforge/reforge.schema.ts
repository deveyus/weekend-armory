import { z } from 'zod';
import { ZodUUID } from '../../common/common.schema';
import { WeaponStat } from '../marketplace/trait.types';

const WeaponStatEnumSchema = z.enum(Object.values(WeaponStat) as [string, ...string[]]);

/**
 * @const BaseReforgeOfferingSchema
 * @description Zod schema for the common properties shared by all reforge offering types.
 */
export const BaseReforgeOfferingSchema = z.object({
  id: ZodUUID,
  description: z.string().min(1),
  cost: z.number().int().nonnegative(),
  devilDealBuff: z.number().int().nonnegative(),
  isLocked: z.boolean(),
  canReduceStats: z.boolean(),
});

/**
 * @const SimpleReforgeOfferingSchema
 * @description Zod schema for a reforge that targets a broad category.
 */
export const SimpleReforgeOfferingSchema = BaseReforgeOfferingSchema.extend({
  type: z.enum(['ALL_STATS', 'SLOT_COUNT', 'APPLY_SIGNATURE', 'SINGLE_STAT', 'TRAIT_VALUE']),
});

/**
 * @const StatPairReforgeOfferingSchema
 * @description Zod schema for a reforge that targets a specific pair of stats.
 */
export const StatPairReforgeOfferingSchema = BaseReforgeOfferingSchema.extend({
  type: z.literal('STAT_PAIR'),
  targetedStats: z.tuple([WeaponStatEnumSchema, WeaponStatEnumSchema]),
});

/**
 * @const StatTripletReforgeOfferingSchema
 * @description Zod schema for a reforge that targets a specific triplet of stats.
 */
export const StatTripletReforgeOfferingSchema = BaseReforgeOfferingSchema.extend({
  type: z.literal('STAT_TRIPLET'),
  targetedStats: z.tuple([WeaponStatEnumSchema, WeaponStatEnumSchema, WeaponStatEnumSchema]),
});

/**
 * @const ReforgeOfferingSchema
 * @description Zod schema for a single reroll action, using a discriminated union.
 */
export const ReforgeOfferingSchema = z.discriminatedUnion('type', [
  SimpleReforgeOfferingSchema,
  StatPairReforgeOfferingSchema,
  StatTripletReforgeOfferingSchema,
]);

/**
 * @const ReforgeStationSchema
 * @description Zod schema for the persistent state of the Reforge system.
 */
export const ReforgeStationSchema = z.object({
  qualityOffset: z.number().int().nonnegative(),
  statSlotCount: z.number().int().nonnegative(),
  statOfferings: z.array(ReforgeOfferingSchema),
  traitSlotCount: z.number().int().nonnegative(),
  traitOfferings: z.array(ReforgeOfferingSchema),
});