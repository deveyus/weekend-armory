import { z } from 'zod';
import { ElementType } from '../../common/types';
import {
  ConversionMealSchema,
  DamageReductionMealSchema,
  IntelMealSchema,
  KitchenOfferingSchema,
  KitchenStationSchema,
  MealSchema,
  PriceReductionMealSchema,
  SecondChanceMealSchema,
  StatBuffMealSchema,
} from './kitchen.schema';

/**
 * @enum PlayerStat
 * @description Defines the player-specific stats that a meal can temporarily buff.
 */
export enum PlayerStat {
  PointGain = 'PointGain',
  Damage = 'Damage',
  Resistance = 'Resistance',
}

/**
 * @enum StationType
 * @description Defines the player-facing stations that can be targeted by buffs.
 */
export enum StationType {
  Shop = 'Shop',
  Marketplace = 'Marketplace',
  ReforgeStation = 'ReforgeStation',
  PersonalArmory = 'PersonalArmory',
}

// --- Discriminated Union for IMeal ---

/** A meal that provides a temporary buff to a player stat. */
export type IStatBuffMeal = z.infer<typeof StatBuffMealSchema>;

/** A meal that provides a temporary damage conversion for the next fight. */
export type IConversionMeal = z.infer<typeof ConversionMealSchema>;

/** A meal that provides flat and/or percentage damage reduction for the next fight. */
export type IDamageReductionMeal = z.infer<typeof DamageReductionMealSchema>;

/** A meal that allows the player to lose the next fight without a point penalty. */
export type ISecondChanceMeal = z.infer<typeof SecondChanceMealSchema>;

/** A meal that reduces the point cost of actions at another station for the current turn. */
export type IPriceReductionMeal = z.infer<typeof PriceReductionMealSchema>;

/** A meal that reveals all stats for all three monster choices in the upcoming encounter. */
export type IIntelMeal = z.infer<typeof IntelMealSchema>;

/**
 * @type IMeal
 * @description A consumable providing a temporary bonus for the next encounter. Its specific
 * effect and data structure are determined by its 'type' property.
 * This type is inferred from the Zod schema to ensure consistency.
 */
export type IMeal = z.infer<typeof MealSchema>;

// --- Kitchen Station Interfaces ---

/**
 * @type IKitchenOffering
 * @description Represents a single meal available in the kitchen.
 * This type is inferred from the Zod schema to ensure consistency.
 */
export type IKitchenOffering = z.infer<typeof KitchenOfferingSchema>;

/**
 * @type IKitchenStation
 * @description The state of the Kitchen, where the player can acquire temporary buffs.
 * This type is inferred from the Zod schema to ensure consistency.
 */
export type IKitchenStation = z.infer<typeof KitchenStationSchema>;