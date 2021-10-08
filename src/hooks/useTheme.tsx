import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

interface ThemeProviderProps {
	children: ReactNode;
}

interface ThemeContextProps {
	theme: string;
	toggleTheme: () => void;
}

const ThemeContext = createContext({} as ThemeContextProps);

export function ThemeProvider({ children }: ThemeProviderProps) {
	const [ theme, setTheme ] = useState('light');

	function toggleTheme() {
		if (theme === 'light') {
			setTheme('dark');
		} else {
			setTheme('light');
		}
	}

	useEffect(() => {
		const localTheme = localStorage.getItem('globaltheme');

		if (!!localTheme) {
			setTheme(localTheme);
		}
	}, []);

	useEffect(
		() => {
			localStorage.setItem('globaltheme', theme);
			if (theme === 'light') {
				document.body.style.background = 'var(--background-light)';
			} else {
				document.body.style.background = 'var(--background-dark)';
			}
		},
		[ theme ]
	);

	return (
		<ThemeContext.Provider
			value={{
				theme,
				toggleTheme
			}}
		>
			{children}
		</ThemeContext.Provider>
	);
}

export function useTheme() {
	const context = useContext(ThemeContext);
	return context;
}
