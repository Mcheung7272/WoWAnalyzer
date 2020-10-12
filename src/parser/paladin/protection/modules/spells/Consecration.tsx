import React from 'react';
import Analyzer, { Options, SELECTED_PLAYER } from 'parser/core/Analyzer';
import SPELLS from 'common/SPELLS';
import { formatPercentage } from 'common/format';
import Statistic from 'interface/statistics/Statistic';
import STATISTIC_ORDER from 'interface/others/STATISTIC_ORDER';
import Events, { DamageEvent } from 'parser/core/Events';
import { When, ThresholdStyle, NumberThreshold } from 'parser/core/ParseResults';
import BoringSpellValue from 'interface/statistics/components/BoringSpellValue';
import { Trans } from '@lingui/macro';

class Consecration extends Analyzer {
  _hitsTaken: number = 0;
  _hitsMitigated: number = 0;

  constructor(options: Options) {
    super(options);
    this.addEventListener(Events.damage.to(SELECTED_PLAYER), this.onPlayerDamage);
  }

  onPlayerDamage(event: DamageEvent) {
    this._hitsTaken += 1;
    if(this.selectedCombatant.hasBuff(SPELLS.CONSECRATION_BUFF.id)) {
      this._hitsMitigated += 1;
    }
  }

  get pctHitsMitigated(): number {
    return this._hitsMitigated / this._hitsTaken;
  }

  get uptimeSuggestionThresholds(): NumberThreshold {
    return {
      actual: this.pctHitsMitigated,
      isLessThan: {
        minor: 0.95,
        average: 0.9,
        major: .8,
      },
      style: ThresholdStyle.PERCENTAGE,
    };
  }

  suggestions(when: When) {
    when(this.uptimeSuggestionThresholds)
        .addSuggestion((suggest, actual, recommended) => suggest('Your Consecration usage can be improved. Maintain it to reduce all incoming damage and refresh it during rotational downtime.')
            .icon(SPELLS.CONSECRATION_CAST.icon)
            .actual(`${formatPercentage(actual)}% of hits were mitigated by Consecration `)
            .recommended(`>${formatPercentage(recommended)}% is recommended`));
  }

  statistic() {
    // return (
    //   <StatisticBox
    //     icon={<SpellIcon id={SPELLS.CONSECRATION_CAST.id} />}
    //     value={`${formatPercentage(this.pctHitsMitigated)} %`}
    //     label="Hits Mitigated w/ Consecration"
    //   />
    // );
    return (
      <Statistic
        position={STATISTIC_ORDER.CORE(2)}
        size="flexible"
        >
          <BoringSpellValue
            spell={SPELLS.CONSECRATION_CAST}
            value={`${formatPercentage(this.pctHitsMitigated)} %`}
            label={<Trans>Hits Mitigated w/ Consecration</Trans>}
          />
      </Statistic>
    );
  }

  statisticOrder = STATISTIC_ORDER.CORE(2);
}

export default Consecration;
