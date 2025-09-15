import { z } from 'zod';
import { ZodUUID } from '../../common/common.schema';
import { ElementType } from '../../common/types';
import { PlayerStat, StationType } from './kitchen.types';

const PlayerStatEnumSchema = z.enum(Object.values(PlayerStat) as [string, ...string[]]);
const StationTypeEnumSchema = z.enum(Object.values(StationType) as [string, ...string[]]);
const ElementTypeEnumSchema = z.enum(Object.values(ElementType) as [string, ...string[]]);

/**
 * @const BaseMealSchema
 * @description Zod schema for the common properties shared by all meal types.
 */
export const BaseMealSchema = z.object({
  id: ZodUUID,
  name: z.string().min(1),
  description: z.string().min(1),
  satietyCost: z.number().int().nonnegative(),
});

/** Zod schema for a meal that provides a temporary buff to a player stat. */
export const StatBuffMealSchema = BaseMealSchema.extend({
  type: z.literal('STAT_BUFF'),
  targetStat: PlayerStatEnumSchema,
  buffValue: z.number(),
});

/** Zod schema for a meal that provides a temporary damage conversion. */
export const ConversionMealSchema = BaseMealSchema.extend({
  type: z.literal('DAMAGE_CONVERSION'),
  sourceElement: ElementTypeEnumSchema,
  targetElement: ElementTypeEnumSchema,
  percentage: z.number().min(0).max(1),
});

/** Zod schema for a meal that provides damage reduction. */
export const DamageReductionMealSchema = BaseMealSchema.extend({
  type: z.literal('DAMAGE_REDUCTION'),
  flatReduction: z.number().nonnegative(),
  percentReduction: z.number().min(0).max(1),
});

/** Zod schema for a meal that allows the player to lose the next fight without penalty. */
export const SecondChanceMealSchema = BaseMealSchema.extend({
  type: z.literal('SECOND_CHANCE'),
});

/** Zod schema for a meal that reduces the point cost of actions at another station. */
export const PriceReductionMealSchema = BaseMealSchema.extend({
  type: z.literal('PRICE_REDUCTION'),
  targetStation: StationTypeEnumSchema,
  percentReduction: z.number().min(0).max(1),
});

/** Zod schema for a meal that reveals all stats for all monster choices. */
export const IntelMealSchema = BaseMealSchema.extend({
  type: z.literal('INTEL'),
});

/**
 * @const MealSchema
 * @description Zod schema for a consumable, using a discriminated union.
 */
export const MealSchema = z.discriminatedUnion('type', [
  StatBuffMealSchema,
  ConversionMealSchema,
  DamageReductionMealSchema,
  SecondChanceMealSchema,
  PriceReductionMealSchema,
  IntelMealSchema,
]);

/** Zod schema for a single meal available in the kitchen. */
export const KitchenOfferingSchema = z.object({
  meal: MealSchema,
  cost: z.number().int().nonnegative(),
  isLocked: z.boolean(),
});

/** Zod schema for the state of the Kitchen station. */
export const KitchenStationSchema = z.object({
  slotCount: z.number().int().nonnegative(),
  qualityOffset: z.number().int().nonnegative(),
  offerings: z.array(KitchenOfferingSchema),
});