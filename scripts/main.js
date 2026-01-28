'use strict';

const bodyElement = document.body;
const burgerElement = document.querySelector('[data-js-burger]');
const navListElement = document.querySelector('[data-js-nav-list]');
console.log(burgerElement, bodyElement, navListElement);

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
