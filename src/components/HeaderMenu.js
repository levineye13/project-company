function HeaderMenu(menuSelector, switchElementSelector) {
  this._menu = document.querySelector(`.${menuSelector}`);
  this._switchElement = document.querySelector(`.${switchElementSelector}`);
  this._handleEscPressClose = this._handleEscPressClose.bind(this);
}

HeaderMenu.prototype.open = function () {
  this._menu.classList.add('header__menu_visible');
  document.addEventListener('keydown', this._handleEscPressClose);
};

HeaderMenu.prototype.close = function () {
  this._menu.classList.remove('header__menu_visible');
  document.removeEventListener('keydown', this._handleEscPressClose);
};

HeaderMenu.prototype._handleButtonClickClose = function () {
  if (this._menu.classList.contains('header__menu_visible')) {
    this.close();
  } else {
    this.open();
  }
};

HeaderMenu.prototype._handleEscPressClose = function (evt) {
  if (evt.key === 'Escape') {
    this.close();
  }
};

HeaderMenu.prototype.setEventListeners = function () {
  this._switchElement.addEventListener('click', () =>
    this._handleButtonClickClose()
  );
};

export default HeaderMenu;
