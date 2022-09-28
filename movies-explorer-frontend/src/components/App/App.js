import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Main />
      <Footer />
      <Movies />
      <SavedMovies />
      <Profile />
      <Register />
      <Login />
      <NotFoundPage />
    </div>
  );
}

export default App;
