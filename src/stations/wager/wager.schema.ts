import { z } from 'zod';
import { ZodUUID } from '../../common/common.schema';

/**
 * @const RewardModifierSchema
 * @description Zod schema for how the rewards of a fight are altered.
 */
export const RewardModifierSchema = z.object({
  /**
   * @property pointMultiplier
   * @description A multiplier applied to the points gained on victory. A value of 1.0
   * represents the default, unmodified reward.
   */
  pointMultiplier: z.number().min(0, { message: 'Multiplier cannot be negative' }),
});

/**
 * @const WagerOfferingSchema
 * @description Zod schema for a single wager the player can make.
 */
export const WagerOfferingSchema = z.object({
  id: ZodUUID,
  description: z.string().min(1, { message: 'Description cannot be empty' }),
  costInPoints: z.number().int().nonnegative(),
  rewardModifier: RewardModifierSchema,
});

/**
 * @const WagerStationSchema
 * @description Zod schema for the persistent state of the gambling station.
 */
export const WagerStationSchema = z.object({
  /** The number of wager choices available to the player at one time. */
  slotCount: z.number().int().nonnegative(),
  /** A quality offset influencing the power of wagers generated. */
  qualityOffset: z.number().int().nonnegative(),
  /** The current list of wagers available to the player. */
  offerings: z.array(WagerOfferingSchema),
});
