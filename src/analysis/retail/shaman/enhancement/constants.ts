import SPELLS from 'common/SPELLS';
import Spell from 'common/SPELLS/Spell';
import TALENTS from 'common/TALENTS/shaman';

export const STORMSTRIKE_CAST_SPELLS = [SPELLS.STORMSTRIKE, SPELLS.WINDSTRIKE_CAST];

export const STORMSTRIKE_DAMAGE_SPELLS = [
  SPELLS.STORMSTRIKE_DAMAGE,
  SPELLS.STORMSTRIKE_DAMAGE_OFFHAND,
  SPELLS.WINDSTRIKE_DAMAGE,
  SPELLS.WINDSTRIKE_DAMAGE_OFFHAND,
];

export const STORMSTRIKE_SPELL_IDS = STORMSTRIKE_CAST_SPELLS.map((spell) => spell.id);
export const STORMSTRIKE_DAMAGE_IDS = STORMSTRIKE_DAMAGE_SPELLS.map((spell) => spell.id);

export const MERGE_SPELLS = [
  {
    SpellIds: [SPELLS.MELEE.id, SPELLS.WINDLASH.id, SPELLS.WINDLASH_OFFHAND.id],
    NewSpell: SPELLS.MELEE.id,
  },
  {
    SpellIds: [SPELLS.STORMSTRIKE_DAMAGE.id, SPELLS.STORMSTRIKE_DAMAGE_OFFHAND.id],
    NewSpell: SPELLS.STORMSTRIKE.id,
  },
  {
    SpellIds: [SPELLS.WINDSTRIKE_DAMAGE.id, SPELLS.WINDSTRIKE_DAMAGE_OFFHAND.id],
    NewSpell: SPELLS.WINDSTRIKE_CAST.id,
  },
];

export const MAELSTROM_WEAPON_ELIGIBLE_SPELLS: Spell[] = [
  SPELLS.ELEMENTAL_BLAST,
  SPELLS.LIGHTNING_BOLT,
  TALENTS.LAVA_BURST_TALENT,
  SPELLS.LAVA_BURST_DAMAGE,
  TALENTS.CHAIN_LIGHTNING_TALENT,
  TALENTS.ELEMENTAL_BLAST_ELEMENTAL_TALENT, //Intentional usage of Elemental Shaman spell id
  TALENTS.CHAIN_HEAL_TALENT,
  SPELLS.HEALING_SURGE,
  SPELLS.TEMPEST_CAST,
];

export const MAELSTROM_WEAPON_ELIGIBLE_SPELL_IDS = MAELSTROM_WEAPON_ELIGIBLE_SPELLS.map(
  (spell) => spell.id,
);

export enum EventLinkBuffers {
  MaelstromWeapon = 50,
  PrimordialWave = 15500,
  Stormstrike = 900,
  CAST_DAMAGE_BUFFER = 100,
  SPLINTERED_ELEMENTS_BUFFER = 20,
  LIGHTNING_BOLT_BUFFER = 150,
}

export enum EnhancementEventLinks {
  THORIMS_INVOCATION_LINK = 'thorims-invocation',
  STORMSTRIKE_LINK = 'stormstrike',
  CHAIN_LIGHTNING_LINK = 'chain-lightning',
  TEMPEST_LINK = 'tempest',
  MAELSTROM_SPENDER_LINK = 'maelstrom-spender',
  LIGHTNING_BOLT_LINK = 'lightning-bolt',
  MAELSTROM_GENERATOR_LINK = 'maelstrom-generator',
  CRASH_LIGHTNING_LINK = 'crash-lightning',
}

export const GCD_TOLERANCE = 25;
