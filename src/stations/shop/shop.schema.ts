import { z } from 'zod';
import { WeaponSchema } from '../../weapon/weapon.schema';

/**
 * @const ShopOfferingSchema
 * @description Zod schema for a single weapon slot within the shop. It contains the weapon,
 * its purchase price, and data for any special actions like locking it.
 */
export const ShopOfferingSchema = z.object({
  /** The weapon available for purchase in this slot. */
  itemForSale: WeaponSchema,

  /** The cost in points to purchase this item now. */
  cost: z.number().int().nonnegative(),

  /**
   * @property devilDealBuff
   * @description The "Devil Deal" cost for locking this item. This is an additive
   * buff amount that will be applied to the monster "Effective Rate" if this
   * item is locked.
   */
  devilDealBuff: z.number().nonnegative(),

  /**
   * @property isLocked
   * @description A flag indicating if this offering has been locked by the player and should
   * reappear in the next shop refresh.
   */
  isLocked: z.boolean(),

  /**
   * @property _debug
   * @description Debug information related to the generation of this specific offering.
   */
  _debug: z.object({
    /** The budget of points used to generate the itemForSale. */
    sourceBudget: z.number().int().nonnegative(),
    /** The calculated evolution cost of the player's weapon at the moment this offering was created. */
    playerEvoCostAtGeneration: z.number().int().nonnegative(),
  }),
});

/**
 * @const ShopSchema
 * @description Zod schema for the entire state of the shop system for the player's run.
 */
export const ShopSchema = z.object({
  /** The number of item slots the player currently has unlocked. */
  slotCount: z.number().int().nonnegative(),
  /** A persistent, incremental bonus to the quality generation window for all items. */
  qualityOffset: z.number().int().nonnegative(),
  /** The current list of offerings available to the player. */
  offerings: z.array(ShopOfferingSchema),
});