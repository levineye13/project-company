import Popup from './Popup.js';

const ImagePopup = function (popupSelector) {
  Popup.apply(this, arguments);
  this._image = this._popup.querySelector('.popup__img');
};

ImagePopup.prototype = Object.create(Popup.prototype);
ImagePopup.prototype.constructor = ImagePopup;

ImagePopup.prototype.open = function (link, alt) {
  this._image.src = link;
  this._image.alt = alt;
  Popup.prototype.open.apply(this, arguments);
};

export default ImagePopup;
