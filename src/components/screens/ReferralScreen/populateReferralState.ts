import { ReferralAction, referralActionType } from './userReferralReducer/types'
import { Dispatch } from 'react'
import { fetchAccountReferralInfo } from '../../../api/concero/fetchAccountReferralInfo'

export async function populateReferralState(referralDispatch: Dispatch<ReferralAction>, walletAddress: string) {
	try {
		const referralAccountInfo = await fetchAccountReferralInfo(walletAddress)
		if (!referralAccountInfo) return
		referralDispatch({ type: referralActionType.populateReferralState, state: referralAccountInfo })
	} catch (error) {
		console.error(error)
	}
}
