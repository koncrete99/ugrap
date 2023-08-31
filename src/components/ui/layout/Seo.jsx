import { Helmet } from 'react-helmet-async';
import { SITE_TITLE, SITE_DESC, SITE_NAME } from '../../../utils/constants';
function Seo({
	title = SITE_TITLE,
	description = SITE_DESC,
	name = SITE_NAME,
	type = 'website',
}) {
	return (
		<Helmet>
			<title>
				{title} | {SITE_NAME}
			</title>
			<meta name="description" content={description} />
			<meta property="og:type" content={type} />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta name="twitter:creator" content={name} />
			<meta name="twitter:card" content={type} />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
		</Helmet>
	);
}

export default Seo;
