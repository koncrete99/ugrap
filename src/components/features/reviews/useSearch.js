import { useQuery } from '@tanstack/react-query';
import { searchReviews } from '../../../api/reviews';

export function useSearch(searchPhrase) {
	const {
		isLoading,
		data: reviews,
		error,
	} = useQuery({
		queryKey: ['reviews', searchPhrase],
		queryFn: () => searchReviews(searchPhrase),
		retry: false,
	});

	return { isLoading, error, reviews };
}
