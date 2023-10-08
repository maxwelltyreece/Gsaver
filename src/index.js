import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import { ContextProvider } from "./contexts/ContextProvider"
import Landing from "./components/Landing"
import ChatbotComponent from "./components/ChatbotComponent"

ReactDOM.render(
	<React.StrictMode>
		<ContextProvider>
			{/* <ChatbotComponent /> */}
			{/* <Landing /> */}
			<App />
		</ContextProvider>
	</React.StrictMode>,
	document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
