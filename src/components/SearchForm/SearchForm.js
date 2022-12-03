import styles from './SearchForm.module.scss';

const SearchForm = () => {
	return (
		<form class={styles.searchForm}>
			<input class={styles.input} type="text" />
			<button class={styles.button}>Search</button>
		</form>
	);
};

export default SearchForm;