import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { searchString } from '../../redux/searchStringTitleReducer';
import { useEffect } from 'react';

const SearchForm = () => {
	const [searchStringTitle, setSearchStringTitle] = useState('');
	const dispatch = useDispatch();
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(searchString(searchStringTitle));
	};

	useEffect(() => {
		dispatch(searchString(''));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<form className={styles.searchForm} onSubmit={handleSubmit}>
			<TextInput
				onChange={(e) => setSearchStringTitle(e.target.value)}
				placeholder='Search...'
			/>
			<Button>
				<span className='fa fa-search' />
			</Button>
		</form>
	);
};

export default SearchForm;