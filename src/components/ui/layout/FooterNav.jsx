import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

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

function FooterNav() {
	return (
		<nav>
			<NavList>
				<li>
					<StyledNavLink to="/about">
						<span>About</span>
					</StyledNavLink>
				</li>
				<li>
					<StyledNavLink to="/contact">
						<span>Contact</span>
					</StyledNavLink>
				</li>
				<li>
					<StyledNavLink to="/imprint">
						<span>Imprint</span>
					</StyledNavLink>
				</li>
				<li>
					<StyledNavLink to="/privacy">
						<span>Privacy</span>
					</StyledNavLink>
				</li>
			</NavList>
		</nav>
	);
}

export default FooterNav;
