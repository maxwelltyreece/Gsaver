import React from "react"
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns"
import { Link as RouterLink } from "react-router-dom"

import {
	Card,
	CardActionArea,
	CardContent,
	Avatar,
	Paper,
	CardMedia,
} from "@mui/material"

import Natwest from "../data/Natwest.png"
import Santander from "../data/santander.jpg"
import Typography from "@mui/material/Typography"
import { Button } from "../components"
import { recentTransactions, dropdownData } from "../data/dummy"
import { useStateContext } from "../contexts/ContextProvider"

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { ChartsHeader, LineChart } from '../components';
import ChatBotIcon from "../data/Sprites/sprite1profile.gif";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const DropDown = ({ currentMode }) => (
	<div className="w-28 border-1 border-color px-2 py-1 rounded-md">
		<DropDownListComponent
			id="time"
			fields={{ text: "Time", value: "Id" }}
			style={{ border: "none", color: currentMode === "Dark" && "white" }}
			value="1"
			dataSource={dropdownData}
			popupHeight="220px"
			popupWidth="120px"
		/>
	</div>
)

function SavingsChart () {
	return (
		<div className=" bg-white dark:bg-secondary-dark-bg rounded-3xl">
			<ChartsHeader category="Savings" title="" />
			<div className="w-full">
				<LineChart height="210px"/>
			</div>
		</div>
	);
}

function ChatbotWidget() {
	const {currentColor} = useStateContext

	return (
		<Card className="h-full"> {/* Use 'h-full' to make the card full height */}
			<CardActionArea component={RouterLink} to={"/chatbot"}>
				<CardContent className="flex items-center justify-center"> {/* Center content vertically */}
					<img src={ChatBotIcon} alt="ChatBot Icon" style={{ maxHeight: "100%", maxWidth: "100%" }} /> {/* Add 'maxHeight' and 'maxWidth' to keep image fully visible */}
				</CardContent>
			</CardActionArea>
			<div className="text-center">
				<Typography style={{ background: currentColor }} >
					Ask me a question
				</Typography>
			</div>
		</Card>
	);
}

function NeedHelpWidget () {
	const { currentColor } = useStateContext()

	return (
		<>
		<Card>
			<CardActionArea
				component={RouterLink}
				to={"/tips"}
				>
				<Item className=' bg-white dark:text-gray-200 dark:bg-secondary-dark-bg bg-no-repeat mb-5'>
					<div className='text-center'>
						<div><Typography className='mb-8 p-3 rounded' style={{backgroundColor: currentColor}}>Need help?</Typography></div>
						<div>
							<p className='mt-3 text-center p-4'>
								Saving money as a student may seem daunting, but you're not alone in this journey. Click here to see some useful tips and tricks that might help you save some more!
							</p>
						</div>
					</div>
				</Item>
			</CardActionArea>
		</Card>
		<Card>
		<CardActionArea
			component={RouterLink}
			to={"/Contact Us"}
			>
			<Item className=' bg-white dark:text-gray-200 dark:bg-secondary-dark-bg bg-no-repeat mb-5'>
				<div className='text-center'>
					<div><Typography className='mb-8 p-3 rounded' style={{backgroundColor: currentColor}}>Get in Touch</Typography></div>
					<div>
						<p className='mt-3 text-center p-4'>
							Still need help? Don't hesitate to reach out if you need more guidance on managing your finances. We're here to help you make the most of your money
						</p>
					</div>
				</div>
			</Item>
		</CardActionArea>
	</Card>
	</>
	);
}

