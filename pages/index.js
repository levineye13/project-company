import HeaderMenuItem from './../components/HeaderMenuItem.js';
import Section from './../components/Section.js';
import HeaderMenu from './../components/HeaderMenu.js';
import ImagePopup from './../components/ImagePopup.js';
import CardPopup from './../components/CardPopup.js';
import {
  checkboxSelector,
  paragraphSelector,
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

const cardPopup = new CardPopup('popup_type_card');

const cardList = document.querySelectorAll('.project__item');
cardList.forEach((card) => {
  const cardImage = card.querySelector('.project__img');
  const cardTitle = card.querySelector('.project__card-title');
  card.addEventListener('click', () => {
    cardPopup.open(cardImage.src, cardTitle.textContent);
    cardPopup.setEventListeners();
  });
});

const imagePopup = new ImagePopup('popup_type_image');

const imageList = document.querySelectorAll('.portfolio__item');
imageList.forEach((imageBlock) => {
  const image = imageBlock.querySelector('.portfolio__img');
  imageBlock.addEventListener('click', () => {
    imagePopup.open(image.src, image.alt);
    imagePopup.setEventListeners();
  });
});
