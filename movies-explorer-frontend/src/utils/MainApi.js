class MainApi {
  constructor(data) {
    this._baseURL = data.baseURL;
    this._headers = data.headers;
  }

  // проверка статуса сервера
  _checkStatus(res) {
    return res.ok ? res.json() : Promise.reject('Ошибка: $(res.status)');
  }

  // регистрация
  registration(name, email, password) {
    return fetch(`${this._baseURL}/sign-up`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name,
        email,
        password,
      })
    }).then(this._checkStatus)
  }

  // авторизация
  login(email, password) {
    return fetch(`${this._baseURL}/signin`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        email,
        password,
      })
    }).then(this._checkStatus)
  }

  // проверка токена
  checkTokenValidity(token) {
    return fetch(`${this._baseURL}/users/me`, {
      method: 'GET',
      headers: {
        ...this._headers,
        authorization: `Bearer ${token}`,
      },
    }).then(this._checkStatus);
  }

  // получениие данных пользователя
  getUserInfo() {
    return fetch(`${this._baseURL}/users/me`, {
      method: 'GET',
      headers: {
        ...this._headers,
        authorization: `Bearer ${localStorage.getItem('jwt')}`
      },
    }).then(this._checkStatus);
  }

  //обновление данных пользователя
  updateUserInfo(name, email) {
    return fetch(`${this._baseURL}/users/me`, {
      method: 'PATCH',
      headers: {
        ...this._headers,
        authorization: `Bearer ${localStorage.getItem('jwt')}`
      },
      body: JSON.stringify({
        name: name,
        email: email
      })
    }).then(this._checkStatus);
  }

  // получение фильмов
  getMovies() {
    return fetch(`${this._baseURL}/movies`, {
      method: 'GET',
      headers: {
        ...this._headers,
        authorization: `Bearer ${localStorage.getItem('jwt')}`
      },
    }).then(this._checkStatus);
  }

  // сохранение фильмов
  saveMovies(data) {
    return fetch(`${this._baseURL}/movies`, {
      method: 'POST',
      headers: {
        ...this._headers,
        authorization: `Bearer ${localStorage.getItem('jwt')}`
      },
      body: JSON.stringify({
        country: data.country,
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image: `https://api.nomoreparties.co${data.image.url}`,
        trailerLink: data.trailerLink,
        thumbnail: `https://api.nomoreparties.co${data.image.formats.thumbnail.url}`,
        movieId: data.id.toString(),
        nameRU: data.nameRU,
        nameEN: data.nameEN,
      }),
    }).then(this._checkStatus);
  }

  // удаление фильмов
  deleteMovies(id) {
    return fetch(`${this._baseURL}/movies/${id}`, {
      method: 'DELETE',
      headers: {
        ...this._headers,
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    }).then(this._checkStatus);
  }
}

export const mainApi = new MainApi({
  // baseURL: 'http://localhost:3000',
  baseURL: 'https://api.movies.vltd.nomoredomains.sbs',
  headers: {
    'Content-type': 'application/json',
  },
});
