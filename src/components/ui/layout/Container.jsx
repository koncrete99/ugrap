import { css, styled } from 'styled-components';

const Container = styled.div`
	max-width: 120rem;
	margin: 0 auto;
	display: flex;
	gap: 3.2rem;
	${(props) =>
		props.direction === 'column' &&
		css`
			flex-direction: column;
		`}
	${(props) =>
		props.direction === 'row' &&
		css`
			flex-direction: row;
		`}
  ${(props) =>
		props.$justify === 'start' &&
		css`
			justify-content: start;
		`}  
  ${(props) =>
		props.$justify === 'between' &&
		css`
			justify-content: space-between;
		`}
`;

Container.defaultProps = {
	direction: 'column',
	$justify: 'start',
};

export default Container;
