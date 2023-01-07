import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import { mainApi } from '../../utils/MainApi';
import { moviesApi } from '../../utils/MoviesApi'
import { CurrentUserContext } from '../Context/CurrentUserContext';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import iconBtn from '../../images/find-btn.svg';
import './App.css';

function App() {
	const navigate = useNavigate();
	const token = localStorage.getItem('jwt');
	const [loggedIn, setLoggedIn] = useState(false);
	const [isLoading, setIsLoading] = useState(false); //прелоадер
	const [isFirstSearch, setIsFirstSearch] = useState( //первичный поиск
		localStorage.getItem("isFirstSearch")
			? JSON.parse(localStorage.getItem("isFirstSearch"))
			: true
	);
	const [userEmail, setUserEmail] = useState("");
	const [currentUser, setCurrentUser] = useState({
		name: "",
		email: "",
		_id: "",
	});
	const [cards, setCards] = useState([]); //значения карточек фильмов
	const [searchQuery, setSearchQuery] = useState('');//поиск карточек
	const [savedMovies, setSavedMovies] = useState([]);
	const [currentSearchQuery, setCurrentSearchQuery] = useState('');//текущее значение инпута
	// const [checked, setChecked] = useState(false);//состояние чекбокса

	const baseUrl = 'https://api.nomoreparties.co/';

	// const handleChangeCheckbox = () => {
	// 	setChecked(!checked);
	// 	console.log(checked)
	// };
	//блок результата поиска
	const handleSearchMovies = () => {
		setIsLoading(true) // показываю прелоадер

	}
	//получение сохраненных фильмов
	const getSavedMovies = () => {
		mainApi.getMovies(token)
			.then((res) => {
				setSavedMovies(res)
			})
			.catch((err) => {
				console.log('Упc... Что-то пошло не так. Ошибка при загрузке фильмов', err)
			})
	}

	//сохранение фильмов
	const saveMovies = (data) => {
		mainApi.saveMovies(data, token)
			.then((savedMovie) => {
				setSavedMovies([savedMovie, ...savedMovies]);
			})
			.catch((err) => {
				console.log('Ошибка при сохранении фильма', err);
			});
	}

	//удаление фильмов
	const deleteMovies = (id) => {
		mainApi.deleteMovies(id, token)
			.then((deleteMovie) => {
				setSavedMovies(savedMovies.filter(movie => movie.id !== deleteMovie.id))
			})
	}

	//получение фильмов
	const getMovies = () => {
		moviesApi.getAllMovies()
			.then((movies) => {
				setCards(movies.map((item) => ({
					title: item.nameRU,
					key: item.id,
					trailerLink: item.trailerLink,
					image: `${baseUrl}${item.image.url}`,
					duration: item.duration,
				})))
			})
	}

	//отрисовка фильмов
	useEffect(() => {
		getMovies()
	}, [])

	// поиск фильмов по названию
	const searchMovie = cards.filter(movie => {
		return movie.title.toLowerCase().includes(currentSearchQuery.toLowerCase());
	})
	// поиск короткометражек
	const searchShortMovie = (cards) => {
		const searchShortMoviesArr = cards.slice(0);
		return searchShortMoviesArr.filter((item) => item.duration <= 40);
	};

	//ввод данных в инпут
	const handleChange = (e) => {
		setSearchQuery(e.target.value)
	}
	// отправка данных из инпута
	const handleSubmit = (e) => {
		e.preventDefault();
		setCurrentSearchQuery(searchQuery) //записываем значение из input
	}

	function handleCheckToken() {
		if (token) {
			mainApi.checkTokenValidity(token)
				.then((res) => {
					if (res) {
						setUserEmail(res.email);
						setLoggedIn(true);
						setCurrentUser(res)
						navigate('/');
					}
				})
				.catch((err) => console.log(err));
		}
	}

	function handleLogin(email, password) {
		mainApi.login(email, password)
			.then(() => {
				if (token) {
					localStorage.setItem("jwt", token);
					handleCheckToken();
					navigate("/movies");
				}
			})
			.catch((err) => {
				setLoggedIn(false)
				console.log(err);
			});
	}

	function handleRegistration(name, email, password) {
		mainApi.registration(name, email, password)
			.then(() => {
				handleLogin(email, password);
				setLoggedIn(true)
			})
			.catch((err) => {
				setLoggedIn(false);
				console.log(err)
			})
	}

	function handleUpdateUserInfo(data) {
		mainApi.updateUserInfo(data, token)
			.then((data) => {
				setCurrentUser(data);
			})
			.catch((err) => {
				console.log(err)
			})
	}

	return (
		<div className="app">
			<CurrentUserContext.Provider value={currentUser}>
				<Routes>
					<Route path="/" element={<Main />} />
					<Route
						path="/movies"
						element={(
							<><form className="search-form" name="movie-search-form"
								//отправляем данные из строки поиска
								onSubmit={handleSubmit}
							>
								<div className="search-form__wrapper">
									<input
										className="search-form__input"
										placeholder="Фильм"
										required
										onChange={handleChange}
										value={searchQuery}
										minLength='1'
										maxLength='30' />
									<button className="search-form__btn" type="submit">
										<img
											className="search-form__icon"
											src={iconBtn}
											alt="Поиск" />
									</button>
									<FilterCheckbox
									/>
								</div>
							</form>
								<Movies
									cards={cards}
									searchMovie={searchMovie}
									saveMovies={saveMovies}
									deleteMovies={deleteMovies}
								/></>
						)}
					/>
					<Route
						path="/saved-movies"
						element={(
							// <PrivateRoute>
							<SavedMovies
								getSavedMovies={getSavedMovies}
							/>
							// </PrivateRoute>
						)}
					/>
					<Route
						path="/profile"
						element={(
							<PrivateRoute
								loggedIn={loggedIn}
							>
								<Profile
									onUpdateUserInfo={handleUpdateUserInfo}
								/>
							</PrivateRoute>
						)}
					/>
					<Route path="/sign-up" element={<Register onRegistration={handleRegistration} />} />
					<Route path="/sign-in" element={<Login onLogin={handleLogin} />} />
					<Route path="*" element={<NotFoundPage />} />
				</Routes>
			</CurrentUserContext.Provider>
		</div>
	);
}

export default App;
