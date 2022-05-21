import Head from 'next/head'
import homeStyles from '../styles/Home.module.css'

const About = () => {
	return (
		<>
			<Head>
				<title>About</title>
			</Head>
			<div className={homeStyles.heroSection}>
				<h1>
					About <span>Us</span>
				</h1>
				<p>
					Ipsum dolor sit amet consectetur adipisicing elit. Officiis architecto alias dicta culpa,
					natus voluptatem pariatur aliquid temporibus obcaecati aperiam atque dolorem deserunt id quae?
				</p>
			</div>
		</>
	)
}

export default About
