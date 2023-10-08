import React from "react"
import origIcon from "../data/ChatBotIcon.png"

const ChatBotAvatar = ({ className }) => {
	return (
		<img
			src={origIcon} // Replace this with the actual path to your ChatBot's avatar image
			alt="ChatBot Avatar"
			className={`w-12 h-12 md:w-16 md:h-16 rounded-full ${className || ""}`}
		/>
	)
}

export default ChatBotAvatar
