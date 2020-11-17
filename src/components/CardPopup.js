import Popup from './Popup.js';

const CardPopup = function (popupSelector) {
  Popup.call(this, popupSelector);
  this._image = this._popup.querySelector('.popup__img');
  this._title = this._popup.querySelector('.popup__title');
};

CardPopup.prototype = Object.create(Popup.prototype);
CardPopup.prototype.constructor = CardPopup;

CardPopup.prototype.open = function (link, title) {
  this._image.src = link;
  this._image.alt = title;
  this._title.textContent = title;
  Popup.prototype.open.call(this);
};

export default CardPopup;
