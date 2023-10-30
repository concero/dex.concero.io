import { standardiseLifiRoute } from '../../../../api/lifi/standardiseLifiRoute'
import { TransactionStatus } from 'rango-types/src/api/shared/transactions'
import { SwapAction, SwapCardStage } from '../swapReducer/types'
import { Dispatch } from 'react'
import { logTxToDB } from '../../../../utils/logTxToDB'

export const handleRangoResponse = (executedRoute, swapDispatch: Dispatch<SwapAction>, provider: 'lifi' | 'rango') => {
	swapDispatch({ type: 'UPDATE_LAST_SWAP_STEP' })

	if (executedRoute.status === TransactionStatus.FAILED) {
		swapDispatch({ type: 'SET_SWAP_STAGE', payload: SwapCardStage.failed })
		logTxToDB({ tx_id: executedRoute.diagnosisUrl, status: 'failure', provider: 'rango' })
	} else if (executedRoute.status === 'success') {
		swapDispatch({ type: 'SET_SWAP_STAGE', payload: SwapCardStage.success })
		logTxToDB({ tx_id: executedRoute.diagnosisUrl, status: 'success', provider: 'rango' })
	}
}

export const handleLifiResponse = (executedRoute, swapDispatch: Dispatch<SwapAction>, provider: 'lifi' | 'rango') => {
	const stdRoute = standardiseLifiRoute(executedRoute)
	const lastExecutionStep = stdRoute.execution[stdRoute.execution.length - 1]
	swapDispatch({ type: 'UPDATE_LAST_SWAP_STEP' })

	if (lastExecutionStep?.status.toLowerCase() === 'done') {
		swapDispatch({ type: 'SET_SWAP_STAGE', payload: SwapCardStage.success })
		logTxToDB({ tx_id: executedRoute.id, status: 'success', provider: 'lifi' })
	} else if (lastExecutionStep?.status.toLowerCase() === 'failed') {
		swapDispatch({ type: 'SET_SWAP_STAGE', payload: SwapCardStage.failed })
		logTxToDB({ tx_id: executedRoute.id, status: 'failure', provider: 'lifi' })
	}
}
