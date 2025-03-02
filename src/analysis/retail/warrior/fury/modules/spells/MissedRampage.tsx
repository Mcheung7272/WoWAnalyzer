import { defineMessage } from '@lingui/macro';
import SPELLS from 'common/SPELLS';
import talents, { TALENTS_WARRIOR } from 'common/TALENTS/warrior';
import { SpellLink } from 'interface';
import Analyzer, { Options, SELECTED_PLAYER } from 'parser/core/Analyzer';
import { addInefficientCastReason } from 'parser/core/EventMetaLib';
import Events, { CastEvent, GetRelatedEvent, ResourceChangeEvent } from 'parser/core/Events';
import { ThresholdStyle, When } from 'parser/core/ParseResults';
import { RAGE_GENERATING_CAST } from '../normalizers/RageGenerationEventLinkNormalizer';

/*  Example log:
 *  https://www.warcraftlogs.com/reports/KhynM7v96cZkTBdg#fight=6&type=damage-done&source=78
 *  https://www.warcraftlogs.com/reports/XGkv8D3KH2pgxFB1?fight=29&type=damage-done&source=15
 *  https://www.warcraftlogs.com/reports/BP6CQdk2xrKjcHmf?fight=51&type=damage-done&source=204
 */

const RAGE_GENERATORS = [
  SPELLS.CRUSHING_BLOW,
  SPELLS.BLOODBATH,
  SPELLS.RAGING_BLOW,
  SPELLS.BLOODTHIRST,
  SPELLS.EXECUTE_FURY,
  SPELLS.WHIRLWIND_FURY_CAST,
];

const RAGE_GENERATOR_NAMES = RAGE_GENERATORS.map((spell) => spell.name);

// Rework this module for TWW
class MissedRampage extends Analyzer {
  missedRampages: number = 0;
  hasFB: boolean = false;
  hasAngerManagement: boolean = false;
  hasRecklessAbandon: boolean = false;

  constructor(options: Options) {
    super(options);
    this.active = this.selectedCombatant.hasTalent(talents.RAMPAGE_TALENT);
    this.hasAngerManagement = this.selectedCombatant.hasTalent(talents.ANGER_MANAGEMENT_TALENT);
    this.hasRecklessAbandon = this.selectedCombatant.hasTalent(talents.RECKLESS_ABANDON_TALENT);
    this.addEventListener(Events.resourcechange.by(SELECTED_PLAYER), this.onResourceChange);
  }

  get suggestionThresholds() {
    if (this.hasFB) {
      return {
        actual: this.missedRampages,
        isGreaterThan: {
          minor: 0,
          average: 0,
          major: 0,
        },
        style: ThresholdStyle.NUMBER,
      };
    } else {
      return {
        actual: this.missedRampages,
        isGreaterThan: {
          minor: 0,
          average: 10,
          major: 20,
        },
        style: ThresholdStyle.NUMBER,
      };
    }
  }

  onResourceChange(event: ResourceChangeEvent) {
    if (RAGE_GENERATOR_NAMES.includes(event.ability.name)) {
      // the rage logged with a cast event is the amount of rage *after* the ability is cast
      // but we want to check the rage *before* it is cast
      // so we'll subtract the rage generated by the ability
      // Note that recklessness adds a separate resource change event,
      // so the resourceChange on the event should always be the base rage generated

      const rageAfterCast = event.classResources[0].amount;
      const rageBeforeCast = (rageAfterCast + event.waste - event.resourceChange) / 10; // rage is logged 10x higher than the "real" value
      const relatedCastEvent: CastEvent | undefined = GetRelatedEvent(event, RAGE_GENERATING_CAST);

      if (!this.selectedCombatant.hasBuff(SPELLS.ENRAGE) && rageBeforeCast >= 80) {
        this.missedRampages += 1;
        if (relatedCastEvent) {
          addInefficientCastReason(
            relatedCastEvent,
            'A rage generating ability was cast while not enraged, when Rampage was available',
          );
        }
      }

      if (
        // with Brutal Finish, it's okay to overcap on rage a bit to stack Slaughtering Strikes before Rampaging
        this.selectedCombatant.hasBuff(SPELLS.ENRAGE) &&
        !(
          event.ability.guid === SPELLS.RAGING_BLOW.id &&
          this.selectedCombatant.getBuffStacks(SPELLS.SLAUGHTERING_STRIKES_BUFF) < 5 &&
          this.selectedCombatant.hasBuff(SPELLS.BRUTAL_FINISH_BUFF)
        )
      ) {
        if (this.hasAngerManagement && rageBeforeCast >= 100) {
          this.missedRampages += 1;
          if (relatedCastEvent) {
            addInefficientCastReason(
              relatedCastEvent,
              'A rage generating ability was cast when Rampage would have been better',
            );
          }
        } else if (this.hasRecklessAbandon) {
          // RA is okay with overcapping on rage during reck to use crushing blow/bloodbath
          if (rageBeforeCast >= 120 && !this.selectedCombatant.hasBuff(SPELLS.RECKLESSNESS)) {
            this.missedRampages += 1;
            if (relatedCastEvent) {
              addInefficientCastReason(
                relatedCastEvent,
                'A rage generating ability was cast when Rampage would have been better',
              );
            }
          }
        }
      }
    }
  }

  suggestions(when: When) {
    when(this.suggestionThresholds).addSuggestion((suggest, actual, recommended) =>
      suggest(
        <>
          There were {actual} times you casted a rage generating ability when you should have cast{' '}
          <SpellLink spell={SPELLS.RAMPAGE} />. <SpellLink spell={SPELLS.RAMPAGE} /> does high
          damage, activates the <SpellLink spell={TALENTS_WARRIOR.ANGER_MANAGEMENT_TALENT} />{' '}
          talent, and causes you to <SpellLink spell={SPELLS.ENRAGE} />, increasing all of your
          damage done.
        </>,
      )
        .icon(SPELLS.RAMPAGE.icon)
        .actual(
          defineMessage({
            id: 'warrior.fury.suggestions.rampages.missed',
            message: `${actual} missed Rampages.`,
          }),
        )
        .recommended(`${recommended} is recommended.`),
    );
  }
}

export default MissedRampage;
