import { z } from 'zod';
import { HealthSchema, ZodUUID } from '../common/common.schema';
import { ElementType } from '../common/types';
import { WeaponSchema } from '../weapon/weapon.schema';
import { ShopSchema } from '../stations/shop/shop.schema';
import { TraitMarketplaceSchema } from '../stations/marketplace/marketplace.schema';
import { ReforgeStationSchema } from '../stations/reforge/reforge.schema';
import { PersonalArmorySchema } from '../stations/armory/armory.schema';
import { KitchenStationSchema } from '../stations/kitchen/kitchen.schema';
import { WagerStationSchema } from '../stations/wager/wager.schema';

const ElementTypeEnumSchema = z.enum(Object.values(ElementType) as [string, ...string[]]);

/**
 * @const PointLedgerEntrySchema
 * @description Zod schema for a single transaction of points.
 */
export const PointLedgerEntrySchema = z.object({
  timestamp: z.date(),
  description: z.string().min(1),
  change: z.number().int(),
});

/**
 * @const PlayerSchema
 * @description Zod schema for the player's entire state for the current run.
 */
export const PlayerSchema = z.object({
  id: ZodUUID,
  name: z.string().min(1),
  points: z.number().int().nonnegative(),
  pointLedger: z.array(PointLedgerEntrySchema),

  /** The player's health pool. */
  health: HealthSchema,

  /** The player's capacity for consuming meals before a fight. */
  satiety: z.object({
    current: z.number().int().nonnegative(),
    max: z.number().int().nonnegative(),
  }),

  /** Contains the player's defensive stats. */
  defense: z.object({
    resistances: z.record(ElementTypeEnumSchema, z.number()),
  }),

  currentWeapon: WeaponSchema,
  weaponHistory: z.array(WeaponSchema),

  // The Six Stations of the Preparation Phase
  shop: ShopSchema,
  marketplace: TraitMarketplaceSchema,
  reforgeStation: ReforgeStationSchema,
  personalArmory: PersonalArmorySchema,
  kitchen: KitchenStationSchema,
  wagerStation: WagerStationSchema,
});