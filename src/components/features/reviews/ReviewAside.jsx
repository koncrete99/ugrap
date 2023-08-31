import { Parser } from 'html-to-react';
import { styled } from 'styled-components';
import Heading from '../../ui/typography/Heading';

const Aside = styled.aside`
	background-color: var(--color-grey-50);
	border: 1px solid var(--color-grey-100);
	padding: 2.4rem;
	font-size: 1.3rem;
	border-radius: 7px;

	> * {
		&:not(:first-child) {
			padding: 2.4rem 0;
		}
		&:not(:last-child) {
			border-bottom: 1px solid var(--color-grey-100);
		}
		&:last-child {
			padding-bottom: 0;
		}
	}
`;

const Cover = styled.img`
	border: 1px solid var(--color-grey-100);
	display: block;
`;

const Info = styled.div``;

const Tracklist = styled.div`
	strong {
		font-weight: 600;
	}
`;

const Rating = styled.div`
	font-size: 3rem;
`;

function ReviewAside({ review }) {
	const { cover, label, release, tracklist, rating } = review;
	return (
		<Aside>
			<Cover src={cover} />

			<Info>
				<Heading as="h2">Info</Heading>
				<strong>Label:</strong> {label}
				<br />
				<strong>Release:</strong> {release}
			</Info>
			<Tracklist>
				<Heading as="h2">Tracklist</Heading>
				{Parser().parse(tracklist)}
			</Tracklist>
			<Rating>
				<Heading as="h2">Rating</Heading>
				<span>{rating}</span>/10
			</Rating>
		</Aside>
	);
}

export default ReviewAside;
