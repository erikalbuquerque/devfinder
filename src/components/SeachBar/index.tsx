import { FiSearch } from 'react-icons/fi';

import styles from './styles.module.scss';

export function SearchBar () {
  return (
    <div className={styles.searchBarContainer}>
      <div className={styles.searchBarContent}>
        <FiSearch />
        <input type="text" placeholder="Search Github username..." />
        <button type="button">Search</button>
      </div>
    </div>
  )
}