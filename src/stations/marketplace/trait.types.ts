import { z } from 'zod';
import {
  ConversionTraitSchema,
  StatModTraitSchema,
  TraitSchema,
} from './trait.schema';
import { ElementType } from '../../common/types';

/**
 * @enum WeaponStat
 * @description Defines the specific weapon stats that a Trait can target for modification.
 */
export enum WeaponStat {
  Accuracy = 'Accuracy',
  Damage = 'Damage',
  ElementalDamage = 'ElementalDamage',
  CritChance = 'CritChance',
  CritDamage = 'CritDamage',
}

/**
 * @enum TraitModifier
 * @description Defines how a Trait's value is applied to a weapon stat.
 */
export enum TraitModifier {
  /** The trait's value is added directly to the base stat. */
  Additive = 'Additive',
  /** The stat is multiplied by the trait's value (e.g., base * (1 + value)). */
  Multiplicative = 'Multiplicative',
}

// --- Discriminated Union for ITrait ---

/** A trait that directly modifies a weapon stat. */
export type IStatModTrait = z.infer<typeof StatModTraitSchema>;

/** A trait that converts one damage type to another. */
export type IConversionTrait = z.infer<typeof ConversionTraitSchema>;

/**
 * @type ITrait
 * @description Represents a single, socketable ability. It can either be a direct
 * stat modification or a damage conversion, distinguished by the 'type' property.
 * This type is inferred from the Zod schema to ensure consistency.
 */
export type ITrait = z.infer<typeof TraitSchema>;