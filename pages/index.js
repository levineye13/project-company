import HeaderMenuItem from './../components/HeaderMenuItem.js';
import Section from './../components/Section.js';
import HeaderMenu from './../components/HeaderMenu.js';
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

const menu = new HeaderMenu('header__menu', 'header__button-menu');
menu.setEventListeners();
