import { z } from 'zod';
import { HealthSchema, ZodUUID } from '../common/common.schema';
import { ElementType } from '../common/types';
import { DifficultyTag } from './monster.types';

const ElementTypeEnumSchema = z.enum(Object.values(ElementType) as [string, ...string[]]);
const DifficultyTagEnumSchema = z.enum(Object.values(DifficultyTag) as [string, ...string[]]);

/**
 * @const MonsterSchema
 * @description Zod schema for a single enemy combatant. This schema contains all
 * data necessary for combat resolution, UI display, and reward calculation.
 */
export const MonsterSchema = z.object({
  /** A unique identifier for this specific monster instance. */
  id: ZodUUID,

  /** The display name of the monster (e.g., "Gloomfang Imp"). */
  name: z.string().min(1),

  /** The classification tag used as a basis for its generation. */
  difficultyTag: DifficultyTagEnumSchema,

  /** The monster's health pool. */
  health: HealthSchema,

  /** Contains all stats related to the monster's ability to deal damage. */
  offense: z.object({
    damage: z.number().nonnegative(),
    elementalDamage: z.number().nonnegative(),
    element: ElementTypeEnumSchema,
    accuracy: z.number(),
    critChance: z.number().min(0),
    critDamage: z.number().min(1),
  }),

  /** Contains all stats related to the monster's ability to resist damage. */
  defense: z.object({
    /** A complete record of resistance values. A value of 0 indicates no resistance. */
    resistances: z.record(ElementTypeEnumSchema, z.number()),
  }),

  /** Contains the point values associated with the outcome of fighting this monster. */
  reward: z.object({
    pointsOnWin: z.number().int().nonnegative(),
    pointsOnLoss: z.number().int().nonnegative(),
  }),

  /**
   * @property _debug
   * @description A container for non-gameplay data used for balancing and debugging.
   */
  _debug: z.object({
    sourceBudget: z.number().int().nonnegative(),
  }),
});