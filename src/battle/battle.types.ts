import { z } from 'zod';
import { EncounterContextSchema } from './battle.schema';

/**
 * @type IEncounterContext
 * @description Represents the complete, transient state for a single combat encounter.
 * This object is the bridge between the player's preparation and the fight's resolution,
 * holding the challenge and all temporary modifiers the player has activated.
 * This type is inferred from the Zod schema to ensure consistency.
 */
export type IEncounterContext = z.infer<typeof EncounterContextSchema>;