/**
 * @file src/common/types.ts
 * @description This file contains all globally shared, foundational enums and interfaces that are
 * used across multiple, distinct domains of the application.
 */

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
 * @interface IHealth
 * @description Represents a health pool with a current and maximum value. This is a fundamental,
 * reusable data structure for any entity that can have health.
 */
export interface IHealth {
  /** The current health value. */
  current: number;
  /** The maximum possible health value. */
  max: number;
}