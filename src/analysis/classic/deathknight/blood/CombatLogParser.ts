// Base file
import BaseCombatLogParser from 'parser/classic/CombatLogParser';
// Features
import Abilities from './modules/features/Abilities';
import AlwaysBeCasting from './modules/features/AlwaysBeCasting';
import Buffs from './modules/features/Buffs';
import CooldownThroughputTracker from './modules/features/CooldownThroughputTracker';
import FoundationGuide from 'interface/guide/foundation/FoundationGuide';
// Spells
import ArmyOfTheDead from '../shared/ArmyOfTheDead';
import { GlobalCooldown } from '../shared';

class CombatLogParser extends BaseCombatLogParser {
  static specModules = {
    // Features
    abilities: Abilities,
    alwaysBeCasting: AlwaysBeCasting,
    buffs: Buffs,
    cooldownThroughputTracker: CooldownThroughputTracker,
    globalCooldown: GlobalCooldown,
    // Spells
    ArmyOfTheDead,
  };

  static guide = FoundationGuide;
}

export default CombatLogParser;
