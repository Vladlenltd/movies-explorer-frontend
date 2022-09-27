import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import del from '../../images/remove.svg';
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
        <button
          className={`card__btn ${isLiked ? 'card__btn_liked' : ''}`}
          onClick={likeCard}
          type="button"
        >
          {location.pathname === '/saved-movies' ? <img className="card__like-icon" alt="Крестик" src={del} /> : ''}
        </button>
      </div>
      <p className="card__duration">{duration}</p>
    </li>
  );
}
export default MoviesCard;
