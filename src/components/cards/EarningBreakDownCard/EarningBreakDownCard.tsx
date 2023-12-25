import { CardHeader } from '../CardHeader/CardHeader'
import { useTranslation } from 'react-i18next'
import { RechartsBarChart } from '../../layout/RechartsBarChart/RechartsBarChart'
import { colors } from '../../../constants/colors'
import { ReferralReward, ReferralState } from '../../screens/ReferralScreen/userReferralReducer/types'
import { addingTokenDecimals } from '../../../utils/formatting'

const barColors = [
	colors.green.dark,
	colors.primary.mainLight,
	colors.grey.medium,
	colors.green.dark,
	colors.primary.mainLight,
	colors.grey.medium,
	colors.green.dark,
	colors.primary.mainLight,
	colors.grey.medium,
]

interface EarningBreakDownCardProps {
	referralState: ReferralState
}

export function EarningBreakDownCard({ referralState }: EarningBreakDownCardProps) {
	const { t } = useTranslation()
	const data = referralState.rewards?.map((reward: ReferralReward) => {
		return {
			name: reward.symbol,
			amount: Number(addingTokenDecimals(reward.reservedAmount, reward.decimals)),
		}
	})

	return (
		<div className={`card`}>
			<CardHeader title={t('earningsBreakDownCard.title')} />
			<RechartsBarChart data={data} barColors={barColors} />
		</div>
	)
}
