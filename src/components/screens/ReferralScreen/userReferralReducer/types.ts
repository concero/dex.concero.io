import { ReferralAccountInfo } from '../../../../api/concero/types'

export enum referralActionType {
	populateReferralState = 0,
	setUsersCount = 1,
}

export interface ReferralReward {
	id: string | null
	reservedAmount: string | null
	claimedAmount: string | null
	claimableAmount: string | null
}

export interface ReferralState {
	id: string | null
	referralCode: string | null
	activatedCode: string | null
	reward: ReferralReward[]
	usersCount: number
}

export type ReferralAction =
	| {
			type: referralActionType.populateReferralState
			state: ReferralAccountInfo
	  }
	| {
			type: referralActionType.setUsersCount
			count: number
	  }
