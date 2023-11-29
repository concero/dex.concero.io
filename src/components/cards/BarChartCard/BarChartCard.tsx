import { FC } from 'react'
import { CardHeader } from '../CardHeader/CardHeader'
import classNames from './BarChartCard.module.pcss'
import { RechartsBarChart } from '../../layout/RechartsBarChart/RechartsBarChart'

interface BarChartCardProps {}

export const BarChartCard: FC<BarChartCardProps> = () => (
	<div className={`card f1 ${classNames.container}`}>
		<CardHeader title="Top Holdings" />
		<RechartsBarChart />
	</div>
)
