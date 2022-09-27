import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Main />
      <Footer />
      <Movies />
      <SavedMovies />
    </div>
  );
}

export default App;
