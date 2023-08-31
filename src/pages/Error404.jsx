import { useNavigate } from 'react-router-dom';
import { HiChevronLeft } from 'react-icons/hi2';
import Heading from '../components/ui/typography/Heading';
import Button from '../components/ui/button/Button';

function Error404() {
	const navigate = useNavigate();

	return (
		<>
			<Heading as="h1">
				<span>404</span>
				Seite nicht gefunden
			</Heading>
			<Button onClick={() => navigate(-1)}>
				<HiChevronLeft /> Zurück
			</Button>
		</>
	);
}

export default Error404;
