import { Dispatch, useReducer } from 'react'
import { ReferralAction, referralActionType, ReferralState } from './types'

const initialState: ReferralState = {
	id: '',
	referralCode: '',
	activatedCode: '',
	rewards: [],
	totalUsers: 0,
	history: [],
}

const referralReducer = (state: ReferralState, action: ReferralAction): ReferralState => {
	switch (action.type) {
		case referralActionType.populateReferralState:
			return {
				...state,
				id: action.state.id || '',
				referralCode: action.state.referralCode || '',
				activatedCode: action.state.activatedCode || '',
				rewards: action.state.rewards || [],
				totalUsers: action.state.totalUsers || 0,
				history: action.state.history || [],
			}
		default:
			throw new Error(`Unhandled action type: ${action}`)
	}
}

export function useReferralReducer(): [ReferralState, Dispatch<ReferralAction>] {
	const [state, dispatch] = useReducer(referralReducer, initialState)
	return [state, dispatch]
}
