import { type ReferralAccountInfo, type ReferralReward } from '../../../../api/concero/types'

export enum referralActionType {
	populateReferralStateData = 0,
	setLoading = 1,
}

export interface ReferralHistoryItem {
	title: string
	body: string
	timestamp: string
}

export interface ReferralAccountData {
	id: string
	referralCode: string | null
	activatedCode: string
	rewards: ReferralReward[]
	totalUsers: number
	history: ReferralHistoryItem[]
}

export interface ReferralState {
	isReferralCreated: boolean
	isLoading: boolean
	data: ReferralAccountInfo | null
}

export type ReferralAction =
	| {
			type: referralActionType.populateReferralStateData
			state: ReferralAccountInfo
	  }
	| {
			type: referralActionType.setLoading
			state: boolean
	  }
