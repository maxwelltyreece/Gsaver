import React from "react"
import { Hero } from "./Hero"
import { LandNavBar } from "./LandNavBar"
import { Testimonials } from "./Testimonials"

const Landing = () => {
	return (
		<div>
			<LandNavBar />
			<Hero />
			{/* <Testimonials /> */}
		</div>
	)
}

export default Landing
