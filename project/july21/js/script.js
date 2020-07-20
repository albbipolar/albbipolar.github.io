
// DOWN COUNTER
const second = 1000,
minute = second * 60,
hour = minute * 60,
day = hour * 24;

const afterHoliday = document.getElementById('afterHoliday');

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
      
      afterHoliday.innerText = 'С искренними поздравлениями и наилучшими пожеланиями!';
      document.getElementById('fireworkBlocked').style.display = 'block';
      document.getElementById('fragmentBlocked').style.display = 'block';
    }
  }, second)

// SMOOTH SCROLL
const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener('click', function (event) {
    event.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
};

// PRELOADER
const preloader = document.getElementById('preloader-preload');
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
    }, 4000);
};

// PROHIBIT VIEWING CODE // REMOVE AFTER 21 JULY //
window.onkeydown = function(click) {
  if(click.keyCode == 123) return false;
  if(click.keyCode == 123) return false;
  if(click.ctrlKey && click.shiftKey && click.keyCode == 'I'.charCodeAt(0)) return false;
  if(click.ctrlKey && click.shiftKey && click.keyCode == 'J'.charCodeAt(0)) return false;
  if(click.ctrlKey && click.keyCode == 'U'.charCodeAt(0)) return false;
};
document.oncontextmenu = returnFalse;
function returnFalse() {return false;};