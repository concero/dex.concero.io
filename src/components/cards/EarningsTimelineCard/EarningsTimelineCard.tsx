import classNames from './EarningsTimelineCard.module.pcss'
import { CardHeader } from '../CardHeader/CardHeader'
import { useTranslation } from 'react-i18next'
import { Tag } from '../../tags/Tag/Tag'
import { useEffect, useState } from 'react'
import { populateEarningsChartData } from './populateEarningsChartData'
import { Chart } from '../../layout/Chart/Chart'
import { useAccount } from 'wagmi'
import { EmptyEarningsTimelineCard } from './EmptyEarningsTimelineCard/EmptyEarningsTimelineCard'
import { type ReferralState } from '../../screens/ReferralScreen/userReferralReducer/types'

interface EarningsTimelineCardProps {
	referralState: ReferralState
}

export function EarningsTimelineCard({ referralState }: EarningsTimelineCardProps) {
	const [earningsChartData, setEarningsChartData] = useState([])
	const { t } = useTranslation()
	const { address } = useAccount()

	useEffect(() => {
		void populateEarningsChartData(address, setEarningsChartData)
	}, [])

	if (!earningsChartData.length) return <EmptyEarningsTimelineCard referralCode={referralState.data?.referralCode} />

	return (
		<div className={`card ${classNames.container}`}>
			<CardHeader title={t('earningsTimelineCard.title')} />
			<div className={classNames.rewardsTitle}>
				<h2>$43.960</h2>
				<div>
					<Tag color={'green'} size={'sm'}>
						+5.54%
					</Tag>
				</div>
			</div>
			<Chart data={earningsChartData} options={{ horizontalScaleVisible: false, verticalScaleVisible: false }} />
		</div>
	)
}
