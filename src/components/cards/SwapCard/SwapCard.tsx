import { FC, useContext, useRef } from 'react'
import { useAccount } from 'wagmi'
import { CardHeader } from '../CardHeader/CardHeader'
import classNames from './SwapCard.module.pcss'
import { TokenArea } from './TokenArea/TokenArea'
import { SwapDetails } from './SwapDetails/SwapDetails'
import { SwapCardProps } from './types'
import { useSwapReducer } from './swapReducer/swapReducer'
import { SelectionContext } from '../../../hooks/SelectionContext'
import { SwapButton } from '../../buttons/SwapButton/SwapButton'
import { handleSwap } from './swapExecution/handleSwap'
import { InsuranceProvider } from './InsuranceContext'
import { useSwapCardEffects } from './SwapCardEffects'
import { switchChain } from './switchChain'
import { Card } from '../Card/Card'

export const SwapCard: FC<SwapCardProps> = () => {
  const { address, isConnected } = useAccount()
  const [{ from, to, balance, routes, isLoading, selectedRoute, transactionResponse }, swapDispatch] = useSwapReducer()
  const { dispatch } = useContext(SelectionContext)
  const typingTimeoutRef = useRef(null)

  const populateRoutes = (routes) => {
    swapDispatch({
      type: 'POPULATE_ROUTES',
      payload: routes,
    })
  }

  const toggleInsurance = (routeId) => {
    swapDispatch({
      type: 'TOGGLE_INSURANCE',
      payload: routeId,
    })
  }

  useSwapCardEffects({
    from,
    to,
    swapDispatch,
    address,
    dispatch,
    setResponse: populateRoutes,
    selectedRoute,
    typingTimeoutRef,
  })

  const switchChainHook = () => {
    switchChain(from.chain.id)
  }

  return (
    <InsuranceProvider toggleInsurance={toggleInsurance}>
      <Card className={classNames.container}>
        <CardHeader title="Swap" />
        <div className={classNames.swapContainer}>
          <TokenArea direction="from" selection={from} dispatch={swapDispatch} balance={balance} />
          <TokenArea direction="to" selection={to} dispatch={swapDispatch} />
          <SwapDetails
            selection={{
              from,
              to,
            }}
            selectedRoute={selectedRoute}
            setSelectedRoute={(route) => swapDispatch({
                type: 'SET_SELECTED_ROUTE',
                payload: route,
              })}
            routes={routes}
            isLoading={isLoading}
          />
          <SwapButton
            onClick={() => handleSwap(
                swapDispatch,
                selectedRoute.originalRoute,
                selectedRoute.provider,
                address,
                from,
                switchChainHook,
              )}
            from={from}
            to={to}
            isLoading={isLoading}
            isConnected={isConnected}
            routes={routes}
            balance={balance}
            transactionResponse={transactionResponse}
          />
        </div>
      </Card>
    </InsuranceProvider>
  )
}
