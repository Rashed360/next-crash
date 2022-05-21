import layoutStyles from '../styles/Layout.module.css'
import Navbar from './Navbar'

const Layout = ({ children }) => {
	return (
		<>
			<Navbar />
			<div className={layoutStyles.container}>
				<main className={layoutStyles.main}>{children}</main>
			</div>
		</>
	)
}

export default Layout
