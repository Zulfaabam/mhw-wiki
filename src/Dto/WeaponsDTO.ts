export type WeaponsDTO = {
  id: number;
  name: string;
  type: string;
  rarity: number;
  attack: Attack;
  elderseal: null;
  attributes: Attributes;
  damageType: string;
  durability: Durability[];
  slots: Slot[];
  elements: Element[];
  crafting: Crafting;
  assets: Assets;
};

export type Assets = {
  icon: string;
  image: string;
};

export type Attack = {
  display: number;
  raw: number;
};

export type Attributes = {
  damageType: string;
};

export type Crafting = {
  craftable: boolean;
  previous: number;
  branches: number[];
  craftingMaterials: CraftingMaterial[];
  upgradeMaterials: UpgradeMaterial[];
};

export type CraftingMaterial = {
  quantity: number;
  item: CraftingMaterialItem;
};

export type CraftingMaterialItem = {
  id: number;
  name: string;
  description: string;
  rarity: number;
  carryLimit: number;
  sellPrice: number;
  buyPrice: number;
};

export type UpgradeMaterial = {
  quantity: number;
  item: UpgradeMaterialItem;
};

export type UpgradeMaterialItem = {
  id: number;
  name: string;
  description: string;
  rarity: number;
  carryLimit: number;
  value: number;
};

export type Durability = {
  red: number;
  orange: number;
  yellow: number;
  green: number;
  blue: number;
  white: number;
  purple: number;
};

export type Element = {
  type: string;
  damage: number;
  hidden: boolean;
};

export type Slot = {
  rank: number;
};
