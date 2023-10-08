const express = require("express")

const cors = require("cors")

const app = express()

require("dotenv").config()

const PORT = process.env.PORT || 3000

const OPENAI_API_KEY = process.env.OPENAI_API_KEY

const { Configuration, OpenAIApi } = require("openai")

const configuration = new Configuration({
	apiKey: OPENAI_API_KEY,
})

const openai = new OpenAIApi(configuration)

app.use(cors())

app.use(express.json())

app.listen(PORT, () =>
	console.log(`Server started on http://localhost:${PORT}`)
)

async function sendTextToOpenAI(text) {
	try {
		console.log(text)

		const response = await openai.createCompletion({
			model: "text-davinci-003",

			prompt: text,
		})

		return response.data.choices[0].text
	} catch (error) {
		console.log(error.message)
	}
}

app.post("/api/openai", async (req, res) => {
	try {
		const response = await sendTextToOpenAI(req.body.text)

		res.json({ reply: response })
	} catch (err) {
		console.error(err)

		res.status(500).send({ error: "Error connecting to OpenAI." })
	}
})
