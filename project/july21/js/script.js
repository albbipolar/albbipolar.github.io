
// DOWN COUNTER
const second = 1000,
minute = second * 60,
hour = minute * 60,
day = hour * 24;

let countDown = new Date('Jul 20, 2020 23:59:59').getTime(),
event = setInterval(function() {    

  let now = new Date().getTime(),
    distance = countDown - now;

    document.getElementById('Days').innerText = Math.floor(distance / (day)),
    document.getElementById('Hours').innerText = Math.floor((distance % (day)) / (hour)),
    document.getElementById('Minutes').innerText = Math.floor((distance % (hour)) / (minute)),
    document.getElementById('Seconds').innerText = Math.floor((distance % (minute)) / second);

    if (distance < 0) {
      clearInterval(event);

      document.getElementById('Days').innerText = 0,
      document.getElementById('Hours').innerText = 0,
      document.getElementById('Minutes').innerText = 0,
      document.getElementById('Seconds').innerText = 0;
    }
  }, second)

// SMOOTH SCROLL
const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
};

// PRELOADER
let preloader = document.getElementById('preloader_preload');
let body = document.getElementsByTagName('body')[0];

body.style = 'overflow-y: hidden';

function fadeOut(event) {
    event.style.opacity = 1;
    let interhellopreloader = setInterval(function() {
        event.style.opacity = event.style.opacity - 0.05;
        if (event.style.opacity <= 0.05) {
            clearInterval(interhellopreloader);
            preloader.style.display = 'none';
            body.style = 'overflow-y: scroll';
        }
    }, 16);
}
window.onload = function() {
    setTimeout(function() {
        fadeOut(preloader);
    }, 4000);
};