import { z } from 'zod';
import { ShopOfferingSchema, ShopSchema } from './shop.schema';

/**
 * @type IShopOffering
 * @description Represents a single weapon slot within the shop. It contains the weapon,
 * its purchase price, and data for any special actions like locking it.
 * This type is inferred from the Zod schema to ensure consistency.
 */
export type IShopOffering = z.infer<typeof ShopOfferingSchema>;

/**
 * @type IShop
 * @description Represents the entire state of the shop system for the player's run.
 * This includes permanent upgrades and the current list of items for sale.
 * Costs for upgrades are derived from this state and are not stored here.
 * This type is inferred from the Zod schema to ensure consistency.
 */
export type IShop = z.infer<typeof ShopSchema>;