import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import { getReviews } from '../../../api/reviews';
import { ITEMS_PAGE } from '../../../utils/constants';

export function useReviews() {
	const queryClient = useQueryClient();
	const [searchParams] = useSearchParams();

	// FILTER
	const filterValue = searchParams.get('type');
	const filter =
		!filterValue || filterValue === 'all'
			? null
			: { field: 'type', value: filterValue };

	// SORT
	const sortByRaw = searchParams.get('sortBy') || 'date-desc';
	const [field, direction] = sortByRaw.split('-');
	const sortBy = { field, direction };

	// PAGINATION
	const page = !searchParams.get('page') ? 1 : Number(searchParams.get('page'));

	// QUERY
	const {
		isLoading,
		data: { data: reviews, count } = {},
		error,
	} = useQuery({
		queryKey: ['reviews', filter, sortBy, page],
		queryFn: () => getReviews({ filter, sortBy, page }),
	});

	// PRE-FETCHING
	const pageCount = Math.ceil(count / ITEMS_PAGE);

	if (page < pageCount)
		queryClient.prefetchQuery({
			queryKey: ['reviews', filter, sortBy, page + 1],
			queryFn: () => getReviews({ filter, sortBy, page: page + 1 }),
		});

	if (page > 1)
		queryClient.prefetchQuery({
			queryKey: ['reviews', filter, sortBy, page - 1],
			queryFn: () => getReviews({ filter, sortBy, page: page - 1 }),
		});

	return { isLoading, error, reviews, count };
}
