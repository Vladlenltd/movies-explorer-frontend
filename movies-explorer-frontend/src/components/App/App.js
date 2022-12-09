import React from 'react';
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
	const [isLoginSuccess, setIsLoginSuccess] = React.useState(false);
	const navigate = useNavigate();
	const [userEmail, setUserEmail] = React.useState("");

	function handleCheckToken() {
		const token = localStorage.getItem('jwt');
		if (token) {
			mainApi.checkTokenValidity()
				.then((res) => {
					if (res) {
						setUserEmail(res.email);
						setIsLoginSuccess(true);
						navigate('/');
					}
				})
				.catch((err) => console.log(err));
		}
	}

	function handleLogin(email, password) {
		mainApi.login(email, password)
			.then((data) => {
				if (data) {
					localStorage.setItem("jwt", data.token);
					handleCheckToken();
					navigate("/movies");
				}
			})
			.catch((err) => {
				setIsLoginSuccess(false)
				console.log(err);
			});
	}

	function handleRegistration(name, email, password) {
		mainApi.registration(name, email, password)
			.then(() => {
				handleLogin(email, password);
				setIsLoginSuccess(true)

				// navigate('/sign-in');
			})
			.catch((err) => {
				setIsLoginSuccess(false);
				console.log(err)
			})
	}

	return (
		<div className="app">
			<Routes>
				<Route path="/" element={<Main />} />
				<Route
					path="/movies/"
					element={(
						<PrivateRoute>
							<Movies />
						</PrivateRoute>
					)}
				/>
				<Route
					path="/saved-movies"
					element={(
						<PrivateRoute>
							<SavedMovies />
						</PrivateRoute>
					)}
				/>
				<Route
					path="/profile"
					element={(
						<PrivateRoute>
							<Profile />
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
