import HeaderMenuItem from './../components/HeaderMenuItem.js';
import Section from './../components/Section.js';
import {
  checkboxSelector,
  paragraphSelector,
  headerMenu,
  buttonMenu,
  page,
  headerMenuData,
  headerMenuSelector,
  menuItemSelector,
} from '../utils/utils.js';

const checkboxList = document.querySelectorAll(checkboxSelector);
checkboxList.forEach((checkboxItem) => {
  checkboxItem.addEventListener('click', () => {
    const listItem = checkboxItem.closest('.question__item');
    const paragraph = listItem.querySelector(paragraphSelector);
    setTimeout(
      () => paragraph.classList.toggle('question__text-item_visible'),
      200
    );
  });
});

const openMenu = function () {
  headerMenu.classList.add('header__menu_visible');
};

const closeMenu = function () {
  headerMenu.classList.remove('header__menu_visible');
};

buttonMenu.addEventListener('click', () => {
  if (headerMenu.classList.contains('header__menu_visible')) {
    closeMenu();
  } else {
    openMenu();
  }
});

const renderMenuItems = new Section(
  headerMenuData,
  {
    renderer: (item) => {
      const menuItem = new HeaderMenuItem(item, menuItemSelector);
      renderMenuItems.addItem(menuItem.getView());
    },
  },
  headerMenuSelector
);

renderMenuItems.renderItems();
