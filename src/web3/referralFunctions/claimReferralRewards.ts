import { JsonRpcSigner } from '@ethersproject/providers/src.ts/json-rpc-provider'
import { Contract } from 'ethers'
import { config } from '../../constants/config'

export async function claimReferralRewards(tokenAddress: string, amount: string | null, signer: JsonRpcSigner): Promise<void> {
	if (!amount) return

	try {
		const claimContract = new Contract(config.REFERRAL_PROGRAM_ADDRESS, ['function claim(address token, uint256 amount) external nonReentrant'], signer)
		const tx = await claimContract.claim(tokenAddress, amount)
		console.log(tx)
	} catch (error) {
		console.error(error)
	}
}
