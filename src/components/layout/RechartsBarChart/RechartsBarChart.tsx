import { Bar, BarChart, Cell, ResponsiveContainer, XAxis, YAxis } from 'recharts'
import classNames from '../../cards/BarChartCard/BarChartCard.module.pcss'

interface RechartsBarChartProps {
	data: {
		name: string
		amount: number
	}[]
	barColors?: string[]
}

export function RechartsBarChart({ data, barColors }: RechartsBarChartProps) {
	return (
		<ResponsiveContainer width="100%" height={200} className={classNames.chartContainer}>
			<BarChart width={150} height={80} data={data} barSize={24}>
				<Bar dataKey="amount" radius={[5, 5, 5, 5]}>
					{data.map((entry, index) => (
						<Cell key={`cell-${index}`} fill={barColors[index]} />
					))}
				</Bar>
				<XAxis dataKey="name" axisLine={false} tickLine={false} />
				<YAxis axisLine={false} tickLine={false} />
			</BarChart>
		</ResponsiveContainer>
	)
}
