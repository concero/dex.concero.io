import classNames from './EarningsTimelineCard.module.pcss'
import { CardHeader } from '../CardHeader/CardHeader'
import { useTranslation } from 'react-i18next'
import { Tag } from '../../tags/Tag/Tag'
import { useEffect, useState } from 'react'
import { populateEarningsChartData } from './populateEarningsChartData'
import { Chart } from '../../layout/Chart/Chart'

export function EarningsTimelineCard() {
	const [earningsChartData, setEarningsChartData] = useState([])
	const { t } = useTranslation()

	useEffect(() => {
		populateEarningsChartData('0x1234abcdef1234abcdef1234abcdef1234abcdef', setEarningsChartData)
	}, [])

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
