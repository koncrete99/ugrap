import Heading from '../../ui/typography/Heading';
import Empty from '../../ui/layout/Empty';
import Spinner from '../../ui/layout/Spinner';
import { useInterviews } from '../interviews/useInterviews';
import { useReviews } from '../reviews/useReviews';
import { styled } from 'styled-components';
import ArticleCard from './ArticleCard';

const ArticlesList = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	gap: 2.4rem;
	@media (max-width: 767px) {
		grid-template-columns: 1fr 1fr;
	}
`;

function Articles() {
	const { isLoading, reviews } = useReviews();
	const { isLoading: isLoading2, interviews } = useInterviews();
	if (isLoading || isLoading2) return <Spinner />;
	const articles = [...reviews, ...interviews]
		.sort((a, b) => (a.date < b.date ? 1 : -1))
		.slice(0, 20);
	if (!articles.length) return <Empty resourceName="Artikel" />;
	return (
		<>
			<Heading as="h1">Neue Artikel</Heading>
			<ArticlesList>
				{articles.map((article) => (
					<ArticleCard article={article} key={article.id} />
				))}
			</ArticlesList>
		</>
	);
}

export default Articles;
