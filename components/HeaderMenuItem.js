function HeaderMenuItem(dataItem, templateSelector) {
  this._dataItem = dataItem;

  HeaderMenuItem._template = document.querySelector(`#${templateSelector}`);
}

HeaderMenuItem._getTemplate = function () {
  return HeaderMenuItem._template.content.cloneNode(true).children[0];
};

HeaderMenuItem.prototype.getView = function () {
  this._itemMarkup = HeaderMenuItem._getTemplate();

  this._itemMarkup.querySelector(
    '.header__menu-link'
  ).href = `#${this._dataItem.link}`;
  this._itemMarkup.querySelector(
    '.header__menu-link'
  ).textContent = this._dataItem.text;

  return this._itemMarkup;
};

export default HeaderMenuItem;
