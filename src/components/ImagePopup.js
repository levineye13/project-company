import Popup from './Popup.js';

function ImagePopup(popupSelector) {
  Popup.call(this, popupSelector);
  this._image = this._popup.querySelector('.popup__img');
}

ImagePopup.prototype = Object.create(Popup.prototype);
ImagePopup.prototype.constructor = ImagePopup;

ImagePopup.prototype.open = function (link, alt) {
  this._image.src = link;
  this._image.alt = alt;
  Popup.prototype.open.call(this);
};

export default ImagePopup;
