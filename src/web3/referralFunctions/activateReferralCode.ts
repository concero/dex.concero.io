import type { JsonRpcSigner } from '@ethersproject/providers/src.ts/json-rpc-provider'
import { Contract } from 'ethers'
import { config } from '../../constants/config'

export async function activateReferralCode(referralCode: string | undefined, signer: JsonRpcSigner) {
	try {
		if (!referralCode) return
		const referralContract = new Contract(config.REFERRAL_PROGRAM_ADDRESS, ['function setActivatedCode(string calldata code) external'], signer)
		const tx = await referralContract.setActivatedCode(referralCode)
		console.log('tx: ', tx)
	} catch (error) {
		console.error(error)
	}
}
