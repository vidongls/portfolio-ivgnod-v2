import Head from 'next/head';

const MetaTags = ({ title, description, image, url }) => {
	return (
		<Head>
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={image} />
			<meta property="og:url" content={url} />
			<meta property="og:type" content="website" />
		</Head>
	);
};

export default MetaTags;
