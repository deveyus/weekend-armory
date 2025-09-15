import { z } from 'zod';
import { ZodUUID } from '../common/common.schema';
import { MonsterSchema } from '../monster/monster.schema';
import { MealSchema } from '../stations/kitchen/kitchen.schema';
import { WagerOfferingSchema } from '../stations/wager/wager.schema';

/**
 * @const EncounterContextSchema
 * @description Zod schema for the complete, transient state for a single combat encounter.
 * This object is the bridge between the player's preparation and the fight's resolution.
 */
export const EncounterContextSchema = z.object({
  /** A unique identifier for this specific battle encounter. */
  id: ZodUUID,

  /** The list of three monsters the player can choose to fight. */
  choices: z.tuple([MonsterSchema, MonsterSchema, MonsterSchema]),

  /**
   * The cumulative, additive buff to monster "Effective Rate" from all
   * active "Devil Deals" the player has accepted for this encounter.
   */
  enemyBuff: z.number().nonnegative(),

  /**
   * A list of all meals the player consumed during the preparation phase.
   * The effects of these meals apply only to this encounter.
   */
  activeMeals: z.array(MealSchema),

  /** The wager the player has accepted for this encounter. */
  activeWager: WagerOfferingSchema,
});