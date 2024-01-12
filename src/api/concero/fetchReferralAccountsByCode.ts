import { type ReferralAccountInfo } from './types'
import { post } from '../client'

export async function fetchReferralAccountsByCode(referralCode: string | undefined): Promise<ReferralAccountInfo[] | undefined> {
	if (!referralCode) return
	try {
		const url = `https://api.thegraph.com/subgraphs/name/satoshi-concero/referral-system-subgraph`
		const query = `
			query MyQuery {
			  accounts(where: {activatedCode: "${referralCode}"}) {
				referralCode
				id
				activatedCode
				reward {
				  id
				  reservedAmount
				  claimedAmount
				  claimableAmount
				}
			  }
			}
		  `

		const response = await post(url, { query })
		return response.data.data.accounts
	} catch (e) {
		console.error(e)
	}
}
