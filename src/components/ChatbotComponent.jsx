// import React, { useState } from "react"
// import { getStreamingCompletion } from "../api/openaiService"

// const ChatbotComponent = () => {
// 	const [userPrompt, setUserPrompt] = useState("")
// 	const [response, setResponse] = useState("")

// 	const handleSendMessage = async () => {
// 		try {
// 			const apiResponse = await getStreamingCompletion({ userPrompt })
// 			setResponse(apiResponse.data.choices[0].message.content)
// 		} catch (error) {
// 			console.error("Error sending message:", error)
// 		}
// 	}

// 	return (
// 		<div className="chatbot-container">
// 			<div className="chatbot-messages">
// 				{response && <div className="message bot">{response}</div>}
// 			</div>
// 			<div className="chatbot-input">
// 				<input
// 					type="text"
// 					value={userPrompt}
// 					onChange={(e) => setUserPrompt(e.target.value)}
// 					placeholder="Ask a question..."
// 				/>
// 				<button onClick={handleSendMessage}>Send</button>
// 			</div>
// 		</div>
// 	)
// }

// export default ChatbotComponent

// import React, { useState } from "react"
// import axios from "axios"

// const ChatbotComponent = () => {
// 	const [messages, setMessages] = useState([])
// 	const [userInput, setUserInput] = useState("")
// 	const [response, setResponse] = useState("")

// 	const handleSendMessage = async () => {
// 		if (!userInput) {
// 			return // Prevent sending empty messages
// 		}

// 		const newMessages = [...messages, { role: "user", content: userInput }]
// 		setMessages(newMessages)
// 		setUserInput("") // Clear the input field

// 		try {
// 			const apiResponse = await axios.post("/api/openai", {
// 				messages: newMessages,
// 			})
// 			setResponse(apiResponse.data.choices[0].message.content)
// 		} catch (error) {
// 			console.error("Error sending message:", error)
// 		}
// 	}

// 	return (
// 		<div className="chat-container">
// 			<div className="chat-messages">
// 				{messages.map((message, index) => (
// 					<div
// 						key={index}
// 						className={`message ${message.role}`}
// 					>
// 						{message.content}
// 					</div>
// 				))}
// 				{response && <div className="message bot">{response}</div>}
// 			</div>
// 			<div className="chat-input">
// 				<input
// 					type="text"
// 					value={userInput}
// 					onChange={(e) => setUserInput(e.target.value)}
// 					placeholder="Type your message..."
// 				/>
// 				<button onClick={handleSendMessage}>Send</button>
// 			</div>
// 		</div>
// 	)

// 	const [text, setText] = useState("")

// 	const [chat, setChat] = useState([])

// 	const sendMessage = async (e) => {
// 		e.preventDefault()

// 		if (!text) return

// 		setChat([...chat, { text, user: "User" }])

// 		const currentMessages = []

// 		setText("")

// 		const response = await fetch("http://localhost:8002/api/chatbot", {
// 			method: "POST",

// 			headers: { "Content-Type": "application/json" },

// 			body: JSON.stringify({ text }),
// 		})

// 		const data = await response.json()

// 		setChat((state) => [...state, { text: data.reply, user: "Chatbot" }])
// 	}

// 	return (
// 		<div className="App">
// 			<h1>OpenAI Chatbot</h1>

// 			<div className="chat-container">
// 				{chat.map((message, i) => (
// 					<p key={i}>
// 						<strong>{message.user}: </strong>

// 						{message.text}
// 					</p>
// 				))}
// 			</div>

// 			<form onSubmit={sendMessage}>
// 				<input
// 					type="text"
// 					value={text}
// 					onChange={(e) => setText(e.target.value)}
// 				/>

// 				<button type="submit">Send</button>
// 			</form>
// 		</div>
// 	)
// }

// export default ChatbotComponent

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

const API_KEY = "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"
// "Explain things like you would to a 10 year old learning how to code."
const systemMessage = {
	//  Explain things like you're talking to a software professional with 5 years of experience.
	role: "system",
	content:
		"Explain things like you're talking to a software professional with 2 years of experience.",
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
			if (messageObject.sender === "ChatGPT") {
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
						sender: "ChatGPT",
					},
				])
				setIsTyping(false)
			})
	}

	return (
		<div className="App">
			<div className="relative h-[100vh] w-full">
				<MainContainer>
					<ChatContainer>
						<MessageList
							className="overflow-y-auto"
							style={{ scrollBehavior: "smooth" }}
						>
							{isTyping && <TypingIndicator content="ChatGPT is typing" />}
							{messages.map((message, i) => (
								<Message
									key={i}
									model={message}
								/>
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
