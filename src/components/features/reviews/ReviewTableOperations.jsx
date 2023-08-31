import SortBy from '../../ui/form/SortBy';
import Filter from '../../ui/form/Filter';
import TableOperations from '../../ui/table/TableOperations';

function ReviewTableOperations() {
	return (
		<TableOperations>
			<Filter
				filterField="type"
				options={[
					{ value: 'all', label: 'Alle' },
					{ value: 'Album', label: 'Album' },
					{ value: 'EP', label: 'EP' },
					{ value: 'Single', label: 'Single' },
				]}
			/>

			<SortBy
				options={[
					{ value: 'date-desc', label: 'Sortiere nach Datum (neu zuerst)' },
					{ value: 'date-asc', label: 'Sortiere nach Datum (alt zuerst)' },
					{
						value: 'rating-desc',
						label: 'Sortiere nach Rating (hoch zuerst)',
					},
					{
						value: 'rating-asc',
						label: 'Sortiere nach Rating (niedrig zuerst)',
					},

					{
						value: 'location-asc',
						label: 'Sortiere nach Location (A-Z)',
					},
					{
						value: 'location-desc',
						label: 'Sortiere nach Location (Z-A)',
					},
				]}
			/>
		</TableOperations>
	);
}

export default ReviewTableOperations;
