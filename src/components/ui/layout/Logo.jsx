import { styled } from 'styled-components';
import { useDarkMode } from '../../../hooks/useDarkMode';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
	display: block;
`;

const Img = styled.img`
	width: 200px;
	height: auto;
	display: block;
`;

function Logo() {
	const { isDarkMode } = useDarkMode();

	const src = isDarkMode ? '/logo-w.png' : '/logo-b.png';

	return (
		<StyledLink to="/">
			<Img src={src} alt="Logo" />
		</StyledLink>
	);
}

export default Logo;
