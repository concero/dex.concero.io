import { post } from '../client'

interface AccountReferralInfo {
	id: string
	activatedCode: string
	referralCode: string
	reward: {
		id: string
		reservedAmount: string
		claimedAmount: string
		claimableAmount: string
	}[]
}

export async function fetchAccountReferralInfo(walletAddress: string): Promise<AccountReferralInfo | undefined> {
	const url = `https://api.thegraph.com/subgraphs/name/satoshi-concero/referral-system-subgraph`
	const query = `
    query {
       account(id: "${walletAddress}") {
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
