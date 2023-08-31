import styled from 'styled-components';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
import { useSearchParams } from 'react-router-dom';
import { ITEMS_PAGE } from '../../../utils/constants';

const StyledPagination = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const P = styled.p`
	font-size: 1.4rem;
	margin-left: 0.8rem;

	& span {
		font-weight: 600;
	}
`;

const Buttons = styled.div`
	display: flex;
	gap: 0.6rem;
`;

const PaginationButton = styled.button`
	background-color: ${(props) =>
		props.active ? ' var(--color-brand)' : 'var(--color-grey-50)'};
	color: ${(props) =>
		props.active ? ' var(--color-brand-deepdark)' : 'inherit'};
	border: none;
	border-radius: var(--border-radius-sm);
	font-weight: 500;
	font-size: 1.4rem;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.4rem;
	padding: 0.6rem 1.2rem;
	transition: all 0.3s;

	&:has(span:last-child) {
		padding-left: 0.4rem;
	}

	&:has(span:first-child) {
		padding-right: 0.4rem;
	}

	& svg {
		height: 1.8rem;
		width: 1.8rem;
	}

	&:hover:not(:disabled) {
		background-color: var(--color-brand-light);
		color: var(--color-brand-deepdark);
	}
`;

function Pagination({ count }) {
	const [searchParams, setSearchParams] = useSearchParams();
	const currentPage = !searchParams.get('page')
		? 1
		: Number(searchParams.get('page'));

	const pageCount = Math.ceil(count / ITEMS_PAGE);

	function nextPage() {
		const next = currentPage === pageCount ? currentPage : currentPage + 1;

		searchParams.set('page', next);
		setSearchParams(searchParams);
	}

	function prevPage() {
		const prev = currentPage === 1 ? currentPage : currentPage - 1;

		searchParams.set('page', prev);
		setSearchParams(searchParams);
	}

	if (pageCount <= 1) return null;

	return (
		<StyledPagination>
			<P>
				<span>{(currentPage - 1) * ITEMS_PAGE + 1}</span> bis{' '}
				<span>
					{currentPage === pageCount ? count : currentPage * ITEMS_PAGE}
				</span>{' '}
				von <span>{count}</span> Einträgen
			</P>

			<Buttons>
				<PaginationButton onClick={prevPage} disabled={currentPage === 1}>
					<HiChevronLeft /> <span>Zurück</span>
				</PaginationButton>

				<PaginationButton
					onClick={nextPage}
					disabled={currentPage === pageCount}
				>
					<span>Weiter</span>
					<HiChevronRight />
				</PaginationButton>
			</Buttons>
		</StyledPagination>
	);
}

export default Pagination;
