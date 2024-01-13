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
import { type ReferralReward } from './userReferralReducer/types'
import { addingTokenDecimals } from '../../../utils/formatting'
import { CreateReferralLinkPage } from './CreateReferralLinkPage/CreateReferralLinkPage'

export function ReferralScreen() {
	const { t } = useTranslation()
	const { address } = useAccount()
	const [referralState, referralDispatch] = useReferralReducer()

	const getTotalEarnings = (reward: ReferralReward[]) => {
		if (!reward.length) return 0
		let total = 0

		reward.forEach((reward: ReferralReward) => {
			total += Number(addingTokenDecimals(reward.reservedAmount, 18))
		})

		return `$${total}`
	}

	useEffect(() => {
		if (!address) return
		populateReferralState(referralDispatch, '0x1234abcdef1234abcdef1234abcdef1234abcdef')
	}, [address])

	if (!referralState.isReferralCreated) return <CreateReferralLinkPage />

	return (
		<div className={classNames.container}>
			<div className={classNames.mainStack}>
				<EarningsTimelineCard />
				<EarningBreakDownCard referralState={referralState} />
				<ReferralHistoryCard referralState={referralState} />
			</div>
			<div className={classNames.secondaryStack}>
				<ReferralRewardsCard referralState={referralState} />
				<VolumeCard title={t('referral.refereeTradingVolume')} value={'$350,050'} />
				<VolumeCard title={t('referral.totalEarnings')} value={getTotalEarnings(referralState.rewards)} />
				<VolumeCard title={t('referral.totalUsers')} value={referralState.totalUsers} />
				<TotalRefereesCard />
				<LeaderBoardCard />
			</div>
		</div>
	)
}
