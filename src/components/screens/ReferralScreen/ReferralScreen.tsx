import classNames from './ReferralScreen.module.pcss'
import { EarningsTimelineCard } from '../../cards/EarningsTimelineCard/EarningsTimelineCard'
import { EarningBreakDownCard } from '../../cards/EarningBreakDownCard/EarningBreakDownCard'
import { ReferralHistoryCard } from '../../cards/ReferralHistoryCard/ReferralHistoryCard'
import { VolumeCard } from '../../cards/VolumeCard/VolumeCard'
import { useTranslation } from 'react-i18next'
import { ReferralRewardsCard } from '../../cards/ReferralRewardsCard/ReferralRewardsCard'
import { TotalRefereesCard } from '../../cards/TotalRefereesCard/TotalRefereesCard'
import { LeaderBoardCard } from '../../cards/LeaderBoardCard/LeaderBoardCard'
import { useReferralReducer } from './userReferralReducer/useReferralReducer'
import { useEffect } from 'react'
import { populateReferralState } from './populateReferralState'
import { useAccount } from 'wagmi'
import { ReferralReward } from './userReferralReducer/types'

export function ReferralScreen() {
	const { t } = useTranslation()
	const { address } = useAccount()
	const [referralState, referralDispatch] = useReferralReducer()

	const getTotalEarnings = (reward: ReferralReward[]) => {
		if (!reward.length) return '0'

		const total = reward.reduce((acc, curr) => {
			return acc + curr.amount
		}, 0)
		return `$${total}`
	}

	useEffect(() => {
		populateReferralState(referralDispatch, address as string)
	}, [])

	return (
		<div className={classNames.container}>
			<div className={classNames.mainStack}>
				<EarningsTimelineCard />
				<EarningBreakDownCard />
				<ReferralHistoryCard />
			</div>
			<div className={classNames.secondaryStack}>
				<ReferralRewardsCard referralState={referralState} />
				<VolumeCard title={t('referral.refereeTradingVolume')} value={'$350,050'} />
				<VolumeCard title={t('referral.totalEarnings')} value={getTotalEarnings(referralState.reward)} />
				<VolumeCard title={t('referral.totalUsers')} value={referralState.usersCount} />
				<TotalRefereesCard />
				<LeaderBoardCard />
			</div>
		</div>
	)
}
