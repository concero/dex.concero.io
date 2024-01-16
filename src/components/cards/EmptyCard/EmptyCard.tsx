import classNames from './EmptyCard.module.pcss'

interface EmptyCardProps {
	srcImg: string
	title: string
}

export function EmptyCard({ srcImg, title }: EmptyCardProps) {
	return (
		<div className={`card ${classNames.container}`}>
			<div className={classNames.blur} style={{ backgroundImage: `url(${srcImg})` }} />
			<p className={`body1 ${classNames.title}`}>{title}</p>
		</div>
	)
}
