import { Parser } from 'html-to-react';
import { format } from 'date-fns';
import Heading from '../../ui/typography/Heading';
import Seo from '../../ui/layout/Seo';
import { styled } from 'styled-components';

const MetaInfo = styled.div`
	color: var(--color-grey-300);
	display: flex;
	justify-content: space-between;
	font-style: italic;
	border: 1px solid var(--color-grey-100);
	padding: 1.2rem;
	font-size: 1.3rem;
	border-radius: 7px;
`;

const Text = styled.article`
	padding: 2.4rem 0;
	p:not(:last-of-type) {
		margin-bottom: 3rem;
	}
`;

function ReviewArticle({ review }) {
	const {
		artist,
		title,
		date,
		text,
		author: { name: authorName },
	} = review;

	return (
		<div>
			<Seo title={`${artist} - ${title}`} type="article" />
			<Heading as="h1">
				<span>{artist}</span>
				{title}
			</Heading>
			<Text>{Parser().parse(text)}</Text>
			<MetaInfo>
				<p>Autor: {authorName}</p>
				<p>{format(new Date(date), 'dd. MMMM yyyy')}</p>
			</MetaInfo>
		</div>
	);
}

export default ReviewArticle;
