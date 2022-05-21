import headerStyles from '../styles/HEader.module.css'

const Header = ({ title, highlight, desc }) => {
	return (
		<>
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
