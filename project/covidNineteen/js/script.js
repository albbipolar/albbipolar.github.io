'use strict';

// STICKY NAVBAR

const navbar = document.getElementById('navigation');
const sticky = navbar.offsetTop;

window.onscroll = function() {

	stickyNavbar();
}

function stickyNavbar() {

	if (window.pageYOffset > sticky) {
		navbar.classList.add('sticky-navbar');
	} else {
		navbar.classList.remove('sticky-navbar');
	}
}

// TOGGLE MOBILE MENU

const menu = document.querySelector('.header-menu');
const btn = menu.querySelector('.nav-toggle');

btn.addEventListener('click', evt => {
	menu.classList.toggle('active');

	const toggleMenu = document.getElementById('toggleMenu');
	if(menu.classList.contains('active')) {
		toggleMenu.style.display = 'flex';
	} else {
		toggleMenu.style.display = 'none';
	}
});

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