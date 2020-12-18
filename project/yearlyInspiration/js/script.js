'use strict';

// PRELOADER
$(window).on('load', function() {

  setTimeout(function() {

    $('.inspiration-spinner').fadeOut();
  }, 3000);

  setTimeout(function() {

    $('.inspiration-preloader').fadeOut();
  }, 3500);
});

// FULLPAGE SCROLL
const inspirationFullpage = new fullpage('#inspiration-fullpage', {
    sectionsColor: ['#2B222E', '#875077', '#2B222E', '#875077'],
    anchors: ['first-section', 'second-section', 'third-section', 'fourth-section'],
    navigation: true,
    navigationTooltips: ['25.12.2020', '26.12.2020', '27.12.2020', '28.12.2020'],
    showActiveTooltip: true,
    resize: false
});

// VARIABLES DOWNCOUNTER
const second = 1000,
minute = second * 60,
hour = minute * 60,
day = hour * 24;

// FIRST DOWNCOUNTER
const textFirstSection = document.getElementById('text-first-section');

let countFirstDown = new Date('Dec 24, 2020 23:59:59').getTime(),
firstEvent = setInterval(function() {

  let now = new Date().getTime(),
  distance = countFirstDown - now;
  
  document.getElementById('first-section-days').innerText = Math.floor(distance / (day)),
  document.getElementById('first-section-hours').innerText = Math.floor((distance % (day)) / (hour)),
  document.getElementById('first-section-minutes').innerText = Math.floor((distance % (hour)) / (minute)),
  document.getElementById('first-section-seconds').innerText = Math.floor((distance % (minute)) / second);
  
  if (distance < 0) {

    clearInterval(firstEvent);
    
    document.getElementById('first-section-days').innerText = 0,
    document.getElementById('first-section-hours').innerText = 0,
    document.getElementById('first-section-minutes').innerText = 0,
    document.getElementById('first-section-seconds').innerText = 0;
    
    // ОТСЛЕДИТЬ ПЕРЕМОТКУ ВРЕМЕНИ
    textFirstSection.innerText = 'Пожалуйста, не пытайтесь опередить временные рамки';
  }
}, second);

// SECOND DOWNCOUNTER
const textSecondSection = document.getElementById('text-second-section');

let countSecondDown = new Date('Dec 25, 2020 23:59:59').getTime(),
secondEvent = setInterval(function() {

  let now = new Date().getTime(),
  distance = countSecondDown - now;
  
  document.getElementById('second-section-days').innerText = Math.floor(distance / (day)),
  document.getElementById('second-section-hours').innerText = Math.floor((distance % (day)) / (hour)),
  document.getElementById('second-section-minutes').innerText = Math.floor((distance % (hour)) / (minute)),
  document.getElementById('second-section-seconds').innerText = Math.floor((distance % (minute)) / second);
  
  if (distance < 0) {

    clearInterval(secondEvent);
    
    document.getElementById('second-section-days').innerText = 0,
    document.getElementById('second-section-hours').innerText = 0,
    document.getElementById('second-section-minutes').innerText = 0,
    document.getElementById('second-section-seconds').innerText = 0;
    
    // ОТСЛЕДИТЬ ПЕРЕМОТКУ ВРЕМЕНИ
    textSecondSection.innerText = 'Пожалуйста, не пытайтесь опередить временные рамки';
  }
}, second);

// THIRD DOWNCOUNTER
const textThirdSection = document.getElementById('text-third-section');

let countThirdDown = new Date('Dec 26, 2020 23:59:59').getTime(),
thirdEvent = setInterval(function() {
  
  let now = new Date().getTime(),
  distance = countThirdDown - now;
  
  document.getElementById('third-section-days').innerText = Math.floor(distance / (day)),
  document.getElementById('third-section-hours').innerText = Math.floor((distance % (day)) / (hour)),
  document.getElementById('third-section-minutes').innerText = Math.floor((distance % (hour)) / (minute)),
  document.getElementById('third-section-seconds').innerText = Math.floor((distance % (minute)) / second);
  
  if (distance < 0) {

    clearInterval(thirdEvent);
    
    document.getElementById('third-section-days').innerText = 0,
    document.getElementById('third-section-hours').innerText = 0,
    document.getElementById('third-section-minutes').innerText = 0,
    document.getElementById('third-section-seconds').innerText = 0;
    
    // ОТСЛЕДИТЬ ПЕРЕМОТКУ ВРЕМЕНИ
    textThirdSection.innerText = 'Пожалуйста, не пытайтесь опередить временные рамки';
  }
}, second);

// FOURTH DOWNCOUNTER
const textFourthSection = document.getElementById('text-fourth-section');

