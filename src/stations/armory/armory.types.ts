import { z } from 'zod';
import { PersonalArmorySchema } from './armory.schema';

/**
 * @type IPersonalArmory
 * @description Represents the player's weapon storage. The player can swap their
 * current weapon with one from the armory during the preparation phase.
 * This type is inferred from the Zod schema to ensure consistency.
 */
export type IPersonalArmory = z.infer<typeof PersonalArmorySchema>;