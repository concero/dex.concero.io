import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useAccount, useSwitchNetwork } from 'wagmi'
import { activateReferralCode } from '../../../web3/referralFunctions/activateReferralCode'
import { getSigner } from '../../../web3/getSigner'
import { routes } from '../../../constants/routes'

export function JoinScreen() {
	const { address } = useAccount()
	const { switchNetworkAsync } = useSwitchNetwork()
	const { referralCode } = useParams()
	const navigate = useNavigate()

	const handleActivateCode = async () => {
		const signer = await getSigner(5, switchNetworkAsync)
		await activateReferralCode(referralCode, signer)
		navigate(routes.swap)
	}

	useEffect(() => {
		void handleActivateCode()
	}, [address])

	return <div></div>
}
