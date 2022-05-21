import Header from '../components/Header'
import Articles from '../components/Articles'

export default function Home({ articles }) {
	return (
		<div>
			<Header
				pageTitle='Welcome'
				title='Welcome to'
				highlight='Our Application'
				desc='Ipsum dolor sit amet consectetur, adipisicing elit. Eum dolor beatae incidunt officia deleniti ullam cupiditate accusamus nam. Hic, eius lorem.'
			/>
			<Articles articles={articles} />
		</div>
	)
}

export const getStaticProps = async () => {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
	const articles = await res.json()

	return {
		props: {
			articles,
		},
	}
}
