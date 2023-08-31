import styled from 'styled-components';

const Tag = styled.span`
	width: fit-content;
	text-transform: uppercase;
	font-size: 1rem;
	font-weight: 600;
	padding: 0.3rem 0.6rem;
	border-radius: 100px;
	color: var(--color-${(props) => props.type}-100);
	background-color: var(--color-${(props) => props.type}-900);
`;

export default Tag;
