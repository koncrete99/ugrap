import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import Tag from '../../ui/typography/Tag';
import Heading from '../../ui/typography/Heading';
import { convertStringToUrl } from '../../../utils/helpers';
import { format } from 'date-fns';

const StyledLink = styled(Link)`
	display: block;
	&:hover img {
		transform: scale(1.2);
		opacity: 0.5;
	}
`;

const Card = styled.div`
	background-color: var(--color-grey-50);
	border: 1px solid var(--color-grey-100);
	border-radius: 7px;
	overflow: hidden;
	height: 100%;
`;

const Figure = styled.figure`
	margin: 0 0 1rem;
	overflow: hidden;
	aspect-ratio: 1 / 1;
`;

const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	object-position: 50% 0;
	transition: all 1s;
`;

const Teaser = styled.div`
	padding: 0 1.2rem 1.2rem;
`;

const Meta = styled.div`
	display: grid;
	grid-template-columns: auto auto;
	justify-content: space-between;
	align-items: center;
	margin: 0 0 1rem;
	gap: 1rem;
`;

const StyledDate = styled.div`
	font-size: 1rem;
	color: var(--color-grey-300);
`;

function ArticleCard({ article }) {
	const { artist, date, id, image, cover, title } = article;
	const category = cover ? 'review' : 'interview';
	const slug = category === 'review' ? `${artist}-${title}` : artist;
	const url = convertStringToUrl(slug);

	return (
		<StyledLink to={`/${category}s/${id}/${url}`}>
			<Card>
				<Figure>
					<Image src={image || cover} />
				</Figure>
				<Teaser>
					<Meta>
						<Tag type="grey">{category}</Tag>
						<StyledDate>{format(new Date(date), 'dd. MMMM yyyy')}</StyledDate>
					</Meta>

					<Heading as="h2" color="grey">
						{artist}
					</Heading>
					{title && <Heading as="h3">{title}</Heading>}
				</Teaser>
			</Card>
		</StyledLink>
	);
}

export default ArticleCard;
