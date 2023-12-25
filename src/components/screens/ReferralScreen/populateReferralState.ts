import { ReferralAction, referralActionType } from './userReferralReducer/types'
import { Dispatch } from 'react'
import { fetchReferralInfo } from '../../../api/concero/fetchReferralInfo'

export async function populateReferralState(referralDispatch: Dispatch<ReferralAction>, walletAddress: string) {
	try {
		const referralAccountInfo = await fetchReferralInfo(walletAddress)
		if (!referralAccountInfo) return
		referralDispatch({ type: referralActionType.populateReferralState, state: referralAccountInfo })
	} catch (error) {
		console.error(error)
	}
}
