import { useContext } from 'react';
import { DarkMode } from '../contexts/DarkMode';

function useDarkMode() {
	const context = useContext(DarkMode);
	if (context === undefined)
		throw new Error('DarkMode was used outside of DarkModeProvider');
	return context;
}

export { useDarkMode };
