import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { mainApi } from '../../utils/MainApi';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import './App.css';

function App() {
	const [loggedIn, setLoggedIn] = React.useState(false);
	// const [userEmail, setUserEmail] = React.useState("");
	const navigate = useNavigate();
	const token = localStorage.getItem('jwt');
	console.log(token)
	console.log(loggedIn);

	useEffect(() => {
		if (loggedIn) {

		}
	})
	function handleCheckToken() {
		if (token) {
			mainApi.checkTokenValidity(token)
				.then((res) => {
					if (res) {
						// setUserEmail(res.email);
						// setLoggedIn(true);
						// navigate('/movies');
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
					setLoggedIn(true);
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

				// navigate('/sign-in');
			})
			.catch((err) => {
				setLoggedIn(false);
				console.log(err)
			})
	}
	// выход

	function logOut() {
		localStorage.clear();
		setLoggedIn(false);
		navigate('/')
	}

	return (
		<div className="app">
			<Routes>
				<Route path="/" element={<Main />} />
				<Route
					path="/movies"
					element={(
						<PrivateRoute onLogin={loggedIn}>
							<Movies />
						</PrivateRoute>
					)}
				/>
				<Route
					path="/saved-movies"
					element={(
						<PrivateRoute onLogin={loggedIn}>
							<SavedMovies />
						</PrivateRoute>
					)}
				/>
				<Route
					path="/profile"
					element={(
						<PrivateRoute onLogin={loggedIn}>
							<Profile
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
	);
}

export default App;
