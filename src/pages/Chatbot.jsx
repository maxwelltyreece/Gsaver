import React, { useState } from "react"
import S1 from "../data/Sprites/sprite1.png"
import S2 from "../data/Sprites/sprite2.png"
import S3 from "../data/Sprites/sprite3.png"
import S4 from "../data/Sprites/sprite4.png"
import S5 from "../data/Sprites/sprite5.png"
import S6 from "../data/Sprites/sprite6.png"
import ChatbotComponent from "../components/ChatbotComponent"

const spriteImages = [S1, S2, S3, S4, S5, S6]

const ChatbotPage = () => {
	const [currentSpriteIndex, setCurrentSpriteIndex] = useState(0)
	const [isSaved, setIsSaved] = useState(false)
	const selectedSprite = spriteImages[currentSpriteIndex]

	const handleNextSprite = () => {
		setCurrentSpriteIndex((prevIndex) => (prevIndex + 1) % spriteImages.length)
	}

	const handlePrevSprite = () => {
		setCurrentSpriteIndex((prevIndex) =>
			prevIndex === 0 ? spriteImages.length - 1 : prevIndex - 1
		)
	}

	const handleSaveSprite = () => {
		setIsSaved(true)
	}

	const spriteContainerStyle = {
		width: "300px",
		height: "300px",
		margin: "0 auto",
		overflow: "hidden",
		position: "relative",
	}

	const spriteImageStyle = {
		width: "100%",
		height: "100%",
	}

	const buttonStyle = {
		fontSize: "24px",
		backgroundColor: "#007bff",
		color: "#fff",
		border: "none",
		padding: "1px 20px",
		margin: "0 10px",
		cursor: "pointer",
	}

	return (
		<div>
			<div className="m-2 md:m-10 mt-24 p-2 md:p-0 bg-inherit rounded-3xl">
				<p className="flex justify-center font-semibold">Chatbot</p>
			</div>
			{isSaved ? (
				<ChatbotComponent />
			) : (
				<div style={{ textAlign: "center", padding: "20px" }}>
					<div style={spriteContainerStyle}>
						<img
							src={selectedSprite}
							alt="Choose your chatbot"
							style={spriteImageStyle}
						/>
					</div>
					<div style={{ marginTop: "20px" }}>
						<button
							style={buttonStyle}
							onClick={handlePrevSprite}
						>
							&#8249;
						</button>
						<button
							style={buttonStyle}
							onClick={handleNextSprite}
						>
							&#8250;
						</button>
						<button
							style={buttonStyle}
							onClick={handleSaveSprite}
						>
							Save
						</button>
					</div>
				</div>
			)}
		</div>
	)
}

export default ChatbotPage
