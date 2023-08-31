import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';
import GlobalStyles from './styles/GlobalStyles';
import AppLayout from './components/ui/layout/AppLayout';
import Home from './pages/Home';
import Reviews from './pages/Reviews';
import Review from './pages/Review';
import About from './pages/About';
import Contact from './pages/Contact';
import Imprint from './pages/Imprint';
import Privacy from './pages/Privacy';
import Error404 from './pages/Error404';
import Seo from './components/ui/layout/Seo';
import { DarkModeProvider } from './contexts/DarkMode';
import Favorites from './pages/Favorites';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 0,
		},
	},
});

function App() {
	return (
		<DarkModeProvider>
			<HelmetProvider>
				<QueryClientProvider client={queryClient}>
					<GlobalStyles />
					<Seo />
					<BrowserRouter>
						<Routes>
							<Route element={<AppLayout />}>
								<Route path="/" element={<Home />} />
								<Route path="reviews" element={<Reviews />} />
								<Route path="reviews/:id/:slug" element={<Review />} />
								<Route path="favorites" element={<Favorites />} />
								<Route path="about" element={<About />} />
								<Route path="contact" element={<Contact />} />
								<Route path="imprint" element={<Imprint />} />
								<Route path="privacy" element={<Privacy />} />
								<Route path="*" element={<Error404 />} />
							</Route>
						</Routes>
					</BrowserRouter>
				</QueryClientProvider>
			</HelmetProvider>
		</DarkModeProvider>
	);
}

export default App;
