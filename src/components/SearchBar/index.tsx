import { useState } from 'react';
import { useTheme } from '../../hooks/useTheme';
import { useUser } from '../../hooks/useUser';

import toast, { Toaster } from 'react-hot-toast';

import { FiSearch } from 'react-icons/fi';

import styles from './styles.module.scss';

export function SearchBar() {
	const { theme } = useTheme();
	const { searchUser } = useUser();
	const [ username, setUsername ] = useState('');

	function handleSearch() {
		if (!username) {
			toast('Fill in the USERNAME field correctly!');
			return;
		}
		searchUser(username);
		setUsername('');
	}

	const dark = theme === "light" && styles.dark;

	return (
		<div className={styles.searchBarContainer}>
			<div className={`${styles.searchBarContent} ${dark}`}>
				<FiSearch />
				<input
					type="text"
					placeholder="Search Github username..."
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
				<button type="button" onClick={handleSearch}>
					Search
				</button>
			</div>
			<Toaster
				position="top-right"
				toastOptions={{
					style: {
						background: "#ff6161",
						color: "#fff",
					}
				}}
			/>
		</div>
	);
}
