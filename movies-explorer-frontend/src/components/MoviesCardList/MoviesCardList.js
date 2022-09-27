import React from 'react';
import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList() {
  const location = useLocation();

  return (
    <section className="movies-list">
      <article className={`cards-list ${location.pathname === '/saved-movies' ? 'cards-list_fit' : ''}`}>
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
      </article>
      <button
        type="button"
        className={`movies-cards__button ${location.pathname === '/saved-movies' ? 'movies-cards__hidden' : ''}`}
      >
        Ещё
      </button>
    </section>
  );
}
export default MoviesCardList;
