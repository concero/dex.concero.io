import { CardHeader } from '../CardHeader/CardHeader'
import { useTranslation } from 'react-i18next'
import { RechartsBarChart } from '../../layout/RechartsBarChart/RechartsBarChart'
import { colors } from '../../../constants/colors'

const data = [
	{
		name: 'BTC',
		amount: 15,
	},
	{
		name: 'ETH',
		amount: 20,
	},
	{
		name: 'ADA',
		amount: 30,
	},
	{
		name: 'DOT',
		amount: 40,
	},
	{
		name: 'LINK',
		amount: 10,
	},
	{
		name: 'XRP',
		amount: 60,
	},
	{
		name: 'LTC',
		amount: 12,
	},
	{
		name: 'BCH',
		amount: 40,
	},
	{
		name: 'Other',
		amount: 20,
	},
]

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

export function EarningBreakDownCard() {
	const { t } = useTranslation()

	return (
		<div className={`card`}>
			<CardHeader title={t('earningsBreakDownCard.title')} />
			<RechartsBarChart data={data} barColors={barColors} />
		</div>
	)
}
