import { CardHeader } from '../CardHeader/CardHeader'
import { useTranslation } from 'react-i18next'
import { Table } from '../../layout/Table/Table'
import classNames from './ReferralHistoryCard.module.pcss'
import { IconUser } from '@tabler/icons-react'

const items = [
	{
		id: 1,
		body: '15 MATIC were sent to 0x000000000000',
		actionType: 'Invite accepted',
		timestamp: '2021-09-01',
	},
	{
		id: 2,
		body: 'Account 0x000123123123 has accepted your invite',
		actionType: 'Withdraw successful',
		timestamp: '2021-09-02',
	},
]

const columns = [
	{
		cellComponent: item => (
			<div className={classNames.itemContainer}>
				<div className={classNames.headerContainer}>
					<div className={classNames.rowContainer}>
						<IconUser color={'var(--color-text-secondary)'} size={16} />
						<p className={'body1'}>{item.actionType}</p>
					</div>
					<p className={'body1'}>{item.timestamp}</p>
				</div>
				<p> {item.body}</p>
			</div>
		),
	},
]

export function ReferralHistoryCard() {
	const { t } = useTranslation()

	return (
		<div className={`card`}>
			<CardHeader title={t('referralHistoryCard.title')} />
			<Table columns={columns} items={items} />
		</div>
	)
}
