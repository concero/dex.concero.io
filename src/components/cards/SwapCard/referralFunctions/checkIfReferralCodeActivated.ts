import { fetchAccountReferralInfo } from '../../../../api/concero/fetchAccountReferralInfo'

export async function checkIfReferralCodeActivated(walletAddress: string): Promise<boolean> {
	const accountReferralInfo = await fetchAccountReferralInfo(walletAddress)
	return !!accountReferralInfo?.activatedCode
}
