import { fetchReferralChartData } from '../../../api/concero/fetchReferralChartData'

export async function populateEarningsChartData(walletAddress: string, setEarningsChartData) {
	try {
		const response = await fetchReferralChartData(walletAddress)
		setEarningsChartData(response)
	} catch (error) {
		console.error(error)
	}
}
