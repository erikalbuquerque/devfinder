import { useTheme } from '../../hooks/useTheme';

import { MdLightMode, MdNightlight } from 'react-icons/md';

import styles from './styles.module.scss';


export function Header() {
	const { toggleTheme, theme } = useTheme();

	function handleTheme () {
		toggleTheme();
	}

  const isLight = theme === "light" ? true : false;

	const dark = theme === "light" && styles.dark;

	return (
		<header className={styles.headerContainer}>
			<div className={ `${styles.headerContent} ${dark}`}>
				<h1>devfinder</h1>
				<button type="button" onClick={handleTheme}>
        {isLight ? (
          <>
            DARK
					  <MdNightlight />
          </>
          ) : (
            <>
						LIGHT
					  <MdLightMode />
          </>
          )}
					
				</button>
			</div>
		</header>
	);
}
