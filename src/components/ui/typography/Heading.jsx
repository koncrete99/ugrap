import styled, { css } from 'styled-components';

const Heading = styled.h1`
	font-family: 'Roboto Slab', serif;
	color: var(--color-brand);
	line-height: 1.4;
	font-weight: 400;
	${(props) =>
		props.as === 'h1' &&
		css`
			font-size: 3rem;
		`}

	${(props) =>
		props.as === 'h2' &&
		css`
			font-size: 2rem;
		`}
    
    ${(props) =>
		props.as === 'h3' &&
		css`
			font-size: 1.6rem;
			font-family: 'Roboto', sans-serif;
			color: var(--color-grey-300);
		`}

    ${(props) =>
		props.as === 'h4' &&
		css`
			font-size: 1.3rem;
		`}
		${(props) =>
		props.color === 'grey' &&
		css`
			color: var(--color-grey-700);
		`}
	& span {
		display: block;
		font-family: 'Roboto', sans-serif;
		font-size: 0.75em;
		color: var(--color-grey-300);
	}
`;

export default Heading;
