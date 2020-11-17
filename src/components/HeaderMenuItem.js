const HeaderMenuItem = function (dataItem, templateSelector) {
  this._dataItem = dataItem;

  HeaderMenuItem._template = document
    .querySelector(`#${templateSelector}`)
    .content.cloneNode(true).children[0];
};

HeaderMenuItem.prototype.getView = function () {
  this._itemMarkup = HeaderMenuItem._template;
  this._menuLinkElement = this._itemMarkup.querySelector('.header__menu-link');

  this._menuLinkElement.href = `#${this._dataItem.link}`;
  this._menuLinkElement.textContent = this._dataItem.text;

  return this._itemMarkup;
};

export default HeaderMenuItem;
