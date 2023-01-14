import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import { mainApi } from '../../utils/MainApi';
import { moviesApi } from '../../utils/MovieApi';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import { CurrentUserContext } from '../Context/CurrentUserContext';
import './App.css';

function App() {
	const [loggedIn, setLoggedIn] = useState(false);
	const location = useLocation();
	const navigate = useNavigate();
	const token = localStorage.getItem('jwt');
	const [movies, setMovies] = useState([]);
	const [savedMovies, setSavedMovies] = useState([]);
	const [isFailed, setIsFailed] = useState(false);
	const [currentUser, setCurrentUser] = useState({});
	const [checked, setChecked] = useState(true);
	const [checkedSaveMovies, setCheckedSaveMovies] = useState(true);
	const [isLoading, setIsLoading] = useState(false);
	const [allSavedMovies, setAllSavedMovies] = useState([]);
	const [isNotFound, setIsNotFound] = useState(false);

	useEffect(() => {
		handleCheckToken()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		if (loggedIn) {
			mainApi.getMovies()
				.then((res) => {
					setSavedMovies(res);
				})
				.catch((err) => {
					console.log(err);
				});
			mainApi
				.getUserInfo()
				.then((data) => {
					setCurrentUser(data);
				})
				.catch((err) => {
					console.log(err);
				});
			if (JSON.parse(localStorage.getItem('filteredMovies'))) {
				setMovies(JSON.parse(localStorage.getItem('filteredMovies')));
				setChecked(JSON.parse(localStorage.getItem('checkbox')));
				setCheckedSaveMovies(
					JSON.parse(localStorage.getItem('checkboxSaveMovies'))
				);
			}
		}
	}, [loggedIn]);

	//сохраняю фильм
	const handleSaveMovie = (data) => {
		mainApi.saveMovies(data)
			.then((data) => {
				setSavedMovies([data, ...savedMovies]);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	//удаляю фильм
	const handleDeleteMovie = (movie) => {
		const savedMovie = savedMovies.find(
			(item) => item.movieId === movie.movieId
		);
		mainApi.deleteMovies(savedMovie._id)
			.then(() => {
				const newMoviesList = savedMovies.filter(
					(item) => item._id !== savedMovie._id
				);
				setSavedMovies(newMoviesList);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	//поиск фильма
	const searchMovies = (movies, name) => {
		return movies.filter((item) =>
			item.nameRU.toLowerCase().includes(name.toLowerCase())
		);
	};

	//общий поиск
	const handleSearchMovies = (name) => {
		if (!JSON.parse(localStorage.getItem('allMovies'))) {
			moviesApi
				.getAllMovies()
				.then((movies) => {
					const before = movies.slice(0, 23);
					const after = movies.slice(24);
					const arrMovies = before.concat(after);
					localStorage.setItem('allMovies', JSON.stringify(arrMovies));
				})
				.then(() => {
					setIsLoading(true);
					const searchArr = searchMovies(
						JSON.parse(localStorage.getItem('allMovies')), name);
					setMovies(searchArr);
					setIsNotFound(!movies.length && !isFailed);
					localStorage.setItem('filteredMovies', JSON.stringify(searchArr));
					localStorage.setItem('searchKeyword', name);
					localStorage.setItem('checkbox', checked);
					setTimeout(() => setIsLoading(false), 1000);
				})
				.catch((err) => {
					setIsFailed(true);
					console.log(err);
				});
		} else if (JSON.parse(localStorage.getItem('allMovies'))) {
			setIsLoading(true);
			const searchArr = searchMovies(
				JSON.parse(localStorage.getItem('allMovies')),
				name
			);
			setMovies(searchArr);
			setIsNotFound(!movies.length || !isFailed);
			localStorage.setItem('filteredMovies', JSON.stringify(searchArr));
			localStorage.setItem('searchKeyword', name);
			localStorage.setItem('checkbox', checked);
			setTimeout(() => setIsLoading(false), 1000);
		}
	};

	//поиск в сохраненных
	const handleSearchSavedMovies = (name) => {
		setIsLoading(true);
		mainApi
			.getMovies()
			.then((movies) => {
				setAllSavedMovies(movies);
				localStorage.setItem('checkboxSaveMovies', checkedSaveMovies);
				const userSavedMovies = movies.filter((movie) => {
					return movie.owner === currentUser._id;
				});
				const searchArr = searchMovies(userSavedMovies, name);
				setSavedMovies(searchArr);
				setIsNotFound(!searchArr.length && !isFailed);
				setTimeout(() => setIsLoading(false), 1000);
			})
			.catch((err) => console.log(err));
		const searchArr = searchMovies(allSavedMovies, name);
		setSavedMovies(searchArr);
		setIsNotFound(!searchArr.length || !isFailed);
		setTimeout(() => setIsLoading(false), 1000);
	};

	// чекбокс
	const handleChangeCheckbox = () => {
		if (location.pathname === '/saved-movies') {
			setCheckedSaveMovies(!checkedSaveMovies);
			localStorage.setItem('checkboxSaveMovies', !checkedSaveMovies);
		} else if (location.pathname === '/movies') {
			setChecked(!checked);
			localStorage.setItem('checkbox', !checked);
		}
	};

	//
	useEffect(() => {
		if (loggedIn) {

		}
	})
	function handleCheckToken() {
		if (token) {
			mainApi.checkTokenValidity(token)
				.then((res) => {
					if (res) {
						setLoggedIn(true);
						navigate(location.pathname);
					}
				})
				.catch((err) => {
					logOut();
					console.log(err)
				});
		}
	}

	function handleLogin(email, password) {
		mainApi.login(email, password)
			.then((data) => {
				if (data) {
					localStorage.setItem("jwt", data.token);
					handleCheckToken();
					navigate("/movies");
					setLoggedIn(true);
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
				navigate('/sign-in');
			})
			.catch((err) => {
				setLoggedIn(false);
				console.log(err)
			})
	}
	function handleUpdateUser(name, email) {
		mainApi.updateUserInfo(name, email)
			.then((data) => {
				setCurrentUser(data);
			})
			.catch((err) => {
				console.log(err)
			})
	}
	// выход
	function logOut() {
		localStorage.clear();
		setLoggedIn(false);
		setMovies([]);
		setSavedMovies([]);
		setAllSavedMovies([]);
		setChecked(true);
		setCheckedSaveMovies(true);
		setCurrentUser({});
		navigate('/');
	}

	return (
		<CurrentUserContext.Provider value={currentUser}>
			<div className="app">
				<Routes>
					<Route path="/" element={<Main
						onLogin={loggedIn}
					/>} />
					<Route
						path="/movies"
						element={(
							<PrivateRoute onLogin={loggedIn}>
								<Movies
									onSubmit={handleSearchMovies}
									movies={movies}
									isFailed={isFailed}
									isNotFound={isNotFound}
									checkedSaveMovies={checkedSaveMovies}
									savedMovies={savedMovies}
									searchKeyword={localStorage.getItem('searchKeyword')}
									checked={checked}
									onCheckbox={handleChangeCheckbox}
									onSave={handleSaveMovie}
									onDelete={handleDeleteMovie}
									allSavedMovies={allSavedMovies}
									isLoading={isLoading}
								/>
							</PrivateRoute>
						)}
					/>
					<Route
						path="/saved-movies"
						element={(
							<PrivateRoute onLogin={loggedIn}>
								<SavedMovies
									onSubmit={handleSearchSavedMovies}
									movies={movies}
									isFailed={isFailed}
									isNotFound={isNotFound}
									checkedSaveMovies={checkedSaveMovies}
									savedMovies={savedMovies}
									searchKeyword={localStorage.getItem('searchKeyword')}
									checked={checked}
									onCheckbox={handleChangeCheckbox}
									onSave={handleSaveMovie}
									onDelete={handleDeleteMovie}
									allSavedMovies={allSavedMovies}
									isLoading={isLoading}
								/>
							</PrivateRoute>
						)}
					/>
					<Route
						path="/profile"
						element={(
							<PrivateRoute onLogin={loggedIn}>
								<Profile
									handleUpdateUser={handleUpdateUser}
									logOut={logOut}
								/>
							</PrivateRoute>
						)}
					/>
					<Route path="/sign-up" element={<Register onRegistration={handleRegistration} />} />
					<Route path="/sign-in" element={<Login onLogin={handleLogin} />} />
					<Route path="*" element={<NotFoundPage />} />
				</Routes>
			</div>
		</CurrentUserContext.Provider>
	);
}

export default App;
