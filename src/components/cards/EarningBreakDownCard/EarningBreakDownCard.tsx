import { CardHeader } from '../CardHeader/CardHeader'
import { useTranslation } from 'react-i18next'
import { RechartsBarChart } from '../../layout/RechartsBarChart/RechartsBarChart'
import { colors } from '../../../constants/colors'
import { ReferralReward, ReferralState } from '../../screens/ReferralScreen/userReferralReducer/types'

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

	const data = referralState.reward.map((reward: ReferralReward) => {
		return {
			name: reward.id,
			amount: reward.reservedAmount,
		}
	})

	return (
		<div className={`card`}>
			<CardHeader title={t('earningsBreakDownCard.title')} />
			<RechartsBarChart data={data} barColors={barColors} />
		</div>
	)
}
