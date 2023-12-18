export enum referralActionType {
	populateReferralState = 0,
}

export interface ReferralState {
	id: string | null
	referralCode: string | null
	activatedCode: string | null
	reward: {
		id: string | null
		reservedAmount: string | null
		claimedAmount: string | null
		claimableAmount: string | null
	}[]
}

export interface ReferralAction {
	type: referralActionType
	state: ReferralState
}
