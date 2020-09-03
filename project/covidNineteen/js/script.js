'use strict';

// STICKY NAVBAR

const navigationBar = document.getElementById('navigation');
const stickyBar = navigationBar.offsetTop;

window.onscroll = () => {
	stickyNavbar();
}

const stickyNavbar = () => {

	if (window.pageYOffset > stickyBar) {
		navigationBar.classList.add('sticky-navbar');
	} else {
		navigationBar.classList.remove('sticky-navbar');
	}
}

// TOGGLE MOBILE MENU

const headerMenu = document.querySelector('.header-menu');
const buttonMenu = headerMenu.querySelector('.nav-toggle');
const toggleMenu = document.getElementById('toggle-menu');

buttonMenu.addEventListener('click', event => {
	headerMenu.classList.toggle('active');

	if (headerMenu.classList.contains('active')) {
		toggleMenu.style.display = 'flex';
	} else {
		toggleMenu.style.display = 'none';
	}
});

const linkList = document.getElementById('toggle-menu').getElementsByTagName('a');

[].forEach.call(linkList, function(event) {
    event.addEventListener('click', function () {
        headerMenu.classList.remove('active');
        toggleMenu.style.display = 'none';
    });
});

// NAVIGATION IF SCROLL TO UP

let previousScroll = 0;

window.onscroll = () => {
	const heightTop = window.pageYOffset;

	if (heightTop > previousScroll) {
		navigationBar.classList.add('sticky-navbar')
	} else {
		navigationBar.classList.remove('sticky-navbar')
	}

	previousScroll = heightTop;
}

// SMOOTH SCROLL

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener('click', function (event) {
    event.preventDefault();
    
    const identifier = anchor.getAttribute('href').substr(1);
    
    document.getElementById(identifier).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
}

// PRELOADER

const preloader = document.getElementById('header-preloader');
const documentBody = document.getElementsByTagName('body')[0];

documentBody.style = 'overflow-y: hidden';

function fadeOut(event) {
    event.style.opacity = 1;
    let interhellopreloader = setInterval(function() {
        event.style.opacity = event.style.opacity - 0.05;
        if (event.style.opacity <= 0.05) {
            clearInterval(interhellopreloader);
            preloader.style.display = 'none';
            documentBody.style = 'overflow-y: scroll';
        }
    }, 16);
}
window.onload = function() {
    setTimeout(function() {
        fadeOut(preloader);
    }, 3000);
};