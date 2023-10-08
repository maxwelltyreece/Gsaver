import { Link } from "@mui/material"

export function NavLink({ href, children }) {
	return (
		<Link
			href={href}
			className="inline-block rounded-lg py-1 px-2 text-sm text-small hover:bg-blue-600/10 "
			underline="none"
		>
			{children}
		</Link>
	)
}
