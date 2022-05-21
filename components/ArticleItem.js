import Link from 'next/link'
import styles from '../styles/Article.module.css'

const ArticleItem = ({ article }) => {
	return (
		<Link href='/article/[id]' as={`/article/${article.id}`}>
			<div className={styles.card}>
				<h2>{article.title}</h2>
				<p>{article.body}</p>
			</div>
		</Link>
	)
}

export default ArticleItem
