import { z } from 'zod';
import { TraitSchema } from './trait.schema';

/**
 * @const TraitOfferingSchema
 * @description Zod schema for a single trait available for purchase in the marketplace.
 */
export const TraitOfferingSchema = z.object({
  /** The trait that is available for purchase in this slot. */
  traitForSale: TraitSchema,

  /** The cost in points to purchase this trait now. */
  cost: z.number().int().nonnegative(),

  /**
   * The "Devil Deal" cost for locking this item for the next marketplace refresh.
   * This is an additive buff to the monster "Effective Rate".
   */
  devilDealBuff: z.number().int().nonnegative(),

  /** A flag indicating if this offering has been locked by the player. */
  isLocked: z.boolean(),

  /**
   * @property _debug
   * @description Debug information related to the generation of this specific offering.
   */
  _debug: z.object({
    /** The budget of points used to generate the trait's value. */
    sourceBudget: z.number().int().nonnegative(),
  }),
});

/**
 * @const TraitMarketplaceSchema
 * @description Zod schema for the entire state of the Trait Marketplace for the player's run.
 */
export const TraitMarketplaceSchema = z.object({
  /** The number of trait slots the player currently has unlocked for purchase. */
  slotCount: z.number().int().nonnegative(),

  /**
   * A persistent, incremental bonus to the budget used for generating trait values.
   * A higher value results in more powerful traits appearing in the marketplace.
   */
  qualityOffset: z.number().int().nonnegative(),

  /** The current list of trait offerings available to the player. */
  offerings: z.array(TraitOfferingSchema),
});