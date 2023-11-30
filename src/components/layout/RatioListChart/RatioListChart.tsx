import classNames from './RatioListChart.module.pcss'

interface RatioItem {
	total: string
	title: string
	amount: string
}

interface RatioListChartProps {
	items: RatioItem[]
	totalAmount: string
}

interface RationListItemProps {
	totalAmount: string
	title: string
	amount: string
}

function RatioListItem({ totalAmount, title, amount }: RationListItemProps) {
	const width = `${(parseInt(amount) / parseInt(totalAmount)) * 100}%`

	return (
		<div className={classNames.listItemContainer}>
			<div className={classNames.listItemHeaderContainer}>
				<p>{title}</p>
				<p>{amount}</p>
			</div>
			<div className={classNames.listItemBar} style={{ width }} />
		</div>
	)
}

export function RatioListChart({ items, totalAmount }: RatioListChartProps) {
	return (
		<div className={classNames.chartContainer}>
			{items.map((item, index) => (
				<RatioListItem key={index.toString()} totalAmount={totalAmount} title={item.title} amount={item.amount} />
			))}
		</div>
	)
}
