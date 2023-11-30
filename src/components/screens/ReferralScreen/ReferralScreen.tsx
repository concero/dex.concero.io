import classNames from './ReferralScreen.module.pcss'
import { EarningsTimelineCard } from '../../cards/EarningsTimelineCard/EarningsTimelineCard'
import { EarningBreakDownCard } from '../../cards/EarningBreakDownCard/EarningBreakDownCard'
import { ReferralHistoryCard } from '../../cards/ReferralHistoryCard/ReferralHistoryCard'
import { VolumeCard } from '../../cards/VolumeCard/VolumeCard'
import { useTranslation } from 'react-i18next'
import { ReferralRewardsCard } from '../../cards/ReferralRewardsCard/ReferralRewardsCard'
import { TotalRefereesCard } from '../../cards/TotalRefereesCard/TotalRefereesCard'
import { LeaderBoardCard } from '../../cards/LeaderBoardCard/LeaderBoardCard'

export function ReferralScreen() {
	const { t } = useTranslation()

	return (
		<div className={classNames.container}>
			<div className={classNames.mainStack}>
				<EarningsTimelineCard />
				<EarningBreakDownCard />
				<ReferralHistoryCard />
			</div>
			<div className={classNames.secondaryStack}>
				<ReferralRewardsCard />
				<VolumeCard title={t('referral.refereeTradingVolume')} value={'$350,050'} />
				<VolumeCard title={t('referral.totalEarnings')} value={'$350,050'} />
				<VolumeCard title={t('referral.totalUsers')} value={'15'} />
				<TotalRefereesCard />
				<LeaderBoardCard />
			</div>
		</div>
	)
}
