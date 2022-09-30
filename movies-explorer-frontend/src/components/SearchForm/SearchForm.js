import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import iconBtn from '../../images/find-btn.svg';

function SearchForm() {
	return (
		<form className="search-form" name="movie-search-form">
			<div className="search-form__wrapper">
				<input
					className="search-form__input"
					placeholder="Фильм"
					required
				/>
				<button className="search-form__btn" type="submit">
					<img
						className="search-form__icon"
						src={iconBtn}
						alt="Поиск"
					/>
				</button>
				<FilterCheckbox />
			</div>
		</form>
	);
}
export default SearchForm;
