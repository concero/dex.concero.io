import { get } from '../client'
import { config } from '../../constants/config'
import { type ReferralAccountInfo } from './types'

export async function fetchReferralInfo(walletAddress: string): Promise<ReferralAccountInfo | null> {
	try {
		const response = await get(config.baseURL + `/referrals?walletAddress=${walletAddress}`)
		if (!response.data.success) return null
		return response.data.data
	} catch (error) {
		console.error(error)
		return null
	}
}
