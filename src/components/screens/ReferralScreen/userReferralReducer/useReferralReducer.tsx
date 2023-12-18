import { Dispatch, useReducer } from 'react'
import { ReferralAction, referralActionType, ReferralState } from './types'

const initialState = {
	id: null,
	referralCode: null,
	activatedCode: null,
	reward: [],
	usersCount: 0,
}

const referralReducer = (state: ReferralState, action: ReferralAction) => {
	switch (action.type) {
		case referralActionType.populateReferralState:
			return { ...state, id: action.state.id, referralCode: action.state.referralCode, activatedCode: action.state.activatedCode, reward: action.state.reward }
		case referralActionType.setUsersCount:
			return { ...state, usersCount: action.count }
		default:
			return state
	}
}

export function useReferralReducer(): [ReferralState, Dispatch<ReferralAction>] {
	const [state, dispatch] = useReducer(referralReducer, initialState)
	return [state, dispatch]
}
