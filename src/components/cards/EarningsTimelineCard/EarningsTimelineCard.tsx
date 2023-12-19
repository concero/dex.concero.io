import classNames from './EarningsTimelineCard.module.pcss'
import { CardHeader } from '../CardHeader/CardHeader'
import { useTranslation } from 'react-i18next'
import { Tag } from '../../tags/Tag/Tag'
import { Button } from '../../buttons/Button/Button'
import { setReferralCode } from '../../../web3/referralFunctions/setReferralCode'
import { getSigner } from '../../../web3/getSigner'
import { useSwitchNetwork, useWalletClient } from 'wagmi'
import { useEffect, useState } from 'react'
import { populateEarningsChartData } from './populateEarningsChartData'
import { Chart } from '../../layout/Chart/Chart'

export function EarningsTimelineCard() {
	const [earningsChartData, setEarningsChartData] = useState([])
	const { t } = useTranslation()
	const walletClient = useWalletClient()
	const { switchNetworkAsync } = useSwitchNetwork()

	const handleGenerateCodeClick = async () => {
		await setReferralCode('test', await getSigner(5, switchNetworkAsync))
	}

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
			<Button onClick={handleGenerateCodeClick}>Generate code</Button>
		</div>
	)
}
