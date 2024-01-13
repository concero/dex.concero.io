import { type ReferralAccountInfo, type ReferralReward } from '../../../../api/concero/types'

export enum referralActionType {
	populateReferralStateData = 0,
}

export interface ReferralHistoryItem {
	title: string
	body: string
	timestamp: string
}

export interface ReferralState {
	isReferralCreated: boolean
	data: {
		id: string
		referralCode: string | null
		activatedCode: string
		rewards: ReferralReward[]
		totalUsers: number
		history: ReferralHistoryItem[]
	} | null
}

export interface ReferralAction {
	type: referralActionType.populateReferralStateData
	state: ReferralAccountInfo
}
