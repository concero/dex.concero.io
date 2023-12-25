import { get } from '../client'
import { config } from '../../constants/config'

export async function fetchReferralInfo(walletAddress: string): Promise<any> {
	try {
		const response = await get(config.baseURL + `/referrals?walletAddress=${walletAddress}`)
		return response.data
	} catch (error) {
		console.error(error)
	}
}
