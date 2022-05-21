import Head from 'next/head'
import headerStyles from '../styles/HEader.module.css'

const Header = ({ pageTitle, title, highlight, desc }) => {
	return (
		<>
			<Head>
				<title>{pageTitle}</title>
			</Head>
			<div className={headerStyles.heroSection}>
				<h1>
					{title} <span>{highlight}</span>
				</h1>
				<p>{desc}</p>
			</div>
		</>
	)
}

export default Header
