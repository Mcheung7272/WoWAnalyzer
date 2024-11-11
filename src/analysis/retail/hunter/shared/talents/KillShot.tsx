import SPELLS from 'common/SPELLS';
import Spell from 'common/SPELLS/Spell';
import TALENTS from 'common/TALENTS/hunter';
import SPECS from 'game/SPECS';
import { Options, SELECTED_PLAYER } from 'parser/core/Analyzer';
import Abilities from 'parser/core/modules/Abilities';
import SPELL_CATEGORY from 'parser/core/SPELL_CATEGORY';
import ExecuteHelper from 'parser/shared/modules/helpers/ExecuteHelper';
import BoringSpellValueText from 'parser/ui/BoringSpellValueText';
import ItemDamageDone from 'parser/ui/ItemDamageDone';
import Statistic from 'parser/ui/Statistic';
import STATISTIC_CATEGORY from 'parser/ui/STATISTIC_CATEGORY';
import STATISTIC_ORDER from 'parser/ui/STATISTIC_ORDER';

import { KILL_SHOT_EXECUTE_RANGE } from '../constants';
import Events, { UpdateSpellUsableEvent } from 'parser/core/Events';

class KillShot extends ExecuteHelper {
  static executeSources = SELECTED_PLAYER;
  static lowerThreshold = KILL_SHOT_EXECUTE_RANGE;
  static singleExecuteEnablers: Spell[] = [TALENTS.HUNTERS_PREY_TALENT, SPELLS.DEATHBLOW_BUFF];
  static modifiesDamage = false;

  static dependencies = {
    ...ExecuteHelper.dependencies,
    abilities: Abilities,
  };

  maxCasts: number = 0;
  casted: number = 0;

  activeKillShotSpell =
    this.selectedCombatant.spec === SPECS.SURVIVAL_HUNTER
      ? TALENTS.KILL_SHOT_SURVIVAL_TALENT
      : TALENTS.KILL_SHOT_SHARED_TALENT;
  protected abilities!: Abilities;

  constructor(options: Options) {
    super(options);
    this.active = !this.selectedCombatant.hasTalent(TALENTS.BLACK_ARROW_TALENT);
    this.selectedCombatant.hasTalent(TALENTS.KILL_SHOT_SHARED_TALENT) ||
      this.selectedCombatant.hasTalent(TALENTS.KILL_SHOT_SURVIVAL_TALENT);

    this.addEventListener(
      Events.UpdateSpellUsable.spell(this.activeKillShotSpell),
      this.onSpellUsable,
    );

    this.addEventListener(
      Events.cast.by(SELECTED_PLAYER).spell(this.activeKillShotSpell),
      this.onCast,
    );

    const ctor = this.constructor as typeof ExecuteHelper;
    ctor.executeSpells.push(this.activeKillShotSpell);

    (options.abilities as Abilities).add({
      spell: this.activeKillShotSpell.id,
      category: SPELL_CATEGORY.ROTATIONAL,
      charges: 1,
      cooldown: 10,
      gcd: {
        base: 1500,
      },
      castEfficiency: {
        suggestion: true,
        recommendedEfficiency: 0.85,
        maxCasts: () => this.maxCasts,
        casts: () => this.casted,
      },
    });
  }

  private onCast() {
    this.casted += 1;
  }

  private onSpellUsable(event: UpdateSpellUsableEvent) {
    if (event.isAvailable) {
      this.maxCasts += 1;
    }
  }

  //Really not sure what this is doing. Also dont think this is ever triggered.
  adjustMaxCasts() {
    this.maxCasts += Math.ceil(this.totalExecuteDuration / 10000);
    this.maxCasts += this.singleExecuteEnablerApplications;
  }

  statistic() {
    return (
      <Statistic
        position={STATISTIC_ORDER.OPTIONAL(13)}
        category={STATISTIC_CATEGORY.TALENTS}
        size="flexible"
      >
        <BoringSpellValueText spell={this.activeKillShotSpell}>
          <ItemDamageDone amount={this.damage} />
          <br />
          {this.maxCasts} <small>procs</small>
          <br />
          {this.maxCasts - this.casted} <small>wasted procs</small>
        </BoringSpellValueText>
      </Statistic>
    );
  }
}

export default KillShot;
