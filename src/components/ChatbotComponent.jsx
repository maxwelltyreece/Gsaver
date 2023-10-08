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
		"I am a Finance Professional speaking to College and University Students This is the current data i have: ",
}

const transactions = [
	{
		id: 1,
		date: "31-08-23",
		company: "Uniqlo",
		description: "Clothing",
		amount: "£40",
		direction: "out",
	},
	{
		id: 2,
		date: "30-08-23",
		company: "H&M",
		description: "Fashion",
		amount: "£30",
		direction: "out",
	},
	{
		id: 3,
		date: "29-08-23",
		company: "Tesco",
		description: "Groceries",
		amount: "£55",
		direction: "out",
	},
	{
		id: 4,
		date: "28-08-23",
		company: "Odeon",
		description: "Cinema",
		amount: "£28",
		direction: "out",
	},
	{
		id: 5,
		date: "27-08-23",
		company: "KFC",
		description: "Fast Food",
		amount: "£12",
		direction: "out",
	},
	{
		id: 6,
		date: "26-08-23",
		company: "Uber Eats",
		description: "Food Delivery",
		amount: "£20",
		direction: "out",
	},
	{
		id: 7,
		date: "25-08-23",
		company: "Papa John's",
		description: "Pizza",
		amount: "£18",
		direction: "out",
	},
	{
		id: 8,
		date: "24-08-23",
		company: "Co-Op",
		description: "Groceries",
		amount: "£22",
		direction: "out",
	},
	{
		id: 9,
		date: "23-08-23",
		company: "Five Guys",
		description: "Burgers",
		amount: "£24",
		direction: "out",
	},
	{
		id: 10,
		date: "22-08-23",
		company: "Amazon",
		description: "Books",
		amount: "£45",
		direction: "out",
	},
	{
		id: 11,
		date: "21-08-23",
		company: "Uniqlo",
		description: "Clothing",
		amount: "£38",
		direction: "out",
	},
	{
		id: 12,
		date: "20-08-23",
		company: "H&M",
		description: "Fashion",
		amount: "£27",
		direction: "out",
	},
	{
		id: 13,
		date: "19-08-23",
		company: "Tesco",
		description: "Groceries",
		amount: "£50",
		direction: "out",
	},
	{
		id: 14,
		date: "18-08-23",
		company: "Odeon",
		description: "Cinema",
		amount: "£32",
		direction: "out",
	},
	{
		id: 15,
		date: "17-08-23",
		company: "KFC",
		description: "Fast Food",
		amount: "£14",
		direction: "out",
	},
	{
		id: 16,
		date: "16-08-23",
		company: "Uber Eats",
		description: "Food Delivery",
		amount: "£18",
		direction: "out",
	},
	{
		id: 17,
		date: "15-08-23",
		company: "Papa John's",
		description: "Pizza",
		amount: "£16",
		direction: "out",
	},
	{
		id: 18,
		date: "14-08-23",
		company: "Co-Op",
		description: "Groceries",
		amount: "£21",
		direction: "out",
	},
	{
		id: 19,
		date: "13-08-23",
		company: "Five Guys",
		description: "Burgers",
		amount: "£23",
		direction: "out",
	},
	{
		id: 20,
		date: "12-08-23",
		company: "Amazon",
		description: "Electronics",
		amount: "£90",
		direction: "out",
	},
]

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

		const transactionMessages = transactions.map((transaction) => {
			return {
				role: "assistant",
				content: `Transaction ID: ${transaction.id}\nDate: ${transaction.date}\nCompany: ${transaction.company}\nDescription: ${transaction.description}\nAmount: ${transaction.amount}\nDirection: ${transaction.direction}`,
			}
		})

		// Combine user messages and transaction messages
		const allMessages = [
			...apiMessages, // The messages from our chat with ChatGPT
			...transactionMessages, // Transaction messages
		]

		const apiRequestBody = {
			model: "gpt-3.5-turbo",
			messages: allMessages,
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
			<div className="relative h-[100vh] w-full">
				<MainContainer className="">
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
