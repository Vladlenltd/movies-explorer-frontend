import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';
import { showingMovies_5, showingMovies_8, showingMovies_12, addMovies_2, addMovies_3, breakPoint_1280, breakPoint_768, breakPoint_480 } from '../../utils/constants';

function MoviesCardList({
	movies,
	savedMovies,
	onSave,
	onDelete,
	checked,
	checkedSaveMovies,
	savedAllMovies,
}) {
	const [moviesToLoad, setMoviesToLoad] = useState(0);
	const [displayedMovies, setDisplayedMovies] = useState(0);
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const [moreBtn, setMoreBtn] = useState(false);
	const location = useLocation();
	const moviesLocation = location.pathname === '/movies';

	const searchShortMovies = (movies) => {
		const searchShortMovies = movies.slice(0);
		return searchShortMovies.filter((item) => item.duration <= 40);
	};

	let saveMoviesFilter = !checkedSaveMovies
		? searchShortMovies(savedMovies)
		: savedMovies;

	let moviesFilter = !checked ? searchShortMovies(movies) : movies;

	useEffect(() => {
		const handleWindowResize = () => {
			setWindowWidth(window.innerWidth);
		};

		if (moviesLocation) {
			if (windowWidth <= breakPoint_480) {
				setDisplayedMovies(showingMovies_5);
				setMoviesToLoad(addMovies_2);
			} else if (
				windowWidth <= breakPoint_768 &&
				windowWidth > breakPoint_480
			) {
				setDisplayedMovies(showingMovies_8);
				setMoviesToLoad(addMovies_2);
			} else if (
				windowWidth <= breakPoint_1280 &&
				windowWidth > breakPoint_768
			) {
				setDisplayedMovies(showingMovies_12);
				setMoviesToLoad(addMovies_3);
			} else if (windowWidth > breakPoint_1280) {
				setDisplayedMovies(showingMovies_12);
				setMoviesToLoad(addMovies_3);
			}
		}

		window.addEventListener('resize', handleWindowResize);
		return () => {
			window.removeEventListener('resize', handleWindowResize);
		};
	}, [windowWidth, moviesLocation]);

	useEffect(() => {
		if (moviesLocation) {
			moviesFilter.slice(0, displayedMovies);
			if (moviesFilter.length <= displayedMovies) {
				setMoreBtn(false);
			} else {
				setMoreBtn(true);
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [moviesFilter, displayedMovies])

	const showMoreMovies = () => {
		setDisplayedMovies((movies) => movies + moviesToLoad);
	};

	return (
		<section className="movies-list">
			{moviesLocation ? (
				<>
					<article className="cards-list">
						{moviesFilter.slice(0, displayedMovies).map((movie) => {
							return (
								<MoviesCard
									key={movie.id}
									name={movie.nameRU}
									duration={movie.duration}
									trailerLink={movie.trailerLink}
									thumbnail={`https://api.nomoreparties.co/${movie.image.formats.thumbnail.url}`}
									savedMovies={savedMovies}
									onSave={onSave}
									onDelete={onDelete}
									movie={movie}
									savedAllMovies={savedAllMovies}
								/>
							)
						}
						)}
					</article>
					{(moreBtn && moviesLocation)
						&& (
							<button
								type="button"
								className="movies-cards__button"
								onClick={showMoreMovies}
							>
								Ещё
							</button>
						)}
				</>
			) : (
				<>
					<article className='cards-list'>
						{saveMoviesFilter.map((movie) => {
							return (
								<MoviesCard
									key={movie._id}
									name={movie.nameRU}
									duration={movie.duration}
									trailerLink={movie.trailerLink}
									thumbnail={movie.thumbnail}
									savedMovies={savedMovies}
									onSave={onSave}
									onDelete={onDelete}
									movie={movie}
									savedAllMovies={savedAllMovies}
								/>
							)
						}
						)}
					</article>
				</>
			)
			}
		</section>
	);
}
export default MoviesCardList;
