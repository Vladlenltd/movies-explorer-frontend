import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';

function SavedMovies({
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
	allSavedMovies,
	isLoading,
}) {
	return (
		<>
			<Header />
			<main className="saved-movies">
				<SearchForm
					onSubmit={onSubmit}
					searchKeyword={searchKeyword}
					onCheckbox={onCheckbox}
					checked={checked}
					checkedSaveMovies={checkedSaveMovies}
				/>
				{isLoading && <Preloader />}
				<MoviesCardList
					checked={checked}
					checkedSaveMovies={checkedSaveMovies}
					movies={movies}
					isNotFound={isNotFound}
					isFailed={isFailed}
					savedMovies={savedMovies}
					onSave={onSave}
					onDelete={onDelete}
					allSavedMovies={allSavedMovies}
				/>
			</main>
			<Footer />
		</>
	);
}
export default SavedMovies;
