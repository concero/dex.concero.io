import { get } from '../client'
import { config } from '../../constants/config'
import { ReferralState } from '../../components/screens/ReferralScreen/userReferralReducer/types'

export async function fetchReferralInfo(walletAddress: string): Promise<ReferralState | null> {
	try {
		const response = await get(config.baseURL + `/referrals?walletAddress=${walletAddress}`)
		return response.data
	} catch (error) {
		console.error(error)
		return null
	}
}
