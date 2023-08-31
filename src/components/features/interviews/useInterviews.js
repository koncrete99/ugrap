import { useQuery } from '@tanstack/react-query';
import { getInterviews } from '../../../api/interviews';

export function useInterviews() {
	const {
		isLoading,
		data: interviews,
		error,
	} = useQuery({
		queryKey: ['interviews'],
		queryFn: getInterviews,
	});

	return { isLoading, error, interviews };
}
