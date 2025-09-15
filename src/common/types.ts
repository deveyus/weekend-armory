import { z } from 'zod';
import { HealthSchema, ZodUUID } from './common.schema';

/**
 * @file src/common/types.ts
 * @description This file contains all globally shared, foundational enums and interfaces that are
 * used across multiple, distinct domains of the application.
 */

/** @type UUID - The TypeScript type inferred from our Zod schema. */
export type UUID = z.infer<typeof ZodUUID>;

/**
 * @enum ElementType
 * @description Represents the conceptual elemental types for damage and resistance.
 * This is used by weapons, monsters, traits, and meals.
 */
export enum ElementType {
  Physical = 'Physical',
  Fire = 'Fire',
  Ice = 'Ice',
  Shock = 'Shock',
}

/**
 * @type IHealth
 * @description Represents a health pool with a current and maximum value.
 * This type is inferred from the Zod schema to ensure consistency.
 */
export type IHealth = z.infer<typeof HealthSchema>;