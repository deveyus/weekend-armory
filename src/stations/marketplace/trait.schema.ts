import { z } from 'zod';
import { ZodUUID } from '../../common/common.schema';
import { ElementType } from '../../common/types';
import { TraitModifier, WeaponStat } from './trait.types';

/**
 * @const BaseTraitSchema
 * @description The Zod schema for the common properties shared by all trait types.
 */
export const BaseTraitSchema = z.object({
  id: ZodUUID,
  name: z.string().min(1, { message: 'Trait name cannot be empty' }),
});

/**
 * @const StatModTraitSchema
 * @description The Zod schema for a trait that directly modifies a weapon stat.
 */
export const StatModTraitSchema = BaseTraitSchema.extend({
  type: z.literal('STAT_MODIFIER'),
  targetStat: z.enum(Object.values(WeaponStat) as [string, ...string[]]),
  value: z.number(),
  modifier: z.enum(Object.values(TraitModifier) as [string, ...string[]]),
});

/**
 * @const ConversionTraitSchema
 * @description The Zod schema for a trait that converts one damage type to another.
 */
export const ConversionTraitSchema = BaseTraitSchema.extend({
  type: z.literal('DAMAGE_CONVERSION'),
  sourceElement: z.enum(Object.values(ElementType) as [string, ...string[]]),
  targetElement: z.enum(Object.values(ElementType) as [string, ...string[]]),
  /** The percentage of source damage to convert (e.g., 0.25 for 25%). */
  percentage: z.number().min(0).max(1),
});

/**
 * @const TraitSchema
 * @description The Zod schema for a single, socketable ability, using a discriminated union.
 */
export const TraitSchema = z.discriminatedUnion('type', [StatModTraitSchema, ConversionTraitSchema]);
