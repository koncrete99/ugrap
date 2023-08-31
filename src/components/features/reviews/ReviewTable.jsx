import ReviewRow from './ReviewRow';
import Table from '../../ui/table/Table';
import Empty from '../../ui/layout/Empty';
import { useReviews } from './useReviews';
import Spinner from '../../ui/layout/Spinner';
import Pagination from '../../ui/layout/Pagination';

function ReviewsTable() {
	const { reviews, isLoading, count } = useReviews();

	if (isLoading) return <Spinner />;

	if (!reviews.length) return <Empty resourceName="Reviews" />;

	return (
		<Table $columns="0.3fr 2.5fr 0.5fr 0.5fr 0.3fr">
			<Table.Header>
				<Table.Cell></Table.Cell>
				<Table.Cell>Release</Table.Cell>
				<Table.Cell>Location</Table.Cell>
				<Table.Cell>Author</Table.Cell>
				<Table.Cell $align="right">Rating</Table.Cell>
			</Table.Header>

			<Table.Body
				data={reviews}
				render={(review) => <ReviewRow key={review.id} review={review} />}
			/>

			<Table.Footer>
				<Pagination count={count} />
			</Table.Footer>
		</Table>
	);
}

export default ReviewsTable;
