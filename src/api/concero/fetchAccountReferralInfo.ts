import { post } from '../client'
import { type ReferralAccountInfo } from './types'

export async function fetchAccountReferralInfo(walletAddress: string): Promise<ReferralAccountInfo | undefined> {
	const url = `https://api.thegraph.com/subgraphs/name/satoshi-concero/referral-system-subgraph`
	const query = `
    query {
       account(id: "${walletAddress.toLowerCase()}") {
          id
          activatedCode
          referralCode
          reward {
						id
						reservedAmount
						claimedAmount
						claimableAmount
					}
       }
    }
  `

	try {
		const response = await post(url, { query })
		return response.data.data.account
	} catch (error) {
		console.error(error)
	}
}
