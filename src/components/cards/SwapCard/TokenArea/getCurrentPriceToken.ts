import { fetchCurrentTokenPriceUSD } from '../../../../api/coinGecko/fetchCurrentTokenPriceUSD'

export const getCurrentPriceToken = async (selection, tokenAreaDispatch) => {
  const response = await fetchCurrentTokenPriceUSD(selection.token.symbol)
  tokenAreaDispatch({ type: 'SET_CURRENT_TOKEN_PRICE_USD', payload: response })
}
