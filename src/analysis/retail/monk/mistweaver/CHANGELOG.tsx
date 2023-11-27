import { change, date } from 'common/changelog';
import SPELLS from 'common/SPELLS';
import { TALENTS_MONK } from 'common/TALENTS';
import { emallson, Trevor, ToppleTheNun, Vetyst, Vohrr, Tialyss } from 'CONTRIBUTORS';
import { SpellLink } from 'interface';


export default [
  change(date(2023, 11, 27), <>Update <SpellLink spell={SPELLS.VIVIFY}/> thresholds for <SpellLink spell={TALENTS_MONK.TEAR_OF_MORNING_TALENT}/></>, Trevor),
  change(date(2023, 11, 27), <>Update <SpellLink spell={TALENTS_MONK.THUNDER_FOCUS_TEA_TALENT}/> module</>, Trevor),
  change(date(2023, 11, 25), <>Update <SpellLink spell={TALENTS_MONK.UPWELLING_TALENT}/> module</>, Trevor),
  change(date(2023, 11, 24), <>Change load conditions for <SpellLink spell={TALENTS_MONK.RISING_SUN_KICK_TALENT}/> guide section</>, Trevor),
  change(date(2023, 11, 22), <>Update explanation of colors in <SpellLink spell={SPELLS.VIVIFY}/> guide section</>, Trevor),
  change(date(2023, 11, 21), <>Fix performance calculations for <SpellLink spell={SPELLS.VIVIFY}/> when not talented into <SpellLink spell={TALENTS_MONK.UPLIFTED_SPIRITS_TALENT}/></>, Trevor),
  change(date(2023, 11, 15), <>Fix <SpellLink spell={TALENTS_MONK.MISTS_OF_LIFE_TALENT}/> module for new <SpellLink spell={TALENTS_MONK.INVIGORATING_MISTS_TALENT}/> spellId and logging cleanup.</>, Vohrr),
  change(date(2023, 11, 14), <>Set <SpellLink spell={SPELLS.CHI_HARMONY_HEAL}/> Sources Graph to load on 4pc not 2pc</>, Vohrr),
  change(date(2023, 11, 9), <>Fix for <SpellLink spell={SPELLS.INVIGORATING_MISTS_HEAL}/> healing not tracking by T30 tier set</>, Vohrr),
  change(date(2023, 11, 7), <>Remove some stale code in t30 module</>, Trevor),
  change(date(2023, 11, 6), <>Updated Tier 30 Module to be accurate for the reworked 2pc</>, Vohrr),
  change(date(2023, 10, 30), <>Updated healing efficiency tracker to properly attribute <SpellLink spell={TALENTS_MONK.ANCIENT_TEACHINGS_TALENT}/> to the source spell that activated it.</>, Vohrr),
  change(date(2023, 10, 30), <>Updated <SpellLink spell={TALENTS_MONK.FAELINE_STOMP_TALENT}/> module to have additional breakdown for Mistweaver. Added <SpellLink spell={TALENTS_MONK.FAELINE_STOMP_TALENT}/> to Talent Summary.</>, Vohrr),
  change(date(2023, 10, 28), <>Added Amalgam's Seventh Spine and Updated Call to Dominance values to reflect nerfs.</>, Vohrr),
  change(date(2023, 10, 18), <>Update <SpellLink spell={TALENTS_MONK.CLOUDED_FOCUS_TALENT}/> module and stack tracking based on patch notes.</>, Vohrr),
  change(date(2023, 10, 17), <>Added uptime metric to <SpellLink spell={TALENTS_MONK.ANCIENT_TEACHINGS_TALENT}/> and added  <SpellLink spell={TALENTS_MONK.ANCIENT_TEACHINGS_TALENT}/> to Talent Summary.</>, Vohrr),
  change(date(2023, 10, 16), <>Added tooltip information for <SpellLink spell={TALENTS_MONK.NOURISHING_CHI_TALENT}/>.</>, Vohrr),
  change(date(2023, 10, 16), <>Fixes for <SpellLink spell={TALENTS_MONK.SHEILUNS_GIFT_TALENT}/> modules overattributing healing done.</>, Vohrr),
  change(date(2023, 10, 16), <>Added <SpellLink spell={TALENTS_MONK.FONT_OF_LIFE_TALENT}/> module.</>,Vohrr),
  change(date(2023, 10, 15), <>Extend <SpellLink spell={TALENTS_MONK.INVOKE_YULON_THE_JADE_SERPENT_TALENT}/> tracking duration in the Cooldowns tab to include the full duration of any <SpellLink spell={TALENTS_MONK.ENVELOPING_MIST_TALENT} /> and <SpellLink spell={TALENTS_MONK.RENEWING_MIST_TALENT} /> cast during the ramp.</>, Tialyss),
  change(date(2023, 10, 10), <>Added Chi Harmony Sources Graph.</>, Vohrr),
  change(date(2023, 9, 15), <>Added Mistweaver T31 Tier set module.</>, Vohrr),
  change(date(2023, 9, 15), <>Fixing Mistweaver for 10.2 talent changes.</>, Vohrr),
  change(date(2023, 9, 28), <>Change <SpellLink spell={TALENTS_MONK.MANA_TEA_TALENT}/> statistic formatting.</>, Trevor),
  change(date(2023, 9, 20), <>Fixed another <SpellLink spell={TALENTS_MONK.MANA_TEA_TALENT}/> crash/ </>, Vohrr),
  change(date(2023, 9, 10), <>Fixed <SpellLink spell={TALENTS_MONK.MANA_TEA_TALENT}/> crash from encounter phasing.</>, Vohrr),
  change(date(2023, 9, 9), <>Added <SpellLink spell={TALENTS_MONK.LIFECYCLES_TALENT}/> module.</>, Trevor),
  change(date(2023, 9, 9), <>Add <SpellLink spell={TALENTS_MONK.ENERGIZING_BREW_TALENT}/> module.</>, Trevor),
  change(date(2023, 9, 9), <>Fixed Wasted stacks and prepull casts of <SpellLink spell={TALENTS_MONK.MANA_TEA_TALENT}/> causing average channel duration to be NaN.</>, Vohrr),
  change(date(2023, 9, 7), <>Improve mana reduction logic in all modules.</>, Trevor),
  change(date(2023, 9, 6), <>Disable <SpellLink spell={TALENTS_MONK.LIFECYCLES_TALENT}/> and implement <SpellLink spell={TALENTS_MONK.MANA_TEA_TALENT}/> statistic.</>, Trevor),
  change(date(2023, 9, 5), <>Disable <SpellLink spell={TALENTS_MONK.MANA_TEA_TALENT}/> modules until new implementation is added.</>, Vohrr),
  change(date(2023, 7, 29), <>Fixed bug in healing per time spent calculation for <SpellLink spell={TALENTS_MONK.ESSENCE_FONT_TALENT}/>.</>, Trevor),
  change(date(2023, 7, 16), <>Fixed bug in damage calculation for <SpellLink spell={SPELLS.LESSON_OF_DOUBT_BUFF}/>.</>, Vohrr),
  change(date(2023, 7, 3), 'Update SpellLink usage.', ToppleTheNun),
  change(date(2023, 6, 30), <>Bump sample report to current raid.</>, Vohrr),
  change(date(2023, 6, 8), <>Added <SpellLink spell={TALENTS_MONK.ESSENCE_FONT_TALENT}/> proc ratio to tooltip of <SpellLink spell={SPELLS.GUSTS_OF_MISTS}/> from <SpellLink spell={TALENTS_MONK.ESSENCE_FONT_TALENT}/> module. Added a fix for <SpellLink spell={TALENTS_MONK.RISING_SUN_KICK_TALENT}/> resets incorrectly counting when <SpellLink spell={TALENTS_MONK.THUNDER_FOCUS_TEA_TALENT}/> was used on <SpellLink spell={TALENTS_MONK.RISING_SUN_KICK_TALENT}/>.</>, Vohrr),
  change(date(2023, 5, 29), <>Lower suggested <SpellLink spell={TALENTS_MONK.SECRET_INFUSION_TALENT}/> duration during celestial and implement <SpellLink spell={TALENTS_MONK.CHRYSALIS_TALENT}/></>, Trevor),
  change(date(2023, 5, 23), <>Add event fabrication for <SpellLink spell={TALENTS_MONK.THUNDER_FOCUS_TEA_TALENT}/> cast prepull</>, Trevor),
  change(date(2023, 5, 23), <>Fix crash in celestial analysis due to pre-pull celestial cast</>, Trevor),
  change(date(2023, 5, 21), <>Fix uptime calculations when using <SpellLink spell={TALENTS_MONK.SOOTHING_MIST_TALENT}/></>, Trevor),
  change(date(2023, 5, 20), <>Fix <SpellLink spell={TALENTS_MONK.VEIL_OF_PRIDE_TALENT}/> math</>, Trevor),
  change(date(2023, 5, 19), <>Cleanup HoT graph text</>, Trevor),
  change(date(2023, 5, 17), <>Change some text in <SpellLink spell={TALENTS_MONK.REVIVAL_TALENT}/> module</>, Trevor),
  change(date(2023, 5, 17), <>Fixed some more bugs in guide</>, Trevor),
  change(date(2023, 5, 17), <>Fix potential NaN in <SpellLink spell={TALENTS_MONK.UPLIFTED_SPIRITS_TALENT}/> module</>, Trevor),
  change(date(2023, 5, 16), <>Add average cooldown statistic to <SpellLink spell={TALENTS_MONK.UPLIFTED_SPIRITS_TALENT}/> module</>, Trevor),
  change(date(2023, 5, 6), <>Added check for casting <SpellLink spell={TALENTS_MONK.RISING_SUN_KICK_TALENT}/> during <SpellLink spell={TALENTS_MONK.INVOKE_YULON_THE_JADE_SERPENT_TALENT}/></>, Trevor),
  change(date(2023, 5, 6), <>Added additional analysis to the <SpellLink spell={TALENTS_MONK.DANCING_MISTS_TALENT}/> module.</>, Vohrr),
  change(date(2023, 5, 5), <>Added per-stack breakdowns for each spell affected in the <SpellLink spell={TALENTS_MONK.CLOUDED_FOCUS_TALENT}/> module.</>, Vohrr),
  change(date(2023, 5, 2), <>Re-enable <SpellLink spell={TALENTS_MONK.LIFE_COCOON_TALENT}/> module and add Cast Efficieny subsection to the Guide</>, Vohrr),
  change(date(2023, 4, 28), <>Typo fix</>, Vohrr),
  change(date(2023, 4, 28), <>Updated Guide sections for 10.1</>, Vohrr),
  change(date(2023, 4, 27), <>Added <SpellLink spell={TALENTS_MONK.CALMING_COALESCENCE_TALENT}/> module.</>, Vohrr),
  change(date(2023, 4, 27), <>Conditionally load <SpellLink spell={TALENTS_MONK.ESSENCE_FONT_TALENT}/> guide metrics based on talent selection.</>, Vohrr),
  change(date(2023, 4, 27), <>Fixed <SpellLink spell={TALENTS_MONK.CLOUDED_FOCUS_TALENT}/> MP5 tally</>, Vohrr),
  change(date(2023, 4, 22), <>Add <SpellLink spell={TALENTS_MONK.LEGACY_OF_WISDOM_TALENT}/> to talent summary.</>, Trevor),
  change(date(2023, 4, 20), <>Updated apl logic buckets to fix the wrong builds being recommended. Added a not supported warning for <SpellLink spell={TALENTS_MONK.AWAKENED_FAELINE_TALENT}/> talent builds</>, Vohrr),
  change(date(2023, 4, 5), <>Update suggestions for <SpellLink spell={TALENTS_MONK.REVIVAL_TALENT}/> based on 10.0.7 changes</>, Trevor),
  change(date(2023, 3, 29), <>Improve accuracy of <SpellLink spell={TALENTS_MONK.VEIL_OF_PRIDE_TALENT}/> module</>, Trevor),
  change(date(2023, 3, 27), <>Add Tier 30 Set Bonus Module.</>, Vohrr),
  change(date(2023, 3, 23), <>Add <SpellLink spell={TALENTS_MONK.CELESTIAL_HARMONY_TALENT}/> and renamed where appropriate.</>, Vohrr),
  change(date(2023, 3, 21), <>Bump spec config to 10.0.7</>, Trevor),
  change(date(2023, 3, 21), <>10.0.7 Updates, added <SpellLink spell={TALENTS_MONK.LEGACY_OF_WISDOM_TALENT}/> module.</>, Vohrr),
  change(date(2023, 3, 17), <>Fix crash in HotAttributor</>, Trevor),
  change(date(2023, 3, 8), <>Fix <SpellLink spell={TALENTS_MONK.ESSENCE_FONT_TALENT}/> module</>, Trevor),
  change(date(2023, 3, 8), <>Visual updates to the Guide to be more user friendly</>, Vohrr),
  change(date(2023, 3, 7), <>Update styling for <SpellLink spell={TALENTS_MONK.RISING_MIST_TALENT}/> tab to not interefere with guide styling.</>, Vohrr),
  change(date(2023, 3, 6), <>Add extra safeguard to base celestial module</>, Trevor),
  change(date(2023, 3, 3), <>Added <SpellLink spell={TALENTS_MONK.RISING_MIST_TALENT}/> tab for detail of each hot's extension.</>, Vohrr),
  change(date(2023, 3, 1), <>Missed a few line items in Healing Efficiency Tracker</>, Vohrr),
  change(date(2023, 3, 1), <>Updated the Healing Efficiency Tracker for Dragonflight talents</>, Vohrr),
  change(date(2023, 2, 28), <>Updates to <SpellLink spell={TALENTS_MONK.DANCING_MISTS_TALENT}/> and <SpellLink spell={TALENTS_MONK.RAPID_DIFFUSION_TALENT}/> to show a more detailed breakdown</>, Vohrr),
  change(date(2023, 2, 28), <>Refactored Hot Attributor for readability and increased <SpellLink spell={TALENTS_MONK.DANCING_MISTS_TALENT}/> event link threshold</>, Vohrr),
  change(date(2023, 2, 27), <>Updated <SpellLink spell={TALENTS_MONK.DANCING_MISTS_TALENT}/> to show proc source breakdown</>, Vohrr),
  change(date(2023, 2, 27), <>Fix crash when <SpellLink spell={TALENTS_MONK.UPLIFTED_SPIRITS_TALENT}/> is not talented</>, Vohrr),
  change(date(2023, 2, 27), <>Updated <SpellLink spell={TALENTS_MONK.RISING_MIST_TALENT}/> tooltips and some spell colors</>, Vohrr),
  change(date(2023, 2, 26), <>Added <SpellLink spell={TALENTS_MONK.UPLIFTED_SPIRITS_TALENT}/> cooldown reduction to the <SpellLink spell={SPELLS.VIVIFY}/> cast breakdown tooltips</>, Vohrr),
  change(date(2023, 2, 26), <>Refactor Talent Aggregate Statistic to handle scale and sorting in the component instead of having to do it before sending in the parameters</>, Vohrr),
  change(date(2023, 2, 26), <>Updated <SpellLink spell={TALENTS_MONK.ANCIENT_TEACHINGS_TALENT}/> to use new component and added more detail to the breadown</>, Vohrr),
  change(date(2023, 2, 25), <>Added TalentAggregateStatictic, added new <SpellLink spell={TALENTS_MONK.RISING_MIST_TALENT}/> healing breakdown module. Fixed bugs in the HotTracker</>, Vohrr),
  change(date(2023, 2, 24), <>Clarify <SpellLink spell={TALENTS_MONK.THUNDER_FOCUS_TEA_TALENT}/> wording</>, Trevor),
  change(date(2023, 2, 24), <>Bug fix in the Hot Tracker to improve the accuracy of <SpellLink spell={TALENTS_MONK.RISING_MIST_TALENT}/>, <SpellLink spell={TALENTS_MONK.DANCING_MISTS_TALENT}/>, <SpellLink spell={TALENTS_MONK.MISTY_PEAKS_TALENT}/>, <SpellLink spell={TALENTS_MONK.MIST_WRAP_TALENT}/> and <SpellLink spell={TALENTS_MONK.RAPID_DIFFUSION_TALENT}/>.</>, Vohrr),
  change(date(2023, 2, 23), <>Fixed inconsistent QualitativePerformance marks for <SpellLink spell={SPELLS.VIVIFY}/> casts in the Guide.</>, Vohrr),
  change(date(2023, 2, 21), <>Added Initial version of <SpellLink spell={TALENTS_MONK.CLOUDED_FOCUS_TALENT}/> apl.</>, Vohrr),
  change(date(2023, 2, 19), <>Added better APL handling for <SpellLink spell={SPELLS.BLACKOUT_KICK}/> and <SpellLink spell={SPELLS.VIVIFY}/>.</>, Vohrr),
  change(date(2023, 2, 18), <>Added pt 1 of the Core Rotation Section of the guide - <SpellLink spell={TALENTS_MONK.RISING_MIST_TALENT}/> / <SpellLink spell={TALENTS_MONK.ANCIENT_TEACHINGS_TALENT}/> build rotation.</>, Vohrr),
  change(date(2023, 2, 19), <>Fix crash in old version of MW module</>, Trevor),
  change(date(2023, 2, 18), <>Fixed issue with <SpellLink spell={TALENTS_MONK.MANA_TEA_TALENT}/> not showing up in the Cooldown Tracker.</>, Vohrr),
  change(date(2023, 2, 18), <>Updated the sample report to a Dragonflight encounter. Minor wording and formatting fixes for the guide</>, Vohrr),
  change(date(2023, 2, 17), <>Added non-Renewing Mist hot graph to guide and as a statistic</>, Vohrr),
  change(date(2023, 2, 17), <>Added <SpellLink spell={TALENTS_MONK.REVIVAL_TALENT}/> checklist to cooldowns guide section</>, Vohrr),
  change(date(2023, 2, 17), <>Added <SpellLink spell={SPELLS.VIVIFY}/> to Core Spells in Guide</>, Vohrr),
  change(date(2023, 2, 17), <>Refactor <SpellLink spell={TALENTS_MONK.ESSENCE_FONT_TALENT}/> module</>, Trevor),
  change(date(2023, 2, 17), <>UI updates to the <SpellLink spell={TALENTS_MONK.INVOKE_CHI_JI_THE_RED_CRANE_TALENT}/> guide section</>, Vohrr),
  change(date(2023, 2, 17), <>UI Updates to core spells section</>, Vohrr),
  change(date(2023, 2, 16), <>Fix bug in celestial modules with <SpellLink spell={TALENTS_MONK.SHAOHAOS_LESSONS_TALENT}/></>, Trevor),
  change(date(2023, 2, 15), <>Fix celestial crash when using summon statues</>, Trevor),
  change(date(2023, 2, 12), <>Add <SpellLink spell={TALENTS_MONK.MANA_TEA_TALENT}/> and <SpellLink spell={TALENTS_MONK.ANCIENT_TEACHINGS_TALENT}/> section to guide</>, Trevor),
  change(date(2023, 2, 12), <>Add celestials section to guide</>, Trevor),
  change(date(2023, 2, 12), <>Add guide prototype for Mistweaver</>, Trevor),
  change(date(2023, 2, 7), <>Updated spell values for Feb 7 tuning</>, Trevor),
  change(date(2023, 2, 1), <>Fixed UI bug with <SpellLink spell={TALENTS_MONK.SHEILUNS_GIFT_TALENT}/> suggestion (again).</>, Trevor),
  change(date(2023, 2, 1), <><SpellLink spell={TALENTS_MONK.SHAOHAOS_LESSONS_TALENT}/> formatting fix.</>, Vohrr),
  change(date(2023, 1, 31), <>Fixed UI bug with <SpellLink spell={TALENTS_MONK.SHEILUNS_GIFT_TALENT}/> suggestion.</>, Vohrr),
  change(date(2023, 1, 28), <>Add average healing per cast to <SpellLink spell={TALENTS_MONK.RISING_MIST_TALENT}/> tooltip.</>, Vohrr),
  change(date(2023, 1, 27), <>Add table to <SpellLink spell={TALENTS_MONK.SHAOHAOS_LESSONS_TALENT}/> module</>, Trevor),
  change(date(2023, 1, 27), <>Add <SpellLink spell={TALENTS_MONK.SHEILUNS_GIFT_TALENT}/> to checklist</>, Trevor),
  change(date(2023, 1 , 26), <>Added average <SpellLink spell={TALENTS_MONK.RISING_MIST_TALENT}/> hits per cast of <SpellLink spell={TALENTS_MONK.RISING_SUN_KICK_TALENT}/>.</>, Vohrr),
  change(date(2023, 1, 26), <>Update breakdown for <SpellLink spell={TALENTS_MONK.SHAOHAOS_LESSONS_TALENT}/>.</>, Vohrr),
  change(date(2023, 1, 25), <>Add <SpellLink spell={TALENTS_MONK.VEIL_OF_PRIDE_TALENT}/> module</>, Trevor),
  change(date(2023, 1, 25), <>Fixed but with <SpellLink spell={TALENTS_MONK.MIST_WRAP_TALENT}/> module.</>, Vohrr),
  change(date(2023, 1, 25), <>Reworked <SpellLink spell={TALENTS_MONK.MIST_WRAP_TALENT}/> module to show all healing contribution and not just from <SpellLink spell={SPELLS.ENVELOPING_BREATH_HEAL}/>. </>, Vohrr),
  change(date(2023, 1, 24), <>Add <SpellLink spell={TALENTS_MONK.SHAOHAOS_LESSONS_TALENT}/> module</>, Trevor),
  change(date(2023, 1, 24), <>Updated <SpellLink spell={SPELLS.GUSTS_OF_MISTS}/> breakdown to include <SpellLink spell={TALENTS_MONK.SHEILUNS_GIFT_TALENT}/> and improved accuracy.</>, Vohrr),
  change(date(2023, 1, 24), <>Removed Bonedust Brew modules and references for Mistweaver for 10.0.5</>, Vohrr),
  change(date(2023, 1, 16), <>Add <SpellLink spell={TALENTS_MONK.SHEILUNS_GIFT_TALENT}/> module and update extension logic for <SpellLink spell={TALENTS_MONK.RAPID_DIFFUSION_TALENT}/></>, Trevor),
  change(date(2023, 1, 12), <>Improve accuracy of <SpellLink spell={TALENTS_MONK.VIVACIOUS_VIVIFICATION_TALENT}/> module and the <SpellLink spell={TALENTS_MONK.INVOKE_CHI_JI_THE_RED_CRANE_TALENT}/> missed GCDs tally.</>, Vohrr),
  change(date(2023, 1, 8), <>Improve accuracy of <SpellLink spell={TALENTS_MONK.UPWELLING_TALENT}/> module.</>, Trevor),
  change(date(2023, 1, 6), <>Improve accuracy of <SpellLink spell={TALENTS_MONK.UPWELLING_TALENT}/> module.</>, Trevor),
  change(date(2023, 1, 5), <>Update <SpellLink spell={TALENTS_MONK.UPWELLING_TALENT}/> to subtract out estimated healing from missed casts.</>, Trevor),
  change(date(2023, 1, 5), <>Added statistic for average <SpellLink spell={TALENTS_MONK.TEACHINGS_OF_THE_MONASTERY_TALENT}/> stacks.</>, Trevor),
  change(date(2023, 1, 5), <>Added checklist item for <SpellLink spell={TALENTS_MONK.ESSENCE_FONT_TALENT}/> module.</>, Trevor),
  change(date(2022, 12, 27), <>Added <SpellLink spell={TALENTS_MONK.MENDING_PROLIFERATION_TALENT}/> module.</>, Vohrr),
  change(date(2022, 12, 20), <>Fix suggestion for <SpellLink spell={TALENTS_MONK.SUMMON_JADE_SERPENT_STATUE_TALENT}/></>, Vohrr),
  change(date(2022, 12, 18), <>Fix suggestion for <SpellLink spell={TALENTS_MONK.THUNDER_FOCUS_TEA_TALENT}/> usage based on talent selection</>, Trevor),
  change(date(2022, 12, 18), <>Add suggestion for <SpellLink spell={TALENTS_MONK.ANCIENT_TEACHINGS_TALENT}/> buff uptime</>, Trevor),
  change(date(2022, 12, 14), <>Remove <SpellLink spell={TALENTS_MONK.FAELINE_STOMP_TALENT}/> cast efficiency suggestion for Mistweaver</>, Trevor),
  change(date(2022, 12, 14), <>Update <SpellLink spell={TALENTS_MONK.VIVACIOUS_VIVIFICATION_TALENT}/> module suggestion thresholds</>, Trevor),
  change(date(2022, 12, 3), <>Update <SpellLink spell={TALENTS_MONK.JADE_BOND_TALENT}/> module to show average CDR</>, Trevor),
  change(date(2022, 12, 3), <>Update <SpellLink spell={TALENTS_MONK.YULONS_WHISPER_TALENT}/> suggestions for Mistweaver</>, Trevor),
  change(date(2022, 11, 28), <>Updated the <SpellLink spell={TALENTS_MONK.INVOKE_CHI_JI_THE_RED_CRANE_TALENT}/> and <SpellLink spell={TALENTS_MONK.INVOKE_YULON_THE_JADE_SERPENT_TALENT}/> modules to include <SpellLink spell={TALENTS_MONK.CELESTIAL_HARMONY_TALENT}/> in the title now that it is its own talent. Updated tooltips to use SpellLinks.</>, Vohrr),
  change(date(2022, 11, 28), <>Update ability tracker for MW</>, Trevor),
  change(date(2022, 11, 27), <>Added Mistweaver Talent Summary Panel</>, Vohrr),
  change(date(2022, 11, 23), <>Fix another Mistweaver degraded experience</>, Trevor),
  change(date(2022, 11, 22), <>Fix Mistweaver degraded experience</>, Trevor),
  change(date(2022, 11, 17), <>Added <SpellLink spell={TALENTS_MONK.DANCING_MISTS_TALENT}/> module and <SpellLink spell={TALENTS_MONK.MISTY_PEAKS_TALENT}/> Breakdown chart.</>, Vohrr),
  change(date(2022, 11, 17), <>Fix some typos and remove <SpellLink spell={TALENTS_MONK.LIFE_COCOON_TALENT}/> statistic</> ,Trevor),
  change(date(2022, 11, 17), <>Fixed <SpellLink spell={TALENTS_MONK.MISTS_OF_LIFE_TALENT}/> module</>, Vohrr),
  change(date(2022, 11, 17), <>Fix for T29 not catching multiple extensions to the same HoT</>, Vohrr),
  change(date(2022, 11, 14), <>Updated average <SpellLink spell={SPELLS.RENEWING_MIST_HEAL}/> per <SpellLink spell={SPELLS.VIVIFY}/> suggestion threshold to be accurate for specific talent selections</>, Vohrr),
  change(date(2022, 11, 13), <>Updates to Hot Tracker to better handle <SpellLink spell={TALENTS_MONK.RENEWING_MIST_TALENT}/> tracking. Added <SpellLink spell={TALENTS_MONK.RAPID_DIFFUSION_TALENT}/> module.</>, Vohrr),
  change(date(2022, 11, 13), <>Add <SpellLink spell={TALENTS_MONK.MISTS_OF_LIFE_TALENT}/> module</>, Trevor),
  change(date(2022, 11, 14), <>Add T29 tier set module for Mistweaver</>, Trevor),
  change(date(2022, 11, 14), <>Fix broken <SpellLink spell={TALENTS_MONK.FAELINE_STOMP_TALENT}/> references and reordered the talent modules based on importance</>, Vohrr),
  change(date(2022, 11, 13), <>Fix load conditions for some Mistweaver talents</>, Trevor),
  change(date(2022, 11, 12), <>Updated the spell icon for <SpellLink spell={SPELLS.ENVELOPING_BREATH_HEAL}/></>, Vohrr),
  change(date(2022, 11, 12), <>Cleanup covenant files for Mistweaver</>, Trevor),
  change(date(2022, 11, 11), <>Combined the <SpellLink spell={TALENTS_MONK.RISING_SUN_KICK_TALENT}/> module and moved into general. Reordered the statistics in general to make more sense.</>, Vohrr),
  change(date(2022, 11, 9), <>Improve accuracy of healing statistic for <SpellLink spell={TALENTS_MONK.RISING_MIST_TALENT}/> and <SpellLink spell={TALENTS_MONK.UPWELLING_TALENT}/></>, Trevor),
  change(date(2022, 11, 9), <>Cleanup labels for talents</>, Trevor),
  change(date(2022, 11, 8), <>Cleanup covenant files for Mistweaver</>, Trevor),
  change(date(2022, 11, 9), <>Fixed changelog breaking the build</>, Vohrr),
  change(date(2022, 11, 9), <>Removed shadowlands spell references from the <SpellLink spell={TALENTS_MONK.INVOKE_CHI_JI_THE_RED_CRANE_TALENT}/> module and updated the statistic to use TalentSpellText. Added Vohrr to mistweaver contributors. </>, Vohrr),
  change(date(2022, 11, 8), <>Add module for <SpellLink spell={TALENTS_MONK.SAVE_THEM_ALL_TALENT}/></>, Trevor),
  change(date(2022, 11, 8), <>Added module for <SpellLink spell={TALENTS_MONK.UNISON_TALENT}/></>, Vohrr),
  change(date(2022, 11, 8), <>Updated the <SpellLink spell={SPELLS.GUSTS_OF_MISTS}/> from <SpellLink spell={TALENTS_MONK.ESSENCE_FONT_TALENT}/> module to show healing contribution and <SpellLink spell={TALENTS_MONK.INVOKE_CHI_JI_THE_RED_CRANE_TALENT}/> contribution when talented.</>, Vohrr),
  change(date(2022, 11, 8), <>Readded the tooltip for average renewing mists during <SpellLink spell={TALENTS_MONK.MANA_TEA_TALENT}/> and updated wording to 'mana saved per cast'</>, Vohrr),
  change(date(2022, 11, 8), <>Fix and update for <SpellLink spell={TALENTS_MONK.SUMMON_JADE_SERPENT_STATUE_TALENT}/> uptime</>, Vohrr),
  change(date(2022, 11, 8), <>Fixed <SpellLink spell={TALENTS_MONK.NOURISHING_CHI_TALENT}/> showing up when not talented</>, Vohrr),
  change(date(2022, 11, 8), <>Consolidated <SpellLink spell={TALENTS_MONK.MANA_TEA_TALENT}/> modules into one statistics box</>, Vohrr),
  change(date(2022, 11, 4), <>Remove Abelito75 from the contribution list.</>, Vetyst),
  change(date(2022, 11, 1), <>Add support for extending <SpellLink spell={TALENTS_MONK.ENVELOPING_MIST_TALENT}/> from <SpellLink spell={TALENTS_MONK.MISTY_PEAKS_TALENT}/>  with <SpellLink spell={TALENTS_MONK.RISING_MIST_TALENT}/></>, Trevor),
  change(date(2022, 10, 26), <>Fix detection for cancelling <SpellLink spell={TALENTS_MONK.ESSENCE_FONT_TALENT}/></>, Trevor),
  change(date(2022, 10, 25), <>Fix overcapping detection for <SpellLink spell={TALENTS_MONK.VIVACIOUS_VIVIFICATION_TALENT}/></>, Trevor),
  change(date(2022, 10, 25), <>Fix another crash caused by <SpellLink spell={TALENTS_MONK.INVOKE_YULON_THE_JADE_SERPENT_TALENT}/></>, Trevor),
  change(date(2022, 10, 25), <>Fix crashes caused by <SpellLink spell={TALENTS_MONK.INVOKE_YULON_THE_JADE_SERPENT_TALENT}/></>, ToppleTheNun),
  change(date(2022, 10, 23), <>Added module for <SpellLink spell={TALENTS_MONK.YULONS_WHISPER_TALENT}/></>, Trevor),
  change(date(2022, 10, 23), <>Enhance tooltip for <SpellLink spell={TALENTS_MONK.UPLIFTED_SPIRITS_TALENT}/> module to breakdown CDR by spell</>, Trevor),
  change(date(2022, 10, 22), <>Added module for <SpellLink spell={TALENTS_MONK.VIVACIOUS_VIVIFICATION_TALENT}/></>, Trevor),
  change(date(2022, 10 , 21), <>Fix cancellation detection for <SpellLink spell={TALENTS_MONK.ESSENCE_FONT_TALENT}/> when buffed by <SpellLink spell={TALENTS_MONK.THUNDER_FOCUS_TEA_TALENT}/> </>, Trevor),
  change(date(2022, 10, 16), <>Added module for <SpellLink spell={TALENTS_MONK.MISTY_PEAKS_TALENT}/></>, Trevor),
  change(date(2022, 10, 18), <>Fixed <SpellLink spell={TALENTS_MONK.RISING_SUN_KICK_TALENT}/> uptime calculation and <SpellLink spell={TALENTS_MONK.TEACHINGS_OF_THE_MONASTERY_TALENT}/></>, Trevor),
  change(date(2022, 10, 16), <>Fixed Uplifted Spirits CDR</>, Trevor),
  change(date(2022, 10, 13), <>Cleaned up MW spells/talents files</>, Trevor),
  change(date(2022, 10, 13), <>Updated Rising Mist module for Dragonflight</>, Trevor),
  change(date(2022, 10, 9), <>Added Secret Infusion haste buff and fixed <SpellLink spell={TALENTS_MONK.UPLIFTED_SPIRITS_TALENT}/></>, Trevor),
  change(date(2022, 10, 8), <>Added support for existing MW talents</>, Trevor),
  change(date(2022, 9, 4), <>Updated guide link in checklist.</>, emallson),
];
