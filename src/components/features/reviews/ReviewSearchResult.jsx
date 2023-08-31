import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { convertStringToUrl } from '../../../utils/helpers';

const StyledLink = styled(Link)`
	padding: 0.5rem 1rem;
	display: block;
	&:hover {
		background-color: var(--color-grey-100);
	}
`;

function ReviewSearchResult({ review, onClick }) {
	const { artist, title } = review;
	const url = convertStringToUrl(`${artist}-${title}`);

	return (
		<li>
			<StyledLink onClick={onClick} to={`/reviews/${review.id}/${url}`}>
				{review.artist} - {review.title}
			</StyledLink>
		</li>
	);
}

export default ReviewSearchResult;
