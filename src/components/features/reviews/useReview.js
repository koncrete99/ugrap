import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getReview } from '../../../api/reviews';

export function useReview() {
	const { id } = useParams();

	const {
		isLoading,
		data: review,
		error,
	} = useQuery({
		queryKey: ['review', id],
		queryFn: () => getReview(id),
		retry: false,
	});

	return { isLoading, error, review };
}
