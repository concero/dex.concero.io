import { CardHeader } from '../CardHeader/CardHeader'
import classNames from './ReferralRewardsCrad.module.pcss'
import { useTranslation } from 'react-i18next'
import { Button } from '../../buttons/Button/Button'

export function ReferralRewardsCard() {
	const { t } = useTranslation()

	return (
		<div className={`card`}>
			<CardHeader title={t('availableRewardsCard.title')} />
			<div className={classNames.rowContainer}>
				<h2>$21.960</h2>
				<Button variant={'primary'} size={'sm'}>
					{t('availableRewardsCard.claim')}
				</Button>
			</div>
		</div>
	)
}
