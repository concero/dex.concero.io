import { CardHeader } from '../CardHeader/CardHeader'
import { useTranslation } from 'react-i18next'
import { RatioListChart } from '../../layout/RatioListChart/RatioListChart'

const items = [
	{
		total: '15',
		title: 'Referees',
		amount: '8',
	},
	{
		total: '15',
		title: 'Referees',
		amount: '6',
	},
	{
		total: '15',
		title: 'Referees',
		amount: '1',
	},
]

const totalAmount = '15'

export function TotalRefereesCard() {
	const { t } = useTranslation()

	return (
		<div className={'card'}>
			<CardHeader title={t('referral.topRefereesByVolume')} />
			<RatioListChart items={items} totalAmount={totalAmount} />
		</div>
	)
}
