import { convertStringToUrl } from '../../../utils/helpers';
import { format } from 'date-fns';
import Table from '../../ui/table/Table';

function ReviewRow({
	review: {
		id,
		artist,
		title,
		release,
		label,
		rating,
		location,
		date,
		cover,
		author: { name: authorName },
	},
}) {
	const url = convertStringToUrl(`${artist}-${title}`);
	return (
		<Table.Link to={`/reviews/${id}/${url}`}>
			<Table.Row>
				<Table.Cell>
					<img src={cover} alt={`${artist} - ${title}`} />
				</Table.Cell>
				<Table.Cell>
					{artist}
					<span>{title}</span>
					<i>
						{release} {label}
					</i>
				</Table.Cell>
				<Table.Cell>{location}</Table.Cell>
				<Table.Cell>
					{authorName}
					<i>{format(new Date(date), 'dd. MMMM yyyy')}</i>
				</Table.Cell>
				<Table.Cell $align="right">
					<span>{rating}</span>
				</Table.Cell>
			</Table.Row>
		</Table.Link>
	);
}

export default ReviewRow;
