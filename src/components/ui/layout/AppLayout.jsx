import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import Container from './Container';

const Layout = styled.div`
	min-height: 100vh;
	display: grid;
	grid-template-rows: auto 1fr auto;
`;

const Main = styled.main`
	padding: 12rem 2rem 12rem;
`;

function AppLayout() {
	return (
		<Layout>
			<Header />
			<Main>
				<Container>
					<Outlet />
				</Container>
			</Main>
			<Footer />
		</Layout>
	);
}

export default AppLayout;