let countFourthDown = new Date('Dec 27, 2020 23:59:59').getTime(),
fourthEvent = setInterval(function() {
  
  let now = new Date().getTime(),
  distance = countFourthDown - now;
  
  document.getElementById('fourth-section-days').innerText = Math.floor(distance / (day)),
  document.getElementById('fourth-section-hours').innerText = Math.floor((distance % (day)) / (hour)),
  document.getElementById('fourth-section-minutes').innerText = Math.floor((distance % (hour)) / (minute)),
  document.getElementById('fourth-section-seconds').innerText = Math.floor((distance % (minute)) / second);
  
  if (distance < 0) {

    clearInterval(fourthEvent);
    
    document.getElementById('fourth-section-days').innerText = 0,
    document.getElementById('fourth-section-hours').innerText = 0,
    document.getElementById('fourth-section-minutes').innerText = 0,
    document.getElementById('fourth-section-seconds').innerText = 0;
    
    // ОТСЛЕДИТЬ ПЕРЕМОТКУ ВРЕМЕНИ
    textFourthSection.innerText = 'Пожалуйста, не пытайтесь опередить временные рамки';
  }
}, second);

// REFERENCE FIRST SECTION
$('.section-reference-first').on('click', function() {
  
  $('.section-reference-response').slideDown();
  $('.section-reference-text').html('<h3>Пока горит бенгальский огонь, я думаю, стоит попытаться снова.</h3><br><p>Я, конечно, понимаю, что первое задание должно быть простым, но просто нажать один раз на него, серьёзно? К слову, я дал подсказку в прошлом предложении, думаю, теперь легко догадаться.</p>');
});

$('.section-reference-first').on('dblclick', function() {
  
  $('.section-reference-text').html('<h3>Отлично, первая загадка отгадана, поздравляю.</h3><br><p>Три правила Нового года: не забыть купить мандарины, окутать искусственную ёлку новогодней гирляндой, и самое главное — не лайкать персонажа, чтобы его не выгнали.</p><br>Вот немного информации, которая может пригодиться: <a href="files/information.pdf" target="_blank">ссылка на информацию.</a>');
});

$('.section-reference-button').on('click', function() {
  
  $('.section-reference-response').slideUp();
});

// CUSTOM CURSOR
const cursor = {
  delay: 8,
  coordinateX: 0,
  coordinateY: 0,
  endX: (window.innerWidth / 2),
  endY: (window.innerHeight / 2),
  cursorVisible: true,
  cursorEnlarged: false,
  $dot: document.querySelector('.section-cursor'),
  $outline: document.querySelector('.section-aura'),
  
  init: function() {
    
    this.dotSize = this.$dot.offsetWidth;
    this.outlineSize = this.$outline.offsetWidth;
    
    this.setupEventListeners();
    this.animateDotOutline();
  },
  
  setupEventListeners: function() {
    
    let self = this;
    
    document.querySelectorAll('a, button').forEach(function(event) {
      
      event.addEventListener('mouseover', function() {
        
        self.cursorEnlarged = true;
        self.toggleCursorSize();
      });
      
      event.addEventListener('mouseout', function() {
        
        self.cursorEnlarged = false;
        self.toggleCursorSize();
      });
    });
    
    document.addEventListener('mousedown', function() {
      
      self.cursorEnlarged = true;
      self.toggleCursorSize();
    });
    
    document.addEventListener('mouseup', function() {
      
      self.cursorEnlarged = false;
      self.toggleCursorSize();
    });
    
    document.addEventListener('mousemove', function(event) {
      
      self.cursorVisible = true;
      self.toggleCursorVisibility();
      
      self.endX = event.pageX;
      self.endY = event.pageY;
      self.$dot.style.top = self.endY + 'px';
      self.$dot.style.left = self.endX + 'px';
    });
    
    document.addEventListener('mouseenter', function() {
      
      self.cursorVisible = true;
      self.toggleCursorVisibility();
      self.$dot.style.opacity = 1;
      self.$outline.style.opacity = 1;
    });
    
    document.addEventListener('mouseleave', function() {
      
      self.cursorVisible = true;
      self.toggleCursorVisibility();
      self.$dot.style.opacity = 0;
      self.$outline.style.opacity = 0;
    });
  },
  
  animateDotOutline: function() {
    
    let self = this;
    
    self.coordinateX += (self.endX - self.coordinateX) / self.delay;
    self.coordinateY += (self.endY - self.coordinateY) / self.delay;
    self.$outline.style.top = self.coordinateY + 'px';
    self.$outline.style.left = self.coordinateX + 'px';
    
    requestAnimationFrame(this.animateDotOutline.bind(self));
  },
  
  toggleCursorSize: function() {
    
    let self = this;
    
    if (self.cursorEnlarged) {
      
      self.$dot.style.transform = 'translate(-50%, -50%) scale(0.75)';
      self.$outline.style.transform = 'translate(-50%, -50%) scale(1.5)';
    } else {
      self.$dot.style.transform = 'translate(-50%, -50%) scale(1)';
      self.$outline.style.transform = 'translate(-50%, -50%) scale(1)';
    }
  },
  
  toggleCursorVisibility: function() {
    
    let self = this;
    
    if (self.cursorVisible) {
      
      self.$dot.style.opacity = 1;
      self.$outline.style.opacity = 1;
    } else {
      self.$dot.style.opacity = 0;
      self.$outline.style.opacity = 0;
    }
  }
}

cursor.init();