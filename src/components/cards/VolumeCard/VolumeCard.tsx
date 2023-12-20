import { CardHeader } from '../CardHeader/CardHeader'

interface VolumeCardProps {
	title: string
	value: number | string
}

export function VolumeCard({ title, value }: VolumeCardProps) {
	return (
		<div className={`card`}>
			<CardHeader title={title} />
			<h2>{value}</h2>
		</div>
	)
}
