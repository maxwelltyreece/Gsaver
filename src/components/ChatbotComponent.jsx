import { useState } from "react"
import "../App.css"
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css"
import {
	MainContainer,
	ChatContainer,
	MessageList,
	Message,
	MessageInput,
	TypingIndicator,
} from "@chatscope/chat-ui-kit-react"
import ChatBotAvatar from "./ChatBotAvatar"

const API_KEY = "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"
// const API_KEY = process.env.API_KEY
// "Explain things like you would to a 10 year old learning how to code."
const systemMessage = {
	//  Explain things like you're talking to a software professional with 5 years of experience.
	role: "system",
	content:
		"I am a Finance Professional speaking to College and University Students",
}

export default function ChatbotComponent() {
	const [messages, setMessages] = useState([
		{
			message: "Hello, I'm your Personal Finance Assistant, Im here to help!",
			sentTime: "just now",
			sender: "ChatBot",
		},
	])
	const [isTyping, setIsTyping] = useState(false)

	const handleSend = async (message) => {
		const newMessage = {
			message,
			direction: "outgoing",
			sender: "user",
		}

		const newMessages = [...messages, newMessage]

		setMessages(newMessages)

		// Initial system message to determine ChatGPT functionality
		// How it responds, how it talks, etc.
		setIsTyping(true)
		await processMessageToChatGPT(newMessages)
	}

	async function processMessageToChatGPT(chatMessages) {
		// messages is an array of messages
		// Format messages for chatGPT API
		// API is expecting objects in format of { role: "user" or "assistant", "content": "message here"}
		// So we need to reformat

		let apiMessages = chatMessages.map((messageObject) => {
			let role = ""
			if (messageObject.sender === "ChatBot") {
				role = "assistant"
			} else {
				role = "user"
			}
			return { role: role, content: messageObject.message }
		})

		// Get the request body set up with the model we plan to use
		// and the messages which we formatted above. We add a system message in the front to'
		// determine how we want chatGPT to act.
		const apiRequestBody = {
			model: "gpt-3.5-turbo",
			messages: [
				systemMessage, // The system message DEFINES the logic of our chatGPT
				...apiMessages, // The messages from our chat with ChatGPT
			],
		}

		await fetch("https://api.openai.com/v1/chat/completions", {
			method: "POST",
			headers: {
				Authorization: "Bearer " + API_KEY,
				"Content-Type": "application/json",
			},
			body: JSON.stringify(apiRequestBody),
		})
			.then((data) => {
				return data.json()
			})
			.then((data) => {
				console.log(data)
				setMessages([
					...chatMessages,
					{
						message: data.choices[0].message.content,
						sender: "ChatBot",
					},
				])
				setIsTyping(false)
			})
	}

	return (
		<div className="App">
			<div className="relative h-[80vh] w-[100vh]">
				<MainContainer>
					<ChatContainer>
						<MessageList
							className="overflow-y-auto"
							style={{ scrollBehavior: "smooth" }}
						>
							{isTyping && <TypingIndicator content="Your ChatBot is typing" />}
							{messages.map((message, i) => (
								<div
									key={i}
									className="flex items-center mb-4"
								>
									{message.sender === "ChatBot" && (
										<ChatBotAvatar className="mr-2" />
									)}
									<Message
										key={i}
										model={message}
									/>
								</div>
							))}
						</MessageList>
						<MessageInput
							placeholder="Type message here"
							onSend={handleSend}
						/>
					</ChatContainer>
				</MainContainer>
			</div>
		</div>
	)
}
