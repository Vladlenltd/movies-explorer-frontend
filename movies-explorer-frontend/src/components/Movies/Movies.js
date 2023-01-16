import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';

function Movies({
	onSubmit,
	movies,
	isFailed,
	isNotFound,
	searchKeyword,
	savedMovies,
	onSave,
	onDelete,
	onCheckbox,
	checked,
	checkedSaveMovies,
	isLoading,
}) {
	return (
		<>
			<Header />
			<main className="movies">
				<SearchForm
					onSubmit={onSubmit}
					searchKeyword={searchKeyword}
					onCheckbox={onCheckbox}
					checked={checked}
					checkedSaveMovies={checkedSaveMovies}
				/>
				{isLoading && <Preloader />}
				<MoviesCardList
					movies={movies}
					isNotFound={isNotFound}
					isFailed={isFailed}
					searchKeyword={searchKeyword}
					savedMovies={savedMovies}
					onSave={onSave}
					onDelete={onDelete}
					onCheckbox={onCheckbox}
					checked={checked}
					checkedSaveMovies={checkedSaveMovies}
				/>
			</main>
			<Footer />
		</>
	);
}
export default Movies;
