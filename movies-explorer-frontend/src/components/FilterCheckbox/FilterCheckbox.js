/* eslint-disable jsx-a11y/label-has-associated-control */
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
					checked={!checked}
				/>
			) : (
				<input
					type="checkbox"
					className="checkbox__input"
					id="short-movie"
					defaultValue='yes'
					onChange={handleCheckbox}
					checked={!checkedSaveMovies}
				/>
			)
			}
		</div>
	);
}

export default FilterCheckbox;
