import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import iconBtn from '../../images/find-btn.svg';

function SearchForm({
	onSubmit,
	searchKeyword,
	onCheckbox,
	checked,
	checkedSaveMovies,
}) {
	const [errorText, setErrorText] = useState('');
	const [keyword, setKeyword] = useState('');
	const [isFormValid, setIsFormValid] = useState(false);
	const location = useLocation();

	useEffect(() => {
		if (searchKeyword && location.pathname === '/movies') {
			setKeyword(searchKeyword);
		}
	}, []);

	const handleChange = (evt) => {
		setKeyword(evt.target.value);
		setIsFormValid(evt.target.closest('form').checkValidity());
	};

	const handleSubmit = (evt) => {
		evt.preventDefault();

		setIsFormValid(evt.target.closest('form').checkValidity());
		if (!isFormValid) {
			return setErrorText('Нужно ввести ключевое слово');
		}
		onSubmit(keyword);
	};
	return (
		<form className="search-form" name="movie-search-form"
			onSubmit={handleSubmit}
		>
			<div className="search-form__wrapper">
				<input
					className="search-form__input"
					placeholder="Фильм"
					required
					onChange={handleChange}
					value={keyword}
					minLength='1'
					maxLength='30'
				/>
				<button className="search-form__btn" type="submit">
					<img
						className="search-form__icon"
						src={iconBtn}
						alt="Поиск"
					/>
				</button>
				<FilterCheckbox
					onCheckbox={onCheckbox}
					checked={checked}
					checkedSaveMovies={checkedSaveMovies}
				/>
			</div>
		</form>
	);
}
export default SearchForm;
