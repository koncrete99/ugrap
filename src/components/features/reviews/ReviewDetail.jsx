import { useReview } from './useReview';
import Spinner from '../../ui/layout/Spinner';
import { styled } from 'styled-components';
import ReviewAside from './ReviewAside';
import ReviewArticle from './ReviewArticle';

const StyledReviewDetail = styled.div`
	display: grid;
	grid-template-columns: 2fr 1fr;
	gap: 2.4rem;
`;

function ReviewDetail() {
	const { review, isLoading } = useReview();

	if (isLoading) return <Spinner />;

	return (
		<StyledReviewDetail>
			<ReviewArticle review={review} />
			<ReviewAside review={review} />
		</StyledReviewDetail>
	);
}

export default ReviewDetail;
