import OpenAI from "openai"

const client = new OpenAI({
	apiKey: "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",
})

const systemMessage = {
	role: "system",
	content:
		"You are an Askbot. You are supposed to answer questions asked by users. Validate the prompts to be a question and it should not be inappropriate. Give funky responses.",
}

export const getStreamingCompletion = async ({ userPrompt }) => {
	return client.chat.completions.create({
		model: "gpt-3.5-turbo",
		messages: [systemMessage, { role: "user", content: userPrompt }],
		stream: true,
	})
}
