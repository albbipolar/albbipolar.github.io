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
    
    $('.downcounter-section-first').fadeOut(1500);

    setTimeout(function() {

      $('.content-section-first').fadeIn(3000);
    }, 3000);
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
  
  $('.section-first-response').slideDown();
  $('.section-first-text').html('<h3>Пока горит бенгальский огонь, я думаю, стоит попытаться снова.</h3><br><p>Я, конечно, понимаю, что первое задание должно быть простым, но просто нажать один раз на него, серьёзно? К слову, я дал подсказку в прошлом предложении, думаю, теперь легко догадаться.</p>');
});

$('.section-reference-first').on('dblclick', function() {
  
  $('.section-first-text').html('<h3>Отлично, первая загадка отгадана, поздравляю.</h3><br><p>Три правила Нового года: не забыть купить мандарины, окутать искусственную ёлку новогодней гирляндой, и самое главное — не лайкать персонажа, чтобы его не выгнали.</p>');
});

$('.section-first-button').on('click', function() {
  
  $('.section-first-response').slideUp();
});

// REFERENCE SECOND SECTION
$('.section-reference-second').on('click', function() {

  $('.section-second-response').slideDown();
  // $('.section-second-text').html('<h3>Соглашусь, это было непросто, но вторая загадка отгадана, мои поздраления!</h3><br><p>Образовательная минутка: если персонаж не пишет сообщение, значит он пишет статус. Если не пишет статус, значит пишет сообщение. В некоторых случаях это правило работает строго наоборот.</p>');
  $('.section-second-text').html('<h3>Демонстрационный вариант второго задания</h3><br><p>Данный вариант является примером, который показывает, как будет выглядеть задание второй секции. Прошу заметить, при наведении на этот круг, состояние курсора меняется. Обращаю внимание, что данный круг генерируется в разных местах экрана, когда прогружается страница. Обновите страницу, чтобы проверить. Если разгадать загадку третьей секции, то можно найти подсказку, чтобы облегчить эту задачу. Окончательный вариант задания будет доступен по открытию секции. Желаю удачи, надеясь, что задача не будет решена.</p>');
});

$('.section-second-button').on('click', function() {
  
  $('.section-second-response').slideUp();
});

// REFERENCE THIRD SECTION
$('.section-reference-third').on('click', function() {

  $('.section-third-response').slideDown();
  $('.section-third-text').html('<h3>Найти данное задание было просто, а вот решить его...</h3><br><p></p>');
});

$('.section-third-button').on('click', function() {
  
  $('.section-third-response').slideUp();
});

$('.section-statistics-table-reference .section-periodic-reference').on('click', function() {

  $(this).toggleClass('intense-work');

  if ($('.reference-first').hasClass('intense-work') && $('.reference-second').hasClass('intense-work') && $('.reference-sixth').hasClass('intense-work') && $('.reference-seventh').hasClass('intense-work') && $('.reference-eighth').hasClass('intense-work') && !$('.reference-null').hasClass('intense-work')) {

    console.log(true);
  }
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

// TYPED TEXT
let typedFirst = new Typed('#typed-first', {
  strings: ['искренние^3000', 'сердечные^3000', 'душевные^3000'],
  typeSpeed: 250,
  backSpeed: 250,
  showCursor: false,
  loop: true
});

let typedSecond = new Typed('#typed-second', {
  strings: ['история^3000', 'случай^3000', 'прошлое^3000'],
  typeSpeed: 250,
  backSpeed: 250,
  showCursor: false,
  loop: true
});

let typedThird = new Typed('#typed-third', {
  strings: ['самый^3000', 'особенный^3000', 'уникальный^3000'],
  typeSpeed: 250,
  backSpeed: 250,
  showCursor: false,
  loop: true
});

let typedFourth = new Typed('#typed-fourth', {
  strings: ['великое^3000', 'космическое^3000', 'безмерное^3000'],
  typeSpeed: 250,
  backSpeed: 250,
  showCursor: false,
  loop: true
});

// GENERATING REFERENCE IN RANDOM PLACE SCREEN
$('.section-reference-second').css({
  
  // GENERATING COORDINATE TOP
  top: Math.random(0, 1) * document.documentElement.clientHeight,
  // GENERATING COORDINATE LEFT
  left: Math.random(0, 1) * document.documentElement.clientWidth,
  // GENERATING COORDINATE RIGHT
  right: Math.random(0, 1) * document.documentElement.clientWidth,
  // GENERATING COORDINATE BOTTOM
  bottom: Math.random(0, 1) * document.documentElement.clientHeight
});

// CLICK CTRL + F12 TO SHOW A HINT
$(window).keydown(function(event) {
  
  if (event.ctrlKey && event.keyCode === 123) {
    
    let referenceHint = prompt('Пожалуйста, введите сюда подсказку от автора:').toLowerCase();
    
    // ПОДСКАЗКА
    if (referenceHint === 'подсказка') {
      
      $('.section-reference-second').css({background: 'rgba(255, 255, 255, 0.02)'});
    }
  }
});

// ONCLICK ANIMATION EFFECT
let verificationLetter = '';

const letterSpan = document.querySelectorAll('.section-letter');

letterSpan.forEach(event => {
  
  event.addEventListener('click', () => {
    
    $(event).fadeOut(100).fadeIn(100);
    
    verificationLetter += event.textContent;
    
    verificationLetter.length >= 4 && verificationLetter !== 'вход' ? verificationLetter = '' : false;
    
    if (event.textContent === 'д') {
      
      if (verificationLetter === 'вход' && verificationLetter.length === 4) {
        
        console.log(true);
        
        verificationLetter = '';
      }
    }
    
    event.textContent === 'в' ? verificationLetter = 'в' : false;
  });
});

document.onkeydown = function(event) {

  if (event.keyCode === 123) {return false;}
  if (event.ctrlKey && event.shiftKey && event.keyCode == `I`.charCodeAt(0)) {return false;}
  if (event.ctrlKey && event.shiftKey && event.keyCode == `J`.charCodeAt(0)) {return false;}
  if (event.ctrlKey && event.keyCode == `U`.charCodeAt(0)) {return false;}
}
$(document).on(`contextmenu`, function(event) {
  
  event.preventDefault();
});