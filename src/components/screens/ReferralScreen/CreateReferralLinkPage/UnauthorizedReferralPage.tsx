import classNames from './CreateReferralLinkPage.module.pcss'
import referralScreen from '../../../../assets/images/referral/referralScreen.png'
import { Button } from '../../../buttons/Button/Button'
import { IconArrowsDiff } from '@tabler/icons-react'

interface CreateReferralLinkPageProps {
	title: string
	body: string
	buttonText: string
	onClick: () => void
}

export function UnauthorizedReferralPage({ title, body, onClick, buttonText }: CreateReferralLinkPageProps) {
	return (
		<div className={classNames.container}>
			<div className={classNames.titleContainer}>
				<h1>{title}</h1>
				<h4>{body}</h4>
			</div>
			<div className={classNames.buttonContainer}>
				<Button leftIcon={<IconArrowsDiff className={classNames.buttonIcon} />} size={'md'} onClick={onClick}>
					{buttonText}
				</Button>
			</div>
			<div className={classNames.imgContainer}>
				<div className={classNames.gradient} />
				<img src={referralScreen} />
			</div>
		</div>
	)
}
