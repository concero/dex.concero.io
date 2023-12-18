import { post } from '../client'
import { addingTokenDecimals } from '../../utils/formatting'

export async function fetchReferralChartData(walletAddress: string): Promise<> {
	const url = `https://api.thegraph.com/subgraphs/name/satoshi-concero/referral-system-subgraph`
	const query = `
    query MyQuery {
      reserveRewardEvents(where: {user_: {id: "${walletAddress.toLowerCase()}"}}) {
        timestamp
        amount
        id
      }
    }
  `

	try {
		const response = await post(url, { query })

		return response.data.data.reserveRewardEvents.map(event => {
			return {
				time: Number(event.timestamp),
				value: Number(addingTokenDecimals(event.amount, 18)),
			}
		})
	} catch (error) {
		console.error(error)
	}
}
