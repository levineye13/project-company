import {
	checkboxSelector,
	paragraphSelector
} from './../utils/constants.js';

const checkboxList = document.querySelectorAll(checkboxSelector);
checkboxList.forEach(checkboxItem => {
	checkboxItem.addEventListener('click', () => {
		const listItem = checkboxItem.closest('.question__item');
		const paragraph = listItem.querySelector(paragraphSelector);
		setTimeout(() => paragraph.classList.toggle('question__text-item_visible'), 200);
	});
});

const headerMenu = document.querySelector('.header__menu');
const buttonMenu = document.querySelector('.header__button-menu');

buttonMenu.addEventListener('click', () => {
	headerMenu.classList.toggle('header__menu_visible');
})