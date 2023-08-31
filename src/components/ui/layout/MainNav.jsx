import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import DarkModeToggle from './DarkModeToggle';
import FavoritesIcon from '../../features/favorites/FavoritesIcons';

const NavList = styled.ul`
	display: flex;
	align-items: center;
	gap: 0.8rem;
`;

const StyledNavLink = styled(NavLink)`
	&:link,
	&:visited {
		display: flex;
		align-items: center;
		gap: 1.2rem;
		color: var(--color-grey-400);
		font-size: 1.2rem;
		font-weight: 400;
		text-transform: uppercase;
		padding: 1.2rem;
		transition: all 0.3s;
		font-family: 'Roboto Slab', serif;
		font-weight: 700;
	}

	&:hover {
		color: var(--color-grey-900);
	}
	&:active,
	&.active:link,
	&.active:visited {
		color: var(--color-brand);
	}
`;

function MainNav() {
	return (
		<nav>
			<NavList>
				<li>
					<StyledNavLink to="/">
						<span>Home</span>
					</StyledNavLink>
				</li>
				<li>
					<StyledNavLink to="/reviews">
						<span>Reviews</span>
					</StyledNavLink>
				</li>
				<li>
					<StyledNavLink to="http://www.ugrap.de/forum/" target="_blank">
						<span>Community</span>
					</StyledNavLink>
				</li>
				<li>
					<NavLink to="/favorites">
						<FavoritesIcon />
					</NavLink>
				</li>
				<li>
					<DarkModeToggle />
				</li>
			</NavList>
		</nav>
	);
}

export default MainNav;
