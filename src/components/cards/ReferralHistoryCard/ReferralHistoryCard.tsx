import classNames from './ReferralHistoryCard.module.pcss'
import { CardHeader } from '../CardHeader/CardHeader'
import { useTranslation } from 'react-i18next'
import { Table } from '../../layout/Table/Table'
import { IconUser } from '@tabler/icons-react'
import { unixtimeFromNow } from '../../../utils/formatting'
import { type ReferralAccountInfo } from '../../../api/concero/types'
import { type JSXElementConstructor, type ReactElement, type ReactNode, type ReactPortal } from 'react'
import { EmptyCard } from '../EmptyCard/EmptyCard'
import historyImg from '../../../assets/images/referral/history.png'

interface ReferralHistoryCardProps {
	referralStateData: ReferralAccountInfo | null
}

const columns = [
	{
		cellComponent: (item: {
			title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactPortal | Iterable<ReactNode> | null | undefined
			timestamp: number
			body: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactPortal | Iterable<ReactNode> | null | undefined
		}) => (
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

export function ReferralHistoryCard({ referralStateData }: ReferralHistoryCardProps) {
	const { t } = useTranslation()

	if (referralStateData?.history.length) {
		return (
			<div className={`card`}>
				<CardHeader title={t('referralHistoryCard.title')} />
				<Table columns={columns} items={referralStateData.history} />
			</div>
		)
	} else {
		return <EmptyCard srcImg={historyImg} title={t('referral.noHistoryAvailable')} />
	}
}
