import { z } from 'zod';
import { WeaponSchema } from './weapon.schema';

/**
 * @type IWeapon
 * @description Represents the player's single, evolving weapon. This object is the
 * complete character sheet for the player's offensive capabilities and progression,
 * including the core "Signature" mechanic.
 * This type is inferred from the Zod schema to ensure consistency.
 */
export type IWeapon = z.infer<typeof WeaponSchema>;