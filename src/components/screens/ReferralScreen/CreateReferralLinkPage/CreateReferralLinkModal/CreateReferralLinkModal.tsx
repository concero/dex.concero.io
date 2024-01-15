import classNames from './CreateReferralLinkModal.module.pcss'
import { Modal } from '../../../../modals/Modal/Modal'
import { useTranslation } from 'react-i18next'
import { Button } from '../../../../buttons/Button/Button'
import { IconArrowsDiff } from '@tabler/icons-react'
import { useState } from 'react'
import { TextInput } from '../../../../input/TextInput'
import { getSigner } from '../../../../../web3/getSigner'
import { useSwitchNetwork } from 'wagmi'
import { setReferralCode } from '../../../../../web3/referralFunctions/setReferralCode'

interface CreateReferralLinkModalProps {
	isOpen: boolean
	setIsOpen: (isOpen: boolean) => void
}

export function CreateReferralLinkModal({ isOpen, setIsOpen }: CreateReferralLinkModalProps) {
	const { t } = useTranslation()
	const [isCustomCodeMode, setIsCustomCodeMode] = useState(false)
	const [code, setCode] = useState('')
	const { switchNetworkAsync } = useSwitchNetwork()

	const handleCreateReferralLinkClick = async () => {
		if (isCustomCodeMode) {
			if (!code) return
			await setReferralCode(code, await getSigner(5, switchNetworkAsync))
		} else {
			await setReferralCode('test', await getSigner(5, switchNetworkAsync))
		}
	}

	const buttonText = isCustomCodeMode ? t('referral.createCustomLink') : t('referral.getRandomLink')

	return (
		<Modal title={t('referral.createLink')} show={isOpen} setShow={setIsOpen}>
			<div className={classNames.container}>
				{isCustomCodeMode ? (
					<div>
						<TextInput
							placeholder={t('referral.enterYourLink')}
							value={code}
							onChangeText={v => {
								setCode(v)
							}}
						/>
					</div>
				) : null}
				<Button leftIcon={<IconArrowsDiff className={classNames.buttonIcon} />} onClick={handleCreateReferralLinkClick}>
					{buttonText}
				</Button>
				{!isCustomCodeMode ? (
					<div className={'center'}>
						<p
							className={`body1 ${classNames.link}`}
							onClick={() => {
								setIsCustomCodeMode(prev => !prev)
							}}
						>
							{t('referral.orCreateCustomLink')}
						</p>
					</div>
				) : null}
			</div>
		</Modal>
	)
}
