import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCard from '../MoviesCard/MoviesCard';

function Movies() {
  return (
    <section className="movies">
      <SearchForm />
      <MoviesCard />
    </section>
  );
}
export default Movies;
