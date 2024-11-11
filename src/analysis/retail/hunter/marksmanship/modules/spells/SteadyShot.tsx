import {
  STEADY_SHOT_FOCUS_REGEN,
  TRUESHOT_FOCUS_INCREASE,
} from 'analysis/retail/hunter/marksmanship/constants';
import SPELLS from 'common/SPELLS';
import { TALENTS_HUNTER } from 'common/TALENTS';
import Analyzer, { Options, SELECTED_PLAYER } from 'parser/core/Analyzer';
import Events, { ResourceChangeEvent } from 'parser/core/Events';
import BoringSpellValueText from 'parser/ui/BoringSpellValueText';
import Statistic from 'parser/ui/Statistic';
import STATISTIC_ORDER from 'parser/ui/STATISTIC_ORDER';
import Abilities from 'parser/core/modules/Abilities';
import SpellUsable from 'parser/shared/modules/SpellUsable';

class SteadyShot extends Analyzer {
  static dependencies = {
    spellUsable: SpellUsable,
    abilities: Abilities,
  };

  protected spellUsable!: SpellUsable;
  protected abilities!: Abilities;

  effectiveFocusGain = 0;
  focusWasted = 0;
  additionalFocusFromTrueshot = 0;
  possibleAdditionalFocusFromTrueshot = 0;

  constructor(options: Options) {
    super(options);
    this.addEventListener(
      Events.resourcechange.by(SELECTED_PLAYER).spell(SPELLS.STEADY_SHOT_FOCUS),
      this.onEnergize,
    );

    this.addEventListener(
      Events.cast.by(SELECTED_PLAYER).spell(SPELLS.STEADY_SHOT),
      this.onSteadyShotCast,
    );
  }

  //Pin Cushion lowers Aimed Shot CD by 2 seconds
  private onSteadyShotCast() {
    if (this.selectedCombatant.hasTalent(TALENTS_HUNTER.PIN_CUSHION_TALENT)) {
      this.spellUsable.reduceCooldown(TALENTS_HUNTER.AIMED_SHOT_TALENT.id, 2000);
    }
  }

  onEnergize(event: ResourceChangeEvent) {
    this.effectiveFocusGain += event.resourceChange - event.waste;
    this.focusWasted += event.waste;
    const hasTrueshot = this.selectedCombatant.hasBuff(SPELLS.TRUESHOT.id);
    if (hasTrueshot) {
      this.additionalFocusFromTrueshot +=
        event.resourceChange * (1 - 1 / (1 + TRUESHOT_FOCUS_INCREASE)) -
        Math.max(event.waste - STEADY_SHOT_FOCUS_REGEN, 0);
      this.possibleAdditionalFocusFromTrueshot += STEADY_SHOT_FOCUS_REGEN * TRUESHOT_FOCUS_INCREASE;
    }
  }

  statistic() {
    return (
      <Statistic position={STATISTIC_ORDER.OPTIONAL(2)} size="flexible">
        <BoringSpellValueText spell={SPELLS.STEADY_SHOT}>
          <>
            {this.effectiveFocusGain}/{this.focusWasted + this.effectiveFocusGain}{' '}
            <small>possible focus gained</small>
          </>
        </BoringSpellValueText>
      </Statistic>
    );
  }
}

export default SteadyShot;
