import Row from '../components/ui/layout/Row';
import Heading from '../components/ui/typography/Heading';
import ReviewTableOperations from '../components/features/reviews/ReviewTableOperations';
import ReviewTable from '../components/features/reviews/ReviewTable';
import Seo from '../components/ui/layout/Seo';

function Reviews() {
	return (
		<>
			<Seo title="Hip Hop Album, EP, Single Reviews" />
			<Row type="horizontal">
				<Heading as="h1">Reviews</Heading>
				<ReviewTableOperations />
			</Row>
			<ReviewTable />
		</>
	);
}

export default Reviews;
