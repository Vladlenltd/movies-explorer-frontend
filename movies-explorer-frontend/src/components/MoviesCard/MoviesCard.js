/* eslint-disable react/jsx-closing-tag-location */
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import MoviesDeleteButton from '../MoviesDeleteButton/MoviesDeleteButton';
import MoviesLikeButton from '../MoviesLikeButton/MoviesLikeButton';
import MoviesLikeButtonActive from '../MoviesLikeButtonActive/MoviesLikeButtonActive';
import preview from '../../images/preview.png';

function MoviesCard() {
	const title = '33 слова о дизайне';
	const duration = '1ч 47м';
	const [isLiked, setIsLiked] = useState(false);
	const location = useLocation();

	function likeCard() {
		setIsLiked(!isLiked);
	}

	return (
		<li className="card">
			<img className="card__preview" src={preview} alt="превью" />
			<div className="card__description">
				<h4 className="card__title">{title}</h4>
				{location.pathname === '/movies' && (
					<button
						className="card__btn"
						type="button"
						onClick={likeCard}
					>
						{isLiked ? <MoviesLikeButtonActive /> : <MoviesLikeButton /> }
					</button>
				)}
				{location.pathname === '/saved-movies' && (
					<button
						className="card__btn"
						type="button"
						onClick={likeCard}
					>
						<MoviesDeleteButton />
					</button>
				)}
			</div>
			<p className="card__duration">{duration}</p>
		</li>
	);
}
export default MoviesCard;
