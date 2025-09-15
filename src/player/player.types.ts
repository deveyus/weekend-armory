import { UUID } from 'uuid';
import { IWeapon } from '../weapon/weapon.types';
import { ElementType, IHealth } from '../common/types';
import { IShop } from '../stations/shop/shop.types';
import { ITraitMarketplace } from '../stations/marketplace/marketplace.types';
import { IReforgeStation } from '../stations/reforge/reforge.types';
import { IPersonalArmory } from '../stations/armory/armory.types';
import { IKitchenStation } from '../stations/kitchen/kitchen.types';
import { IWagerStation } from '../stations/wager/wager.types';

/**
 * @interface IPointLedgerEntry
 * @description Represents a single transaction of points.
 */
export interface IPointLedgerEntry {
  timestamp: Date;
  description: string;
  change: number;
}

/**
 * @interface IPlayer
 * @description Represents the player's entire state for the current run.
 */
export interface IPlayer {
  id: UUID;
  name: string;
  points: number;
  pointLedger: IPointLedgerEntry[];

  /**
   * @property health
   * @description The player's health pool. Critical for battle simulation.
   */
  health: IHealth;

  /**
   * @property satiety
   * @description The player's capacity for consuming meals before a fight.
   */
  satiety: {
    current: number;
    max: number;
  };

  /**
   * @property defense
   * @description Contains the player's defensive stats.
   */
  defense: {
    resistances: Record<ElementType, number>;
  };

  currentWeapon: IWeapon;
  weaponHistory: IWeapon[];

  // The Six Stations of the Preparation Phase
  shop: IShop;
  marketplace: ITraitMarketplace;
  reforgeStation: IReforgeStation;
  personalArmory: IPersonalArmory;
  kitchen: IKitchenStation;
  wagerStation: IWagerStation;
}