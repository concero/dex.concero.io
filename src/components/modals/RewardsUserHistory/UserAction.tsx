import classNames from './RewardsUserHistory.module.pcss'
import { useEffect, useState } from 'react'
import {
	ActionType,
	type IUserAction,
	TransactionType,
	type UserActionQuestData,
	type UserActionTxData,
} from '../../../api/concero/userActions/userActionType'
import { formatDateTime, toLocaleNumber } from '../../../utils/formatting'

interface UserActionProps {
	action: IUserAction
}

export const UserAction = ({ action }: UserActionProps) => {
	const [value, setValue] = useState('')

	const getTransactionInfo = () => {
		const { from, to, type } = action.data as UserActionTxData

		const txAction = type === TransactionType.ConceroBridgeTx ? 'Bridge' : 'Swap'

		const txValue = `${txAction} from ${toLocaleNumber(from.amount, 2)} ${from.tokenSymbol} on ${from.chainName} to ${toLocaleNumber(to.amount, 2)} ${to.tokenSymbol} on ${to.chainName}`
		setValue(txValue)
	}

	const getQuestInfo = () => {
		// todo: can we remove all "as" type casts?
		const { name } = action.data as UserActionQuestData
		setValue(`Quest completed: ${name}`)
	}

	useEffect(() => {
		if (action.actionType === ActionType.questReward) {
			getQuestInfo()
		}
		if (action.actionType === ActionType.transactionReward) {
			getTransactionInfo()
		}
		if (action.actionType === ActionType.specialReward) {
			const { name } = action.data as UserActionQuestData
			setValue(name)
		}
	}, [])

	return (
		<div className={classNames.userAction}>
			<p className={`${classNames.title} body2`}>{value}</p>

			<div className="row">
				<span className={`${classNames.points} body2`}>+ {action.points?.toFixed(2)} CERs</span>
				<p className={`${classNames.date} body2`}>
					{formatDateTime(new Date(action.timestamp), 'D MMM YYYY, HH:mm')}
				</p>
			</div>
		</div>
	)
}
