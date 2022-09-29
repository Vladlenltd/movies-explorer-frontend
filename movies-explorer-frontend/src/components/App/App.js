import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import './App.css';

function App() {
  const [loggedIn, setIsLoggedIn] = React.useState(false);
  const navigate = useNavigate();

  function login() {
    setIsLoggedIn(true);
    navigate.push('/movies');
  }

  function logOut() {
    setIsLoggedIn(false);
    navigate.push('/');
  }

  function goToSignIn() {
    navigate.push('/sign-in');
  }
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/saved-movies" element={<SavedMovies />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/sign-in" element={<Register />} />
        <Route path="/sign-up" element={<Login />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
