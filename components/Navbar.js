import Link from 'next/link'
import navbarStyles from '../styles/Navbar.module.css'

const Navbar = () => {
	return (
		<div className={navbarStyles.navbar}>
			<ul>
				<li>
					<Link href='/'>Home</Link>
				</li>
				<li>
					<Link href='/about'>About</Link>
				</li>
			</ul>
		</div>
	)
}

export default Navbar
