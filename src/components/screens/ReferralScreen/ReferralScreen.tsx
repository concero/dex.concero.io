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
import { useEffect, useState } from 'react'
import { populateReferralState } from './populateReferralState'
import { useAccount } from 'wagmi'
import { addingTokenDecimals } from '../../../utils/formatting'
import { UnauthorizedReferralPage } from './CreateReferralLinkPage/UnauthorizedReferralPage'
import { type ReferralReward } from '../../../api/concero/types'
import { CreateReferralLinkModal } from './CreateReferralLinkPage/CreateReferralLinkModal/CreateReferralLinkModal'
import { useWeb3Modal } from '@web3modal/react'
import { FullScreenLoader } from '../../layout/FullScreenLoader/FullScreenLoader'

export function ReferralScreen() {
	const { t } = useTranslation()
	const { address, isConnected } = useAccount()
	const [referralState, referralDispatch] = useReferralReducer()
	const [isCreateReferralLinkModalOpen, setIsCreateReferralLinkModalOpen] = useState(false)
	const { open } = useWeb3Modal()

	const getTotalEarnings = (reward: ReferralReward[] | undefined) => {
		if (!reward?.length) return 0
		let total = 0

		reward.forEach((reward: ReferralReward) => {
			total += Number(addingTokenDecimals(reward.reservedAmount, 18))
		})

		return `$${total}`
	}

	useEffect(() => {
		void populateReferralState(referralDispatch, address)
	}, [address])

	const disconnectWalletReferralScreen = (
		<UnauthorizedReferralPage
			title={t('referral.welcomeBack')}
			body={t('referral.connectYourWalletToView')}
			onClick={() => {
				void open()
			}}
			buttonText={t('walletButton.connectWallet')}
		/>
	)

	const unauthorizedReferralScreen = (
		<>
			<UnauthorizedReferralPage
				title={t('referral.earnOfUsersFees')}
				body={t('referral.withOurReferralProgramme')}
				onClick={() => {
					setIsCreateReferralLinkModalOpen(true)
				}}
				buttonText={t('referral.createReferralLink')}
			/>
			<CreateReferralLinkModal isOpen={isCreateReferralLinkModalOpen} setIsOpen={setIsCreateReferralLinkModalOpen} />
		</>
	)

	const referralScreen = (
		<div className={classNames.container}>
			<div className={classNames.mainStack}>
				<EarningsTimelineCard />
				<EarningBreakDownCard referralStateData={referralState.data} />
				<ReferralHistoryCard referralStateData={referralState.data} />
			</div>
			<div className={classNames.secondaryStack}>
				<ReferralRewardsCard referralStateData={referralState.data} />
				<VolumeCard title={t('referral.refereeTradingVolume')} value={'$350,050'} />
				<VolumeCard title={t('referral.totalEarnings')} value={getTotalEarnings(referralState.data?.rewards)} />
				<VolumeCard title={t('referral.totalUsers')} value={referralState.data?.totalUsers ?? 0} />
				<TotalRefereesCard />
				<LeaderBoardCard />
			</div>
		</div>
	)

	if (referralState.isLoading) {
		return <FullScreenLoader />
	} else if (!isConnected) {
		return disconnectWalletReferralScreen
	} else if (!referralState.isReferralCreated) {
		return unauthorizedReferralScreen
	} else {
		return referralScreen
	}
}
