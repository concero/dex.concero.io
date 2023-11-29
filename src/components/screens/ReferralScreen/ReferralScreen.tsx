import classNames from './ReferralScreen.module.pcss'
import { EarningsTimelineCard } from '../../cards/EarningsTimelineCard/EarningsTimelineCard'
import { EarningBreakDownCard } from '../../cards/EarningBreakDownCard/EarningBreakDownCard'
import { ReferralHistoryCard } from '../../cards/ReferralHistoryCard/ReferralHistoryCard'

export function ReferralScreen() {
	return (
		<div className={classNames.container}>
			<div className={classNames.mainStack}>
				<EarningsTimelineCard />
				<EarningBreakDownCard />
				<ReferralHistoryCard />
			</div>
		</div>
	)
}
