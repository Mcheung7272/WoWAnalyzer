import ITEMS from 'common/ITEMS/thewarwithin/trinkets';
import SPELLS from 'common/SPELLS/thewarwithin/trinkets';
import Analyzer, { Options } from 'parser/core/Analyzer';
import SPELL_CATEGORY from 'parser/core/SPELL_CATEGORY';
import Abilities from 'parser/core/modules/Abilities';

export default class MadQueensMandate extends Analyzer.withDependencies({
  abilities: Abilities,
}) {
  constructor(options: Options) {
    super(options);

    this.active = this.selectedCombatant.hasTrinket(ITEMS.MAD_QUEENS_MANDATE.id);
    if (!this.active) {
      return;
    }

    this.deps.abilities.add({
      spell: SPELLS.ABYSSAL_GLUTTONY.id,
      category: SPELL_CATEGORY.COOLDOWNS,
      cooldown: 120,
    });
  }
}
