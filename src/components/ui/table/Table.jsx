import { createContext, useContext } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const StyledTable = styled.div`
	border: 1px solid var(--color-grey-100);
	font-size: 1.4rem;
	background-color: var(--color-grey-50);
	border-radius: 7px;
	overflow: hidden;
`;

const CommonRow = styled.div`
	display: grid;
	grid-template-columns: ${(props) => props.$columns};
	column-gap: 2.4rem;
	align-items: center;
	transition: none;
`;

const StyledHeader = styled(CommonRow)`
	padding: 1.6rem 2.4rem;
	background-color: var(--color-grey-100);
	border-bottom: 1px solid var(--color-grey-100);
	text-transform: uppercase;
	letter-spacing: 0.4px;
	font-weight: 700;
	font-family: 'Roboto Slab', serif;
	font-size: 1rem;
	color: var(--color-grey-300);
`;

const StyledRow = styled(CommonRow)`
	padding: 1.2rem 2.4rem;
`;

const StyledBody = styled.section`
	margin: 0.4rem 0;
`;

const Footer = styled.footer`
	background-color: var(--color-grey-100);
	display: flex;
	justify-content: center;
	padding: 1.2rem;
	&:not(:has(*)) {
		display: none;
	}
`;

const Cell = styled.div`
	${(props) =>
		props.$align === 'right' &&
		css`
			text-align: right;
		`}
	display: flex;
	flex-direction: column;
	gap: 0.2rem;
	line-height: 1.2;
	color: var(--color-grey-500);
	& span {
		font-family: 'Roboto Slab', serif;
		font-weight: 400;
		font-size: 2rem;
		color: var(--color-grey-700);
	}
	& i {
		display: block;
		font-size: 1rem;
		font-style: normal;
		margin-top: 0.6rem;
	}
`;

const Empty = styled.p`
	font-size: 1.6rem;
	font-weight: 500;
	text-align: center;
	margin: 2.4rem;
`;

const StyledLink = styled(Link)`
	display: block;
	&:hover {
		background-color: var(--color-grey-200);
		color: var(--color-grey-700);
	}

	&:not(:last-child) {
		border-bottom: 1px solid var(--color-grey-100);
	}
`;

const TableContext = createContext();

function Table({ $columns, children }) {
	return (
		<TableContext.Provider value={{ $columns }}>
			<StyledTable role="table">{children}</StyledTable>
		</TableContext.Provider>
	);
}

function Header({ children }) {
	const { $columns } = useContext(TableContext);
	return (
		<StyledHeader role="row" $columns={$columns} as="header">
			{children}
		</StyledHeader>
	);
}
function Row({ children }) {
	const { $columns } = useContext(TableContext);
	return (
		<StyledRow role="row" $columns={$columns}>
			{children}
		</StyledRow>
	);
}

function Body({ data, render }) {
	if (!data.length) return <Empty>Daten konnten nicht geladen werden.</Empty>;

	return <StyledBody>{data.map(render)}</StyledBody>;
}

Table.Header = Header;
Table.Body = Body;
Table.Row = Row;
Table.Footer = Footer;
Table.Cell = Cell;
Table.Link = StyledLink;

export default Table;
