import React from "react"

import { Button } from "@mui/material"
import backgroundImage from "../data/backgroundLand.jpg"

export function Hero() {
	const styles = {
		backgroundImage: `url(${backgroundImage})`,
		backgroundSize: "cover",
		backgroundPosition: "center",
		minHeight: "100vh", // Ensures the background covers the entire viewport height
	}
	return (
		<div
			className=" pt-32 md:pt-10 pb-16 text-center h-full lg:pt-32"
			style={styles}
		>
			<h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
				Budgeting{" "}
				<span className="relative whitespace-nowrap text-blue-600">
					<span className="relative">streamlined</span>
				</span>{" "}
				for students.
			</h1>
			<p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
				🎉Start your journey towards financial prosperity today – sign up for
				GSaver and take control of your savings like never before!
			</p>
			<div className="mt-10 flex justify-center gap-x-6">
				<Button
					href="/register"
					variant="contained"
				>
					Get started
				</Button>
				<Button
					href=""
					variant="filledTonal"
					color="secondary"
				>
					Login
				</Button>
			</div>
		</div>
	)
}
