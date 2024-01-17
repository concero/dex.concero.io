import classNames from './EmptyEarningsTimelineCard.module.pcss'
import { useTranslation } from 'react-i18next'
import { Button } from '../../../buttons/Button/Button'
import { IconCheck, IconCopy } from '@tabler/icons-react'
import { useCopyToClipboard } from '../../../../hooks/useCopyToClipboard'

interface EmptyEarningsTimelineCardProps {
	referralCode: string | undefined
}

export function EmptyEarningsTimelineCard({ referralCode }: EmptyEarningsTimelineCardProps) {
	const { t } = useTranslation()
	const { copyToClipboard, isCopied } = useCopyToClipboard()

	const handleCopy = () => {
		void copyToClipboard(`https://app.concero.io/join/${referralCode}`)
	}

	return (
		<div className={classNames.container}>
			<h2>{t('referral.sendOutYourInvites')}</h2>
			<h4>{t('referral.shareThisLink')}</h4>
			<Button leftIcon={isCopied ? <IconCheck size={16} /> : <IconCopy size={16} />} onClick={handleCopy}>
				{t('referral.inviteYourFirstReferee')}
			</Button>
		</div>
	)
}
