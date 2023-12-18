import { JsonRpcSigner } from '@ethersproject/providers/src.ts/json-rpc-provider'
import { Contract } from 'ethers'
import { config } from '../../constants/config'

export async function setReferralCode(referralCode: string, signer: JsonRpcSigner): Promise<void> {
	try {
		const referralContract = new Contract(config.REFERRAL_PROGRAM_ADDRESS, ['function setReferralCode(string calldata code) external'], signer)
		const tx = await referralContract.setReferralCode(referralCode)
		console.log('tx: ', tx)
	} catch (error) {
		console.error(error)
	}
}
