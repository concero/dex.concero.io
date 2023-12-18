import { ReferralAction, referralActionType } from './userReferralReducer/types'
import { Dispatch } from 'react'
import { fetchAccountReferralInfo } from '../../../api/concero/fetchAccountReferralInfo'
import { fetchReferralAccountsByCode } from '../../../api/concero/fetchReferralAccountsByCode'

export async function populateReferralState(referralDispatch: Dispatch<ReferralAction>, walletAddress: string) {
	try {
		const referralAccountInfo = await fetchAccountReferralInfo(walletAddress)
		if (!referralAccountInfo) return
		const referralUsers = await fetchReferralAccountsByCode(referralAccountInfo.referralCode)
		referralDispatch({ type: referralActionType.populateReferralState, state: referralAccountInfo })
		referralDispatch({ type: referralActionType.setUsersCount, count: referralUsers?.length ?? 0 })
	} catch (error) {
		console.error(error)
	}
}
