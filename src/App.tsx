import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { CardProfile } from './components/CardProfile';

import styles from './styles/home.module.scss';

export function App() {
	return (
		<div className={styles.homeContainer}>
			<div className={styles.homeContent}>
				<Header />
				<SearchBar />
				<CardProfile />
			</div>
		</div>
	);
}
