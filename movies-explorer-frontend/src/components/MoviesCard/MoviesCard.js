/* eslint-disable react/jsx-closing-tag-location */
import { useLocation } from 'react-router-dom';
import MoviesDeleteButton from '../MoviesDeleteButton/MoviesDeleteButton';
import MoviesLikeButton from '../MoviesLikeButton/MoviesLikeButton';
import MoviesLikeButtonActive from '../MoviesLikeButtonActive/MoviesLikeButtonActive';

function MoviesCard({
	name,
	duration,
	thumbnail,
	trailerLink,
	savedMovies,
	onSave,
	onDelete,
	movie,
}) {
	const location = useLocation();
	const isSaved = savedMovies.some((m) => m.movieId === movie.id);
	const hours = Math.trunc(duration / 60);
	const minutes = duration % 60;
	const handleSaveClick = () => {
		if (isSaved) {
			onDelete(savedMovies.filter((m) => m.movieId === movie.id)[0]);
		} else {
			onSave(movie);
		}
	};

	const handleDeleteMovie = () => onDelete(movie);

	return (
		<li className="card">
			<a href={trailerLink} target="_blank" rel="noreferrer">
				<img className="card__preview" src={thumbnail} alt={name} />
			</a>
			<div className="card__description">
				<h4 className="card__title">{name}</h4>
				{location.pathname === '/movies' && (
					<button
						className="card__btn"
						type="button"
						onClick={handleSaveClick}
					>
						{isSaved ? <MoviesLikeButtonActive /> : <MoviesLikeButton />}
					</button>
				)}
				{location.pathname === '/saved-movies' && (
					<button
						className='card__btn'
						type='button'
						onClick={handleDeleteMovie}>
						<MoviesDeleteButton />
					</button>
				)
				}
			</div>
			<p className="card__duration">{`${hours}ч ${minutes}м`}</p>
		</li>
	);
}
export default MoviesCard;
