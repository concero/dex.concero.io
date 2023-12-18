import { Dispatch, useReducer } from 'react'
import { ReferralAction, referralActionType, ReferralState } from './types'

const initialState = {
	id: null,
	referralCode: null,
	activatedCode: null,
	reward: [
		{
			id: null,
			reservedAmount: null,
			claimedAmount: null,
			claimableAmount: null,
		},
	],
}

const referralReducer = (state: ReferralState, action: ReferralAction) => {
	switch (action.type) {
		case referralActionType.populateReferralState:
			return { ...action.state }
		default:
			return state
	}
}

export function useReferralReducer(): [ReferralState, Dispatch<ReferralAction>] {
	const [state, dispatch] = useReducer(referralReducer, initialState)
	return [state, dispatch]
}
