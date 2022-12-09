class MainApi {
  constructor(data) {
    this._baseUrl = data.baseUrl;
    this._headers = data.headers;
  }

  // проверка статуса сервера
  _checkStatus(res) {
    return res.ok ? res.json() : Promise.reject('Ошибка: $(res.status)');
  }

  // регистрация
  registration(name, email, password) {
    return fetch(`${this._baseUrl}/signup`, {
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
    return fetch(`${this._baseUrl}/signin`, {
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
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        ...this._headers,
        authorization: `Bearer ${token}`,
      },
    }).then(this._checkStatus);
  }

  // получение фильмов
  getMovies(token) {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'GET',
      headers: {
        ...this._headers,
        authorization: `Brearer ${token}`,
      },
    }).then(this._checkStatus);
  }

  // сохранение фильмов
  saveMovies(data, token) {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'POST',
      headers: {
        ...this._headers,
        authorization: `Brearer ${token}`,
      },
      body: JSON.stringify(data),
    }).then(this._checkStatus);
  }

  // удаление фильмов
  deleteMovies(userId, token) {
    return fetch(`${this._baseUrl}/movies/${userId}`, {
      method: 'DELETE',
      headers: {
        ...this._headers,
        authorization: `Breare ${token}`,
      },
    }).then(this._checkStatus);
  }
}

export const mainApi = new MainApi({
  baseUrl: 'http://localhost:3000',
  headers: {
    'Content-type': 'application/json',
  },
});
