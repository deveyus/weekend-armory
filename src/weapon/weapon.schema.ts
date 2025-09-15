import { z } from 'zod';
import { ZodUUID } from '../common/common.schema';
import { ElementType } from '../common/types';
import { TraitSchema } from '../stations/marketplace/trait.schema';

/**
 * @const WeaponSchema
 * @description The Zod schema for a weapon. This defines the shape and validation
 * rules for all weapon objects, serving as the single source of truth.
 */
export const WeaponSchema = z.object({
  /** A unique identifier for this specific weapon instance. */
  id: ZodUUID,

  /** The display name of the weapon. Can be changed once via the Signature mechanic. */
  name: z.string().min(1, { message: 'Weapon name cannot be empty' }),

  /** Contains all of the weapon's core combat statistics. */
  stats: z.object({
    damage: z.number().nonnegative(),
    element: z.enum(Object.values(ElementType) as [string, ...string[]]),
    elementalDamage: z.number().nonnegative(),
    accuracy: z.number(),
    critChance: z.number().min(0),
    critDamage: z.number().min(1),
  }),

  /** The maximum number of Traits that can be socketed into this weapon. */
  slotCount: z.number().int().nonnegative(),

  /** The list of Trait objects currently socketed in the weapon. */
  traits: z.array(TraitSchema),

  /** The total, cumulative number of times any reroll action has been performed. */
  rerollCount: z.number().int().nonnegative(),

  /** Contains metadata for the weapon's progression and its signature status. */
  evolution: z.object({
    pointsSpentOnRerolls: z.number().nonnegative(),
    hasSignature: z.boolean(),
    totalRerollsAtLastEvo: z.number().int().nonnegative(),
    rerollsInLastEvoCycle: z.number().int().nonnegative(),
  }),

  /** A container for non-gameplay data used for balancing and debugging. */
  _debug: z.object({
    sourceBudget: z.number().int().nonnegative(),
  }),
});