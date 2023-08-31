import { useEffect, useRef, useState } from 'react';
import { useSearch } from './useSearch';
import Input from '../../ui/form/Input';
import Spinner from '../../ui/layout/Spinner';
import { styled } from 'styled-components';
import ReviewSearchResult from './ReviewSearchResult';
import { useOutsideClick } from '../../../hooks/useOutsideClick';

const Search = styled.div`
	position: relative;
`;

const Results = styled.ul`
	position: absolute;
	font-size: 1.4rem;
	background-color: var(--color-grey-200);
	border-radius: 7px;
	padding: 1rem 0;
	top: 100%;
	z-index: 1;
	width: 30rem;
`;

function ReviewSearch() {
	const [search, setSearch] = useState('');
	const [show, setShow] = useState(true);
	const { reviews, isLoading } = useSearch(search);
	const ref = useRef();

	useOutsideClick(ref, () => {
		if (show) setShow(false);
	});

	useEffect(
		function () {
			if (reviews && reviews.length > 0) setShow(true);
		},
		[reviews]
	);

	function handleClick() {
		setSearch('');
		setShow(false);
	}

	return (
		<Search>
			<Input
				placeholder="Review Suche..."
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
			{reviews && reviews.length > 0 && show && (
				<Results ref={ref}>
					{isLoading && <Spinner />}
					{reviews.map((review) => (
						<ReviewSearchResult
							key={review.id}
							review={review}
							onClick={handleClick}
						/>
					))}
				</Results>
			)}
		</Search>
	);
}

export default ReviewSearch;
