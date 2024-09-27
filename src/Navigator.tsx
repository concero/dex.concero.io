import { lazy, Suspense, useEffect, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AppScreen } from './components/screens/AppScreen/AppScreen'
import { Header } from './components/layout/Header/Header/Header'
import { routes } from './constants/routes'
import { FullScreenLoader } from './components/layout/FullScreenLoader/FullScreenLoader'
import { useAccount } from 'wagmi'
import posthog from 'posthog-js'
import { handleFetchUser } from './web3/handleFetchUser'
import { type IUser } from './api/concero/user/userType'
import { useFeatureFlagEnabled } from 'posthog-js/react'

const PoolScreen = lazy(
	async () =>
		await import('./components/screens/PoolScreen/PoolScreen').then(module => ({ default: module.PoolScreen })),
)

const RewardsScreen = lazy(
	async () =>
		await import('./components/screens/RewardsScreen/RewardsScreen').then(module => ({
			default: module.RewardsScreen,
		})),
)

export const Navigator = () => {
	const [user, setUser] = useState<IUser | null>(null)

	const cerpTesting = useFeatureFlagEnabled('cerp-testing')

	const { address } = useAccount()

	useEffect(() => {
		if (!address) return

		handleFetchUser(address).then(user => {
			setUser(user)
		})
		posthog.identify(address)
	}, [address])

	if (!cerpTesting) {
		return (
			<AppScreen>
				<div className="cerpTestText">
					<h1>
						We are currently working on a major update to our app.
						<br />
						It will be available in a few hours. Stay tuned!
					</h1>
				</div>
			</AppScreen>
		)
	}

	return (
		<BrowserRouter>
			<AppScreen>
				<Header user={user} />
				<Routes>
					<Route
						path={routes.pool}
						element={
							<Suspense fallback={<FullScreenLoader />}>
								<PoolScreen />
							</Suspense>
						}
					/>
					<Route
						path={routes.rewards}
						element={
							<Suspense fallback={<FullScreenLoader />}>
								<RewardsScreen />
							</Suspense>
						}
					/>
					<Route path={routes.root} element={<Navigate to={routes.pool} />} />
					<Route path={'/*'} element={<Navigate to={routes.pool} />} />
				</Routes>
			</AppScreen>
		</BrowserRouter>
	)
}
