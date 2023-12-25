import { ReferralAccountInfo, ReferralReward } from '../../../../api/concero/types'

export enum referralActionType {
	populateReferralState = 0,
}

export interface ReferralState {
	id: string
	referralCode: string
	activatedCode: string
	rewards: ReferralReward[]
	totalUsers: number
}

export type ReferralAction = {
	type: referralActionType.populateReferralState
	state: ReferralAccountInfo
}
