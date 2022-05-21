import Head from 'next/head'
const Meta = ({ title, desc, keys }) => {
	return (
		<Head>
			<meta name='viewport' content='width=device-width,initial-scale=1' />
			<meta name='keywords' content={keys} />
			<meta name='description' content={desc} />
			<link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />
			<title>{title}</title>
		</Head>
	)
}

Meta.defaultProps = {
    title: 'Next App',
    keys: 'web dev, programing',
    desc: 'learn about nextJS features'
}

export default Meta
