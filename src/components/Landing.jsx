import React from "react"
import { Hero } from "./Hero"
import { LandNavBar } from "./LandNavBar"
import { Testimonials } from "./Testimonials"
import Features from "./Features"
import FeatureSec from "./Feature2"
import Feature3 from "./Feature3"

const Landing = () => {
	return (
		<div>
			<LandNavBar />
			<Hero />
			<FeatureSec />
			<Features />
			<Feature3 />
			{/* <Testimonials /> */}
		</div>
	)
}

export default Landing
