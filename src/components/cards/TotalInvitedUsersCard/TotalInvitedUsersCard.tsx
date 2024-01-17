import classNames from './TotalInvitedUsersCard.module.pcss'
import { useTranslation } from 'react-i18next'
import { type ReferralState } from '../../screens/ReferralScreen/userReferralReducer/types'
import { Button } from '../../buttons/Button/Button'
import { IconCheck, IconCopy } from '@tabler/icons-react'
import { useCopyToClipboard } from '../../../hooks/useCopyToClipboard'

export function TotalInvitedUsersCard({ referralState }: { referralState: ReferralState }) {
	const { t } = useTranslation()
	const { copyToClipboard, isCopied } = useCopyToClipboard()

	function handleCopy() {
		void copyToClipboard(`https://app.concero.io/join/${referralState.data?.referralCode}` ?? '')
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
