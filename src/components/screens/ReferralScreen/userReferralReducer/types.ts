import { ReferralAccountInfo, ReferralReward } from '../../../../api/concero/types'

export enum referralActionType {
	populateReferralState = 0,
}

export interface ReferralHistoryItem {
	title: string
	body: string
	timestamp: string
}

export interface ReferralState {
	id: string
	referralCode: string
	activatedCode: string
	rewards: ReferralReward[]
	totalUsers: number
	history: ReferralHistoryItem[]
}

export type ReferralAction = {
	type: referralActionType.populateReferralState
	state: ReferralAccountInfo
}
