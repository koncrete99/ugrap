import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi2';
import ButtonIcon from '../button/ButtonIcon';
import { useDarkMode } from '../../../hooks/useDarkMode';
function DarkModeToggle() {
	const { isDarkMode, toggleDarkMode } = useDarkMode();
	return (
		<ButtonIcon onClick={toggleDarkMode}>
			{isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
		</ButtonIcon>
	);
}

export default DarkModeToggle;
