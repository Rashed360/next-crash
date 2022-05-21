import Header from '../components/Header'
import Articles from '../components/Articles'
import Meta from '../components/Meta'
const url = process.env.API_URL

export default function Home({ articles }) {
	return (
		<div>
			<Meta title='Home' />
			<Header
				title='Welcome to'
				highlight='Our Application'
				desc='Ipsum dolor sit amet consectetur, adipisicing elit. Eum dolor beatae incidunt officia deleniti ullam cupiditate accusamus nam. Hic, eius lorem.'
			/>
			<Articles articles={articles} />
		</div>
	)
}

export const getStaticProps = async () => {
	const res = await fetch(`${url}/api/articles/`)
	const articles = await res.json()

	return {
		props: {
			articles,
		},
	}
}
