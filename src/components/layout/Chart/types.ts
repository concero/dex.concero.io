export interface DataPoint {
	time: string
	value: number
}

export interface ChartOptions {
	horizontalScaleVisible?: boolean
	verticalScaleVisible?: boolean
}

export interface ChartProps {
	data: DataPoint[]
	secondData?: DataPoint[] | null
	options?: ChartOptions
}
