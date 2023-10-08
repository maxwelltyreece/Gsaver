// const express = require("express")
// const axios = require("axios")
// const bodyParser = require("body-parser")
// const app = express()
// const PORT = process.env.PORT || 3000
// const OPENAI_API_KEY = process.env.OPENAI_API_KEY

// // Middleware for parsing JSON requests
// app.use(bodyParser.json())

// // API endpoint for handling OpenAI API requests
// app.post("/api/openai", async (req, res) => {
// 	try {
// 		const { messages } = req.body

// 		if (!messages) {
// 			return res.status(400).json({ error: "Messages are required" })
// 		}

// 		const response = await axios.post(
// 			"https://api.openai.com/v1/chat/completions",
// 			{
// 				messages: messages,
// 			},
// 			{
// 				headers: {
// 					"Content-Type": "application/json",
// 					Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
// 				},
// 			}
// 		)

// 		res.json(response.data.choices[0].message)
// 	} catch (error) {
// 		console.error("[OPENAI_ERROR]", error)
// 		res.status(500).json({ error: "Internal Server Error" })
// 	}
// })

// // Start the Express server
// app.listen(PORT, () => {
// 	console.log(`Server is running on port ${PORT}`)
// })

import { Configuration, OpenAIApi } from "openai"

const configuration = new Configuration({
	apiKey: process.env.OPENAI_API_KEY,
})
const openai = new OpenAIApi(configuration)

export default async function (req, res) {
	if (!configuration.apiKey) {
		res.status(500).json({
			error: {
				message:
					"OpenAI API key not configured, please follow instructions in README.md",
			},
		})
		return
	}

	const animal = req.body.animal || ""
	if (animal.trim().length === 0) {
		res.status(400).json({
			error: {
				message: "Please enter a valid animal",
			},
		})
		return
	}

	try {
		const completion = await openai.createCompletion({
			model: "text-davinci-003",
			prompt: generatePrompt(animal),
			temperature: 0.6,
		})
		res.status(200).json({ result: completion.data.choices[0].text })
	} catch (error) {
		// Consider adjusting the error handling logic for your use case
		if (error.response) {
			console.error(error.response.status, error.response.data)
			res.status(error.response.status).json(error.response.data)
		} else {
			console.error(`Error with OpenAI API request: ${error.message}`)
			res.status(500).json({
				error: {
					message: "An error occurred during your request.",
				},
			})
		}
	}
}

function generatePrompt(animal) {
	const capitalizedAnimal =
		animal[0].toUpperCase() + animal.slice(1).toLowerCase()
	return `Suggest three names for an animal that is a superhero.

Animal: Cat
Names: Captain Sharpclaw, Agent Fluffball, The Incredible Feline
Animal: Dog
Names: Ruff the Protector, Wonder Canine, Sir Barks-a-Lot
Animal: ${capitalizedAnimal}
Names:`
}
