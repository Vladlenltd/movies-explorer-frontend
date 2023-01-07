class MoviesApi {
  constructor(data) {
    this._baseUrl = data.baseUrl;
    this._headers = data.headers;
  }

  // проверка статуса сервера
  _checkStatus(res) {
    return res.ok ? res.json() : Promise.reject('Ошибка: $(res.status)');
  }

  // получение всех фильмов
  getAllMovies() {
    return fetch(`${this._baseUrl}`, {
      method: 'GET',
      headers: this._headers,
    }).then(this._checkStatus);
  }
}

export const moviesApi = new MoviesApi({
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
  headers: {
    'Content-type': 'application/json',
  },
});
