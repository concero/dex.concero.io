import classNames from './CreateReferralLinkPage.module.pcss'
import { useTranslation } from 'react-i18next'
import { Button } from '../../../buttons/Button/Button'
import { IconArrowsDiff } from '@tabler/icons-react'
import referralScreen from '../../../../assets/images/referral/referralScreen.png'

export function CreateReferralLinkPage() {
	const { t } = useTranslation()

	return (
		<div className={classNames.container}>
			<div className={classNames.titleContainer}>
				<h1>{t('referral.earnOfUsersFees')}</h1>
				<h4>{t('referral.withOurReferralProgramme')}</h4>
			</div>
			<div className={classNames.buttonContainer}>
				<Button leftIcon={<IconArrowsDiff className={classNames.buttonIcon} />} size={'md'}>
					{t('referral.createReferralLink')}
				</Button>
			</div>
			<div className={classNames.imgContainer}>
				<div className={classNames.gradient} />
				<img src={referralScreen} />
			</div>
		</div>
	)
}
