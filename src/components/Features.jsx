import React, { useEffect, useState } from "react"
import clsx from "clsx"

import backgroundImage from "../data/backgroundFeatures.jpg"
import transSS2 from "../data/transSS2.png"
// import screenshotExpenses from "./path/to/screenshot/expenses.png"
// import screenshotReporting from "./path/to/screenshot/reporting.png"
// import screenshotVatReturns from "./path/to/screenshot/vat-returns.png"

function Features() {
	let [tabOrientation, setTabOrientation] = useState("horizontal")

	useEffect(() => {
		function onMediaQueryChange() {
			const isLargeScreen = window.innerWidth >= 1024
			setTabOrientation(isLargeScreen ? "horizontal" : "vertical")
		}

		onMediaQueryChange()
		window.addEventListener("resize", onMediaQueryChange)

		return () => {
			window.removeEventListener("resize", onMediaQueryChange)
		}
	}, [])

	const [selectedIndex, setSelectedIndex] = useState(0)

	return (
		<div className="relative isolate overflow-hidden bg-inherit px-6 mt-0 py-24 sm:py-16 lg:overflow-visible lg:px-0">
			<div className="absolute inset-0 -z-10 overflow-hidden">
				<img
					className=""
					src={backgroundImage}
					alt="yo"
				/>
			</div>
			<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:-gap-y-0 ">
				<div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
					<div className="lg:pr-4">
						<div className="lg:max-w-lg">
							<p className="text-base font-semibold leading-7 text-violet-50">
								More Control
							</p>
							<h1 className="mt-14 text-3xl font-bold tracking-tight text-gray-50 sm:text-4xl">
								View all your transactions together seamlessly.
							</h1>
							<p className="mt-4 text-xl leading-8 text-white"></p>
						</div>
					</div>
				</div>
				<div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
					<img
						className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
						src={transSS2}
						alt="yo"
					/>
				</div>
				<div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
					<div className="lg:pr-4">
						<div className="max-w-xl text-base leading-7 text-white lg:max-w-lg">
							<p>
								Save time and effort by conveniently viewing all your
								transactions in one place with GSaver. Our user-friendly
								interface allows you to effortlessly track your financial
								activities, eliminating the hassle of navigating through
								multiple platforms. Enjoy the convenience of centralized
								transaction management and focus on what matters most – your
								financial goals. Simplify your banking experience with GSaver.
							</p>

							{/* <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900"></h2>
							<p className="mt-6"></p> */}
						</div>
					</div>
				</div>
			</div>

			{/* SECOND ONE */}
		</div>
	)
}

export default Features
