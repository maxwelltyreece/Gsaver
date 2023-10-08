import React, { useEffect, useState } from "react"
import clsx from "clsx"

import backgroundImage from "../data/backgroundFeatures.jpg"
import ssDash from "../data/dashSS2.png"
// import screenshotExpenses from "./path/to/screenshot/expenses.png"
// import screenshotReporting from "./path/to/screenshot/reporting.png"
// import screenshotVatReturns from "./path/to/screenshot/vat-returns.png"

export default function FeatureSec() {
	return (
		<div className="bg-inherit pb-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl sm:text-center">
					<h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">
						All your finances in one place.
					</h2>
					<p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
						Pockets running dry? No Problem
					</p>
					<p className="mt-6 text-lg leading-8 text-gray-600">
						Simplify your financial management with GSaver. No more juggling
						between multiple banking apps – GSaver has got you covered!
						Experience seamless and efficient banking all in one place.
					</p>
				</div>
			</div>
			<div className="relative overflow-hidden pt-16">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<img
						src={ssDash}
						alt="App screenshot"
						className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
						width={2432}
						height={1442}
					/>
					<div
						className="relative"
						aria-hidden="true"
					>
						<div className="absolute -inset-x-10 bottom-0 bg-gradient-to-t from-[#f9fafc] pt-[7%]" />
					</div>
				</div>
			</div>
			<div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8"></div>
		</div>
	)
}
