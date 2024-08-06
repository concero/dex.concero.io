import { type PointsBooster } from '../user/userType'

export enum QuestConditionType {
	ProvideLiquidity = 'ProvideLiquidity',
	ExecuteTransactions = 'ExecuteTransactions',
	ExecuteBridgeTransactions = 'ExecuteBridgeTransactions',
	SubscribeOnSocialNetwork = 'SubscribeOnSocialNetwork',
	RepostOnSocialNetwork = 'RepostOnSocialNetwork',
}

export interface QuestCondition {
	type: QuestConditionType
	description: string
	targetNumber?: number
	targetValue?: string
	link?: string
}

export interface IQuest {
	_id: string
	name: string
	description: string
	image: string
	startDate: number
	endDate: number
	conditions: QuestCondition[]
	rewards: {
		points: number
		booster?: PointsBooster
	}
	position: number
}
