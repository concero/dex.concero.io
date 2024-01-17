import { fetchReferralChartData } from '../../../api/concero/fetchReferralChartData'

export async function populateEarningsChartData(walletAddress: string | undefined, setEarningsChartData: (arg: any) => void) {
	try {
		if (!walletAddress) return
		const response = await fetchReferralChartData(walletAddress)
		if (!response) return
		setEarningsChartData(response)
	} catch (error) {
		console.error(error)
	}
}
