import { z } from 'zod';
import {
  RewardModifierSchema,
  WagerOfferingSchema,
  WagerStationSchema,
} from './wager.schema';

/**
 * @type IRewardModifier
 * @description Defines how the rewards of a fight are altered. For V1, this is a simple
 * point multiplier, but the structure allows for future expansion.
 * This type is inferred from the Zod schema to ensure consistency.
 */
export type IRewardModifier = z.infer<typeof RewardModifierSchema>;

/**
 * @type IWagerOffering
 * @description Represents a single wager the player can make on the outcome of the next fight.
 * This type is inferred from the Zod schema to ensure consistency.
 */
export type IWagerOffering = z.infer<typeof WagerOfferingSchema>;

/**
 * @type IWagerStation
 * @description The persistent state of the gambling station for the player's run.
 * This type is inferred from the Zod schema to ensure consistency.
 */
export type IWagerStation = z.infer<typeof WagerStationSchema>;