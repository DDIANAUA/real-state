'use strict';

const bodyElement = document.body;
const burgerElement = document.querySelector('[data-js-burger]');
const navListElement = document.querySelector('[data-js-nav-list]');

/* Відкривання меню бургер */
burgerElement.addEventListener('click', function () {
	if (
		burgerElement.classList.contains('burger-open') &&
		navListElement.classList.contains('nav-open')
	) {
		burgerElement.classList.remove('burger-open');
		navListElement.classList.remove('nav-open');
		bodyElement.classList.remove('body-block');
	} else {
		burgerElement.classList.add('burger-open');
		navListElement.classList.add('nav-open');
		bodyElement.classList.add('body-block');
	}
});

// Секція tabs deals
const tabsNavElement = document.querySelector('[data-js-tabs-nav]');
const tabsNavButtonElements = document.querySelectorAll(
	'[data-js-tabs-button]',
);
const tabsItemElements = document.querySelectorAll('[data-js-tabs-item]');

tabsNavElement.addEventListener('click', function (event) {
	const currentButton = event.target.closest('button[data-js-tabs-button]');
	if (currentButton && !currentButton.classList.contains('active')) {
		const currentButtonIndex = Number(currentButton.dataset.tabsId);
		tabsNavButtonElements.forEach(item => item.classList.remove('active'));
		tabsItemElements.forEach(item => item.classList.remove('active'));
		currentButton.classList.add('active');
		tabsItemElements[currentButtonIndex].classList.add('active');
	}
});
