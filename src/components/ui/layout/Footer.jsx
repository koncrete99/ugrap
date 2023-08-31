import { styled } from 'styled-components';
import Container from './Container';
import FooterNav from './FooterNav';
import FooterCopyright from './FooterCopyright';

const StyledFooter = styled.footer`
	background-color: var(--color-grey-50);
	padding: 3.2rem 0;
	font-size: 1.3rem;
	color: var(--color-grey-400);
`;

function Footer() {
	return (
		<StyledFooter>
			<Container direction="row" $justify="between">
				<FooterNav />
				<FooterCopyright />
			</Container>
		</StyledFooter>
	);
}

export default Footer;
