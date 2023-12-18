import { CardHeader } from '../CardHeader/CardHeader'
import classNames from './ReferralRewardsCrad.module.pcss'
import { useTranslation } from 'react-i18next'
import { Button } from '../../buttons/Button/Button'
import { ReferralState } from '../../screens/ReferralScreen/userReferralReducer/types'
import { useSwitchNetwork } from 'wagmi'
import { claimReferralRewards } from '../../../web3/referralFunctions/claimReferralRewards'
import { getSigner } from '../../../web3/getSigner'
import { config } from '../../../constants/config'

interface ReferralRewardsCardProps {
	referralState: ReferralState
}

export function ReferralRewardsCard({ referralState }: ReferralRewardsCardProps) {
	const { t } = useTranslation()
	const { switchNetworkAsync } = useSwitchNetwork()

	const handleClaimClick = async () => {
		const tokenAddress = config.NULL_ADDRESS
		const signer = await getSigner(5, switchNetworkAsync)
		await claimReferralRewards(tokenAddress, referralState.reward[0]?.claimableAmount, signer)
	}

	return (
		<div className={`card`}>
			<CardHeader title={t('availableRewardsCard.title')} />
			<div className={classNames.rowContainer}>
				<h2>{referralState.reward[0]?.claimableAmount ?? 0}</h2>
				<Button variant={'primary'} size={'sm'} onClick={handleClaimClick}>
					{t('availableRewardsCard.claim')}
				</Button>
			</div>
		</div>
	)
}
