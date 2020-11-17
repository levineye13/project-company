const Section = function ({ items, renderer }, containerSelector) {
  this._items = items;
  this._renderer = renderer;
  this._container = document.querySelector(`.${containerSelector}`);
};

Section.prototype.addItem = function (item) {
  this._container.append(item);
};

Section.prototype.renderItems = function () {
  this._items.forEach((item) => this._renderer(item));
};

export default Section;
