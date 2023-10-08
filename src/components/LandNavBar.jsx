import { NavLink } from "./NavLink"
import { Link } from "@mui/material"

import { Avatar } from "@mui/material"

import { Button } from "../components"
import Logo from "../data/IconTransparent.png"

export function LandNavBar() {
	return (
		<header
			className="py-5 bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-10 border 
        "
		>
			<div>
				<nav className=" z-50 flex justify-between  items-center">
					<div className="flex justify-center items-center ml-8">
						<Link
							href="#"
							className=""
						>
							<Avatar
								alt="Logo"
								src={Logo}
							/>
						</Link>
					</div>
					<div>
						<div className=" flex md:gap-x-8 justify-between font-semibold items-center text-slate-800">
							<NavLink href="#features">Features</NavLink>
							<NavLink href="#testimonials">Testimonials</NavLink>
						</div>
					</div>
					<div className="flex items-center justify-center font-semibold text-white bg-blue-600 rounded-xl mr-8">
						<Link
							href="#"
							color="inherit"
							underline="none"
							className="py-2 px-4 rounded-xl bg-blue-500 text-white hover:bg-blue-700 transition duration-300 ease-in-out "
						>
							Get Started
						</Link>
					</div>
				</nav>
			</div>
		</header>
	)
}
