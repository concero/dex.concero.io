import { type Dispatch, useReducer } from 'react'
import { type ReferralAction, referralActionType, type ReferralState } from './types'

const initialState: ReferralState = {
	isReferralCreated: false,
	data: null,
	// data: {
	// id: '',
	// referralCode: '',
	// activatedCode: '',
	// rewards: [],
	// totalUsers: 0,
	// history: [],
	// },
}

const referralReducer = (state: ReferralState, action: ReferralAction): ReferralState => {
	switch (action.type) {
		case referralActionType.populateReferralStateData:
			return {
				...state,
				data: {
					id: action.state.id || '',
					referralCode: action.state.referralCode || '',
					activatedCode: action.state.activatedCode || '',
					rewards: action.state.rewards || [],
					totalUsers: action.state.totalUsers || 0,
					history: action.state.history || [],
				},
			}
		default:
			throw new Error(`Unhandled action type: ${action.type as string}`)
	}
}

export function useReferralReducer(): [ReferralState, Dispatch<ReferralAction>] {
	const [state, dispatch] = useReducer(referralReducer, initialState)
	return [state, dispatch]
}
