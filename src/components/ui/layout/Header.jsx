import { styled } from 'styled-components';
import Logo from './Logo';
import MainNav from './MainNav';
import ReviewSearch from '../../features/reviews/ReviewSearch';

const StyledHeader = styled.header`
	background-color: var(--color-grey-100);
	padding: 1rem 2rem;
	display: grid;
	grid-template-columns: auto auto auto;
	justify-content: space-between;
	align-items: center;
	box-shadow: var(--shadow-sm);
	position: fixed;
	z-index: 1;
	left: 0;
	right: 0;
	height: 6rem;
`;

function Header() {
	return (
		<StyledHeader>
			<Logo />
			<ReviewSearch />
			<MainNav />
		</StyledHeader>
	);
}

export default Header;
