import { IconArrowsUpDown, IconGasStation, IconWallet } from '@tabler/icons-react'
import { type ReactNode } from 'react'

export enum ButtonType {
	LOADING = 1,
	DEPOSIT = 2,
	ENTER_AMOUNT = 3,
	LOW_BALANCE = 4,
	LOW_GAS = 5,
	LOW_FEES = 6,
	CONNECT_WALLET = 7,
	NO_ROUTES = 8,
	REVIEW = 9,
	FETCH_BALANCES_LOADING = 10,
	CONNECT_WALLET_BRIGHT = 11,
	TESTNET_AMOUNT_TOO_HIGH = 12,
	TESTNET_AMOUNT_TOO_LOW = 13,
	WITHDRAW = 14,
}

export const buttonText: { [key in ButtonType]: string } = {
	[ButtonType.LOADING]: 'button.findingRoutes',
	[ButtonType.WITHDRAW]: 'Request withdraw',
	[ButtonType.DEPOSIT]: 'Deposit',
	[ButtonType.ENTER_AMOUNT]: 'button.enterAmountToSwap',
	[ButtonType.LOW_BALANCE]: 'button.insufficientBalance',
	[ButtonType.LOW_GAS]: 'button.insufficientGas',
	[ButtonType.LOW_FEES]: 'button.insufficientFees',
	[ButtonType.CONNECT_WALLET]: 'button.connectWalletToSwap',
	[ButtonType.NO_ROUTES]: 'button.noRoutesFound',
	[ButtonType.REVIEW]: 'button.reviewSwap',
	[ButtonType.FETCH_BALANCES_LOADING]: '',
	[ButtonType.CONNECT_WALLET_BRIGHT]: 'button.connectWalletToSwap',
	[ButtonType.TESTNET_AMOUNT_TOO_HIGH]: 'Amount should not be greater than 10',
	[ButtonType.TESTNET_AMOUNT_TOO_LOW]: 'From amount is too low',
}

export const isButtonDisabled: { [key in ButtonType]: boolean } = {
	[ButtonType.LOADING]: true,
	[ButtonType.WITHDRAW]: false,
	[ButtonType.DEPOSIT]: false,
	[ButtonType.ENTER_AMOUNT]: true,
	[ButtonType.LOW_BALANCE]: true,
	[ButtonType.LOW_GAS]: true,
	[ButtonType.LOW_FEES]: true,
	[ButtonType.CONNECT_WALLET]: true,
	[ButtonType.NO_ROUTES]: true,
	[ButtonType.REVIEW]: false,
	[ButtonType.FETCH_BALANCES_LOADING]: true,
	[ButtonType.CONNECT_WALLET_BRIGHT]: false,
	[ButtonType.TESTNET_AMOUNT_TOO_HIGH]: true,
	[ButtonType.TESTNET_AMOUNT_TOO_LOW]: true,
}

export const buttonStyleClass: { [key in ButtonType]: string } = {
	[ButtonType.LOADING]: 'loading',
	[ButtonType.WITHDRAW]: 'swap',
	[ButtonType.DEPOSIT]: 'swap',
	[ButtonType.ENTER_AMOUNT]: 'disabled',
	[ButtonType.LOW_BALANCE]: 'wrong',
	[ButtonType.LOW_GAS]: 'wrong',
	[ButtonType.LOW_FEES]: 'wrong',
	[ButtonType.CONNECT_WALLET]: 'disabled',
	[ButtonType.NO_ROUTES]: 'disabled',
	[ButtonType.REVIEW]: 'swap',
	[ButtonType.FETCH_BALANCES_LOADING]: 'loading',
	[ButtonType.CONNECT_WALLET_BRIGHT]: 'swap',
	[ButtonType.TESTNET_AMOUNT_TOO_HIGH]: 'wrong',
	[ButtonType.TESTNET_AMOUNT_TOO_LOW]: 'wrong',
}

export const iconComponent: { [key in ButtonType]: ReactNode | null } = {
	[ButtonType.LOADING]: null,
	[ButtonType.WITHDRAW]: <IconArrowsUpDown size={18} color="white" />,
	[ButtonType.DEPOSIT]: <IconArrowsUpDown size={18} color="white" />,
	[ButtonType.ENTER_AMOUNT]: null,
	[ButtonType.LOW_BALANCE]: <IconWallet size={18} color="white" />,
	[ButtonType.LOW_GAS]: <IconGasStation size={18} color="white" />,
	[ButtonType.LOW_FEES]: <IconWallet size={18} color="white" />,
	[ButtonType.CONNECT_WALLET]: null,
	[ButtonType.NO_ROUTES]: null,
	[ButtonType.REVIEW]: <IconArrowsUpDown size={18} color="white" />,
	[ButtonType.FETCH_BALANCES_LOADING]: null,
	[ButtonType.CONNECT_WALLET_BRIGHT]: <IconWallet size={18} color="white" />,
	[ButtonType.TESTNET_AMOUNT_TOO_HIGH]: <IconWallet size={18} color="white" />,
	[ButtonType.TESTNET_AMOUNT_TOO_LOW]: <IconWallet size={18} color="white" />,
}
