function Api({ baseUrl, apiKey }) {
  this._baseUrl = baseUrl;
  this._apiKey = apiKey;
}

Api._checkValidData = function (responce) {
  if (responce.ok) {
    return responce.json();
  }
  return Promise.reject(`Ошибка: ${responce.status}`);
};

Api.prototype.getPhotos = function (query) {
  return fetch(`${this._baseUrl}/search/photos?query=${query}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Client-ID ${this._apiKey}`,
    },
  }).then((responce) => {
    Api._checkValidData(responce);
  });
};

const api = new Api({
  baseUrl: 'https://unsplash.com/',
  apiKey: 'GhMZu7vmaDAFrexA25n59YwLU8yiOMhlhPd6Rt3IvAk',
});

export default api;
