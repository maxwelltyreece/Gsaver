import React from "react"

import { Button } from "@mui/material"
import backgroundImage from "../data/backgroundTestimonials.jpg"

export function Testimonials() {
	const styles = {
		backgroundImage: `url(${backgroundImage})`,
		backgroundSize: "cover",
		backgroundPosition: "center",
		minHeight: "30vh", // Ensures the background covers the entire viewport height
	}
	return (
		<div
			className=" pt-16 md:pt-10 pb-16 text-center h-full lg:pt-32"
			style={styles}
		>
			<h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-white sm:text-7xl">
				Testimonials
			</h1>

			{/* <div className="mt-10 flex justify-center gap-x-6">
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
			</div> */}
		</div>
	)
}
