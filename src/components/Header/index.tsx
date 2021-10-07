import styles from './styles.module.scss';

import { MdLightMode, MdNightlight } from 'react-icons/md';

export function Header() {
  const isLight = true;
	return (
		<header className={styles.headerContainer}>
			<div className={styles.headerContent}>
				<h1>devfinder</h1>
				<button type="button">
        {isLight ? (
          <>
            LIGHT
					  <MdLightMode />
          </>
          ) : (
            <>
            DARK
					  <MdNightlight />
          </>
          )}
					
				</button>
			</div>
		</header>
	);
}
