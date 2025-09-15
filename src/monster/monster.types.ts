import { z } from 'zod';
import { MonsterSchema } from './monster.schema';

/**
 * @enum DifficultyTag
 * @description Represents the conceptual difficulty classifications for a monster,
 * used as a basis for its stat generation.
 */
export enum DifficultyTag {
  Easy = 'Easy',
  Medium = 'Medium',
  Hard = 'Hard',
}

/**
 * @type IMonster
 * @description Represents a single enemy combatant. This interface contains all
 * data necessary for combat resolution, UI display, and reward calculation.
 * This type is inferred from the Zod schema to ensure consistency.
 */
export type IMonster = z.infer<typeof MonsterSchema>;