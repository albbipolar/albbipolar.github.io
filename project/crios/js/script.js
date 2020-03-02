'use strict';

// ACTIVE MENU

let activeMenu = document.getElementById('active_menu');
let buttonMenu = document.getElementById('button_menu');
let closeMenu = document.getElementById('hide_menu');
let documentBody = document.body;

buttonMenu.onclick = function showMenu() {

	event.preventDefault();
    activeMenu.style.width = '250px';
    activeMenu.style["boxShadow"] = '0px 5px 10px 2px rgb(218, 229, 239)';

    documentBody.style.overflowY = 'hidden';
}
closeMenu.onclick = function hideMenu() {

	event.preventDefault();
    activeMenu.style.width = '0';
    activeMenu.style["boxShadow"] = '0px 0px 0px 0px';

    documentBody.style.overflowY = 'scroll';
}

// SCROLL TO ANCHOR

let anchors = document.getElementsByClassName('anchor');
for (let anchor of anchors) {
  anchor.addEventListener('click', function (event) {
    event.preventDefault();
    
    let blockID = anchor.getAttribute('href').substr(1);
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

// PRELOADER

let preloader = document.getElementById("hellopreloader_preload");
function fadeOut(event) {
	event.style.opacity = 1;
	let interhellopreloader = setInterval(function() {
		event.style.opacity = event.style.opacity - 0.05;
		if (event.style.opacity <= 0.05) {
			clearInterval(interhellopreloader);
			preloader.style.display = 'none';
		}
	}, 16);
}
window.onload = function() {
	setTimeout(function() {
		fadeOut(preloader);
	}, 1000);
};