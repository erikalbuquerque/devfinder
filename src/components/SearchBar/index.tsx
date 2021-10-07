import { useState } from 'react';
import { useUser } from '../../hooks/useUser';

import { FiSearch } from 'react-icons/fi';

import styles from './styles.module.scss';

export function SearchBar() {
	const { searchUser } = useUser()
	const [ username, setUsername ] = useState('');

	function handleSearch() {
		searchUser(username);
    setUsername('');
	}

	return (
		<div className={styles.searchBarContainer}>
			<div className={styles.searchBarContent}>
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
		</div>
	);
}
