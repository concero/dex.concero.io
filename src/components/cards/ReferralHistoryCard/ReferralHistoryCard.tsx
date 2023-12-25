import { CardHeader } from '../CardHeader/CardHeader'
import { useTranslation } from 'react-i18next'
import { Table } from '../../layout/Table/Table'
import classNames from './ReferralHistoryCard.module.pcss'
import { IconUser } from '@tabler/icons-react'
import { ReferralState } from '../../screens/ReferralScreen/userReferralReducer/types'
import { unixtimeFromNow } from '../../../utils/formatting'

interface ReferralHistoryCardProps {
	referralState: ReferralState
}

const columns = [
	{
		cellComponent: item => (
			<div className={classNames.itemContainer}>
				<div className={classNames.headerContainer}>
					<div className={classNames.rowContainer}>
						<IconUser color={'var(--color-text-secondary)'} size={16} />
						<p className={'body1'}>{item.title}</p>
					</div>
					<p className={'body1'}>{unixtimeFromNow(item.timestamp)}</p>
				</div>
				<p> {item.body}</p>
			</div>
		),
	},
]

export function ReferralHistoryCard({ referralState }: ReferralHistoryCardProps) {
	const { t } = useTranslation()
	console.log(referralState)
	return (
		<div className={`card`}>
			<CardHeader title={t('referralHistoryCard.title')} />
			<Table columns={columns} items={referralState.history} />
		</div>
	)
}
