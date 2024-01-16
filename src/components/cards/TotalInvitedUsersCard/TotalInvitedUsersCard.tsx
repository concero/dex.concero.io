import classNames from './TotalInvitedUsersCard.module.pcss'
import { useTranslation } from 'react-i18next'
import { type ReferralState } from '../../screens/ReferralScreen/userReferralReducer/types'
import { Button } from '../../buttons/Button/Button'
import { IconCheck, IconCopy } from '@tabler/icons-react'
import { useState } from 'react'
import { copyToClipboard } from '../../../utils/copyToClipboard'

export function TotalInvitedUsersCard({ referralState }: { referralState: ReferralState }) {
	const [isCopied, setIsCopied] = useState(false)
	const { t } = useTranslation()

	function handleCopy() {
		void copyToClipboard(`app.concero.io/join/${referralState.data?.referralCode}` ?? '')
		setIsCopied(true)
		setTimeout(() => {
			setIsCopied(false)
		}, 7000)
	}

	return (
		<div className={`card ${classNames.container}`}>
			<div className={classNames.titleContainer}>
				<h5>{t('referral.totalUsers')}</h5>
				<h2>{referralState.data?.totalUsers ?? 0}</h2>
			</div>
			<Button leftIcon={isCopied ? <IconCheck size={16} /> : <IconCopy size={16} />} onClick={handleCopy}>
				{t('referral.copyInviteLink')}
			</Button>
		</div>
	)
}
