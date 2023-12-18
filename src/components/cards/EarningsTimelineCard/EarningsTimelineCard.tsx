import classNames from './EarningsTimelineCard.module.pcss'
import { CardHeader } from '../CardHeader/CardHeader'
import { useTranslation } from 'react-i18next'
import { Chart } from '../../layout/Chart/Chart'
import { Tag } from '../../tags/Tag/Tag'
import { Button } from '../../buttons/Button/Button'
import { setReferralCode } from '../../../web3/referralFunctions/setReferralCode'
import { getSigner } from '../../../web3/getSigner'
import { useSwitchNetwork, useWalletClient } from 'wagmi'

const data = [
	{
		time: 1620000000000,
		value: 2,
	},
	{
		time: 1621000000000,
		value: 3,
	},
	{
		time: 1622000000000,
		value: 5,
	},
	{
		time: 1623000000000,
		value: 4,
	},
	{
		time: 1624000000000,
		value: 6,
	},
	{
		time: 1625000000000,
		value: 8,
	},
	{
		time: 1626000000000,
		value: 7,
	},
	{
		time: 1627000000000,
		value: 9,
	},
	{
		time: 1628000000000,
		value: 11,
	},
	{
		time: 1629000000000,
		value: 10,
	},
	{
		time: 1630000000000,
		value: 12,
	},
	{
		time: 1631000000000,
		value: 14,
	},
	{
		time: 1632000000000,
		value: 13,
	},
	{
		time: 1633000000000,
		value: 15,
	},
	{
		time: 1634000000000,
		value: 17,
	},
	{
		time: 1635000000000,
		value: 16,
	},
	{
		time: 1636000000000,
		value: 18,
	},
	{
		time: 1637000000000,
		value: 20,
	},
	{
		time: 1638000000000,
		value: 19,
	},
	{
		time: 1639000000000,
		value: 21,
	},
	{
		time: 1640000000000,
		value: 23,
	},
	{
		time: 1641000000000,
		value: 22,
	},
	{
		time: 1642000000000,
		value: 24,
	},
	{
		time: 1643000000000,
		value: 26,
	},
	{
		time: 1644000000000,
		value: 25,
	},
	{
		time: 1645000000000,
		value: 27,
	},
]

export function EarningsTimelineCard() {
	const { t } = useTranslation()
	const walletClient = useWalletClient()
	const { switchNetworkAsync } = useSwitchNetwork()

	const handleGenerateCodeClick = async () => {
		await setReferralCode('test', await getSigner(5, switchNetworkAsync))
	}

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
			<Chart data={data} />
			<Button onClick={handleGenerateCodeClick}>Generate code</Button>
		</div>
	)
}
