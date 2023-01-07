/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useLocation } from 'react-router-dom';


function FilterCheckbox({ onCheckbox, checked, checkedSaveMovies }) {
	const location = useLocation();
	const handleCheckbox = (e) => {
		onCheckbox(e.target.checked);
	};
	return (
		<div className="checkbox">
			<label htmlFor="short-movie" className="checkbox__label">
				Короткометражки
			</label>
			{location.pathname === '/movies' ? (
				<input
					type="checkbox"
					className="checkbox__input"
					id="short-movie"
					defaultValue='yes'
					onChange={handleCheckbox}
				/>
			) : (
				<input
					type="checkbox"
					className="checkbox__input"
					id="short-movie"
					defaultValue='yes'
					onChange={handleCheckbox}
				/>
			)
			}
		</div>
	);
}

export default FilterCheckbox;
