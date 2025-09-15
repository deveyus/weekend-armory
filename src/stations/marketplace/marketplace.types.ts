import { z } from 'zod';
import {
  TraitMarketplaceSchema,
  TraitOfferingSchema,
} from './marketplace.schema';

/**
 * @type ITraitOffering
 * @description Represents a single trait available for purchase in the marketplace.
 * This type is inferred from the Zod schema to ensure consistency.
 */
export type ITraitOffering = z.infer<typeof TraitOfferingSchema>;

/**
 * @type ITraitMarketplace
 * @description Represents the entire state of the Trait Marketplace for the player's run.
 * Contains permanent upgrades and the current list of traits for sale.
 * Costs for upgrades are derived from this state and are not stored here.
 * This type is inferred from the Zod schema to ensure consistency.
 */
export type ITraitMarketplace = z.infer<typeof TraitMarketplaceSchema>;