function TransactionsWidget () {
	const { currentColor, currentMode } = useStateContext()

	return (
		<div className="flex gap-10 flex-wrap justify-center">
			<div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl">
				<div className="flex justify-between items-center gap-2">
					<p className="text-xl font-semibold">Recent Transactions</p>
					<DropDown currentMode={currentMode} />
				</div>
				<div className=" mt-10 w-72 md:w-full">
					{recentTransactions.map((item) => (
						<div
							key={item.title}
							className="flex justify-between mt-4"
						>
							<div className="flex gap-4">
								<button
									type="button"
									style={{
										color: item.iconColor,
										backgroundColor: item.iconBg,
									}}
									className="text-2xl rounded-lg p-4 hover:drop-shadow-xl"
								>
									{item.icon}
								</button>
								<div>
									<p className="text-md font-semibold">{item.title}</p>
									<p className="text-sm text-gray-400">{item.desc}</p>
								</div>
							</div>
							<p className={`text-${item.pcColor}`}>{item.amount}</p>
						</div>
					))}
				</div>
				<div className="flex justify-between items-center mt-5 border-t-1 border-color">
					<div className="mt-3">
						<Button
							color="white"
							bgColor={currentColor}
							text="Add"
							borderRadius="10px"
						/>
					</div>
					<p className="text-gray-400 text-sm">36 Recent Transactions</p>
				</div>
			</div>
		</div>
	);
}

function DashboardLayout () {
	return (
		<Box sx={{ width: 1 }} className="mt-10">
            <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
				<Box gridColumn="span 4">
					<TransactionsWidget />
				</Box>
				<Box gridColumn="span 8">
					<WidgetLayout />
				</Box>
			</Box>
		</Box>
	);
}

function WidgetLayout () {
	return (
		<Box sx={{ width: 1 }} className="mt-10">
            <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
				<Box gridColumn="span 12">
					<SavingsChart />
				</Box>
				<Box gridColumn="span 6">
					<ChatbotWidget />
				</Box>
				<Box gridColumn="span 6" >
					<NeedHelpWidget />
				</Box>
			</Box>
		</Box>
	);
}


const Home = () => {
	const { currentColor, currentMode } = useStateContext()

	return (
		<>
		<div className="mt-12">
			<div className="flex flex-wrap lg:flex-nowrap justify-center ">
				<Card className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-36 rounded-3xl w-full lg:w-80 m-3 bg-no-repeat bg-cover bg-center">
					<CardActionArea
						component={RouterLink}
						to={"/transactions"}
					>
						<CardContent className="font-bold flex justify-between items-center ">
							<div>
								<p className="font-bold text-gray-400">Natwest</p>
								<p className="text-2xl">£78.04</p>
								<p className="text-sm text-gray-400  mt-1">Current Account</p>
							</div>
							<Avatar
								src={Natwest}
								sx={{ width: 54, height: 54 }}
							/>
						</CardContent>
					</CardActionArea>
				</Card>

				<Card className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-36 rounded-xl w-full lg:w-80 m-3 bg-no-repeat bg-cover bg-center ">
					<CardActionArea
						component={RouterLink}
						to={"/transactions"}
					>
						<CardContent className="font-bold flex justify-between items-center ">
							<div>
								<p className="font-bold text-gray-400">Natwest</p>
								<p className="text-2xl">£3,064.67</p>
								<p className="text-sm text-gray-400  mt-1">Savings</p>
							</div>
							<Avatar
								src={Natwest}
								sx={{ width: 54, height: 54 }}
							/>
						</CardContent>
					</CardActionArea>
				</Card>

				<Card className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-36 rounded-xl w-full lg:w-80 m-3 ">
					<CardActionArea
						component={RouterLink}
						to={"/transactions"}
					>
						<CardContent className="font-bold flex justify-between items-center ">
							<div>
								<p className="font-bold text-gray-400">Santander</p>
								<p className="text-2xl">-£64.38</p>
								<p className="text-sm text-gray-400  mt-1">Student Account</p>
							</div>
							<Avatar
								src={Santander}
								sx={{ width: 54, height: 54 }}
							/>
						</CardContent>
					</CardActionArea>
				</Card>
			</div>
			<div className="m-2 md:m-5 mt-24 md:p-5 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg bg-no-repeat bg-cover bg-center rounded-3xl shadow p-3 mb-5 bg-body-tertiary rounded" >
				<DashboardLayout />
			</div>
		</div>
		</>
	)
}

export default Home
