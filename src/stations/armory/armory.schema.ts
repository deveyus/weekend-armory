import { z } from 'zod';
import { WeaponSchema } from '../../weapon/weapon.schema';

/**
 * @const PersonalArmorySchema
 * @description Zod schema for the player's weapon storage.
 */
export const PersonalArmorySchema = z.object({
  /** The number of weapon storage slots the player has unlocked. */
  slotCount: z.number().int().nonnegative(),

  /**
   * The list of weapons currently stored in the armory. The length of this
   * array must not exceed slotCount.
   */
  storedWeapons: z.array(WeaponSchema),
});