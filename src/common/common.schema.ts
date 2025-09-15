import { z } from 'zod';

/**
 * @file src/common/common.schema.ts
 * @description This file contains all globally shared, foundational Zod schemas that are
 * used across multiple, distinct domains of the application.
 */

/**
 * @const ZodUUID
 * @description A Zod schema for a v7 UUID string. This is the single source of truth
 * for validating UUIDs at runtime.
 */
export const ZodUUID = z.string().uuid({ message: 'Invalid UUID v7 format' });

/**
 * @const HealthSchema
 * @description Represents a health pool with a current and maximum value. This is a fundamental,
 * reusable data structure for any entity that can have health.
 */
export const HealthSchema = z.object({
  current: z.number().int(),
  max: z.number().int().nonnegative(),
});