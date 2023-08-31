import { createContext, useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const DarkMode = createContext();

function DarkModeProvider({ children }) {
	const [isDarkMode, setIsDarkMode] = useLocalStorage(
		window.matchMedia('(prefers-color-scheme: dark)').matches,
		'isDarkMode'
	);

	useEffect(
		function () {
			if (isDarkMode) {
				document.documentElement.classList.add('dark-mode');
				document.documentElement.classList.remove('light-mode');
			} else {
				document.documentElement.classList.add('light-mode');
				document.documentElement.classList.remove('dark-mode');
			}
		},
		[isDarkMode]
	);

	function toggleDarkMode() {
		setIsDarkMode((isDark) => !isDark);
	}

	return (
		<DarkMode.Provider value={{ isDarkMode, toggleDarkMode }}>
			{children}
		</DarkMode.Provider>
	);
}

export { DarkMode, DarkModeProvider };
