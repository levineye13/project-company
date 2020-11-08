function Popup(popupSelector) {
  this._popup = document.querySelector(`.${popupSelector}`);
  this._handleEscClose = this._handleEscClose.bind(this);
}

Popup.prototype.open = function () {
  this._popup.classList.add('popup_visible');
  document.addEventListener('keydown', this._handleEscClose);
};

Popup.prototype.close = function () {
  this._popup.classList.remove('popup_visible');
  document.removeEventListener('keydown', this._handleEscClose);
};

Popup.prototype._handleEscClose = function (evt) {
  if (evt.key === 'Escape') {
    this.close();
  }
};

Popup.prototype._handleClickScreenClose = function (evt) {
  if (evt.target.classList.contains('popup_visible')) {
    this.close();
  }
};

Popup.prototype._handleClickButtonClose = function (evt) {
  if (evt.target.classList.contains('popup__button-close')) {
    this.close();
  }
};

Popup.prototype.setEventListeners = function () {
  this._popup.addEventListener(
    'click',
    this._handleClickScreenClose.bind(this)
  );
  this._popup.addEventListener(
    'click',
    this._handleClickButtonClose.bind(this)
  );
};

export default Popup;
