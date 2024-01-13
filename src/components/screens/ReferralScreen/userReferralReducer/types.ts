import { type ReferralAccountInfo, type ReferralReward } from '../../../../api/concero/types'

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
	referralCode: string | null
	activatedCode: string
	rewards: ReferralReward[]
	totalUsers: number
	history: ReferralHistoryItem[]
}

export interface ReferralAction {
	type: referralActionType.populateReferralState
	state: ReferralAccountInfo
}
