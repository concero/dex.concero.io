import { type ReferralAction, referralActionType } from './userReferralReducer/types'
import { type Dispatch } from 'react'
import { fetchReferralInfo } from '../../../api/concero/fetchReferralInfo'

export async function populateReferralState(referralDispatch: Dispatch<ReferralAction>, walletAddress: string | undefined) {
	try {
		if (!walletAddress) return
		const referralAccountInfo = await fetchReferralInfo(walletAddress)
		if (!referralAccountInfo) {
			return
		}
		console.log(referralAccountInfo)
		referralDispatch({ type: referralActionType.populateReferralStateData, state: referralAccountInfo })
	} catch (error) {
		console.error(error)
	} finally {
		referralDispatch({ type: referralActionType.setLoading, state: false })
	}
}
