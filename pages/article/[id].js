// import { useRouter } from 'next/router'
import Link from 'next/link'
import ArticleItem from '../../components/ArticleItem'
const url = process.env.API_URL

const Article = ({ article }) => {
	// const router = useRouter()
	// const { id } = router.query

	return (
		<>
			<ArticleItem article={article} />
			<Link href='/'>Go Back</Link>
		</>
	)
}

export const getServerSideProps = async context => {
	const res = await fetch(`${url}/api/articles/${context.params.id}`)
	const article = await res.json()
	return {
		props: {
			article,
		},
	}
}

export default Article
