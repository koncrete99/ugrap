import { css, styled } from 'styled-components';

const Icon = styled.div`
	${(props) =>
		props.size === 'sm' &&
		css`
			font-size: 2rem;
		`}
	${(props) =>
		props.size === 'md' &&
		css`
			font-size: 4rem;
		`}
	${(props) =>
		props.size === 'lg' &&
		css`
			font-size: 6rem;
		`}
		${(props) =>
		props.size === 'xl' &&
		css`
			font-size: 12rem;
		`}
	display: inline-block;
`;

export default Icon;
