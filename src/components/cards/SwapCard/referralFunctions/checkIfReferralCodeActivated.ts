import { Contract } from 'ethers'
import { config } from '../../../../constants/config'
import { JsonRpcSigner } from '@ethersproject/providers/src.ts/json-rpc-provider'

export async function checkIfReferralCodeActivated(walletAddress: string, signer: JsonRpcSigner): Promise<boolean> {
	try {
		const mapContract = new Contract(config.REFERRAL_PROGRAM_ADDRESS, ['function activatedCode(address) public'], signer)
		const code = await mapContract.activatedCode(walletAddress)
		console.log('code: ', code)
		return !!code
	} catch (error) {
		console.error(error)
		return false
	}
}
