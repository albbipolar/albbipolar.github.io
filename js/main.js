(function($) {
'use strict';

$('.menu > li').slice(-2).addClass('last-elements');
    
    $(window).on('scroll',function() {
        const scroll = $(window).scrollTop();

        if (scroll < 245) {
            $('.header-sticky').removeClass('sticky');
        } else {
            $('header-sticky').addClass('sticky');
        }
    });

    $('.main-menu nav').meanmenu({
        meanScreenWidth: '991',
        meanMenuContainer: '.mobile-menu'
    });

    $('.grid').imagesLoaded( function() {

    // FILTER ITEMS ON BUTTON CLICK
    $('.portfolio-menu').on( 'click', 'button', function() {
        const filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });

    // INIT ISOTOPE
    const $grid = $('.grid').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {

        // USE OUTER WIDTH OF GRID-SIZER FOR COLUMNWIDTH
        columnWidth: '.grid-item',
    }
    });
});

$('.portfolio-menu button').on('click', function(event) {
    $(this).siblings('.active').removeClass('active');
    $(this).addClass('active');
    event.preventDefault();
});

// SLIDER
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
    0:{
        items: 1
    },
    200:{
        items: 1
    },
    800:{
        items: 2
    },
    1000:{
        items: 3
    }
}});

// MAGNIFIC POPUP
$('.img-poppu').magnificPopup({
    type: 'image',
    gallery: {
        enabled:true
    }
});

let verificationClickCount = 0;$('.third-stage').on('click', function() {verificationClickCount++;});$('.third-stage').mousedown(function(event) {if (event.button === 2) {if (verificationClickCount === 10) {const verificationFurmula = prompt('Метод подбора ещё никто не отменял. Напиши, пожалуйста, формулу, в которую ты подставил(а) данные. Я помог тебе, сделав образец. Подставь свои значения.', '(oldNickname + newNickname) - veryLongNickname = 10');if (verificationFurmula === '(Yasherka + NoLimits) - python = 10') {const verificationOldNickname = prompt('Математически корректная формула. Проверим ещё кое-что? Напиши мне свой nickname, когда мы познакомились (слитно, без пробелов).');if (verificationOldNickname === 'Yasherka') {const verificationNewNickname = prompt('Хммм, отлично, а напиши-ка мне свой nickname, который у тебя сейчас (слитно, без пробелов). Я чисто хочу убедиться...');if (verificationNewNickname === 'NoLimits') {const verificationYearNickname = prompt('Ты хорошо справляешься с моими вопросами. Дальше — сложнее. Nickname, который ты использовал(а) с 2018 по 2019 год (слитно, без пробелов). Зима. Здесь, я надеюсь, ты сам(а) справишься?');if (verificationYearNickname === '.Destroyer') {const verificationMyNowNickname = prompt('Так, я понял, что свои nicknam\'ы ты знаешь хорошо. Теперь проверим, как знаешь мои. Какой nickname у меня сейчас (слитно, без пробелов, nickname не менялся)?');if (verificationMyNowNickname === 'python') {const verificationMyOldNickname = prompt('Устал(а)? Задаю тебе последний вопрос. Напиши мой ник (слитно, без пробелов, без лишних символов), когда мы с тобой познакомились. Я искренне верю, что ты его не помнишь. Придётся писать автору...');if (verificationMyOldNickname === 'NoMercy') {$('.third-stage').html('создание космоса. Мне очень нравится, что ты разгадываешь любые мои отсылки. На этом квест окончен, но ты не расслабляйся. Декабрь — сильный мороз. И этот мороз будет не только на улице, но ещё в душе... Тёплые вещи-то у тебя есть? Чтобы узнать главный ответ, нужно написать автору данный код: "eef2e2e5f2".');} else {$('.third-stage').html('создание космоса. Нет, ' + verificationMyOldNickname + ' —  это не то. У меня был другой nickname, когда мы познакомились. Пишем автору?');verificationClickCount = 0;}} else {$('.third-stage').html('Нет, ' + verificationMyNowNickname + ' — это не мой nickname, который я использую в данный момент, увы.');verificationClickCount = 0;}} else {$('.third-stage').html('создание космоса. ' + verificationYearNickname + ' — это явно не тот nickname, который ты использовал(а) с 2018 по 2019 год. Зима.');verificationClickCount = 0;}} else {$('.third-stage').html('создание космоса. Упс, ' + verificationNewNickname + ' — это не твой nickname, который ты используешь сейчас.');verificationClickCount = 0;}} else {$('.third-stage').html('создание космоса. ' + verificationOldNickname + ' — это не то. У тебя был другой nickname, когда мы познакомились. Где-то ошибка.');verificationClickCount = 0;}} else {$('.third-stage').html('создание космоса. ' + verificationFurmula + ' — ошибка, причинами которой могут быть: неидентифицированная формула, некорректный ответ.');verificationClickCount = 0;}} else {verificationClickCount = 0;}}});$('.third-stage').on('contextmenu',function(event){event.preventDefault();});

// MENU-TOGGLE
$('.menu-toggle').on('click', function(){
    if( $('.menu-toggle').hasClass('is-active') ){
		$('.main-menu nav').removeClass('menu-open');
	} else {
		$('.main-menu nav').addClass('menu-open');
	}
});

// HAMBURGER JS
const forEach = function(t, o, r) {
    if ('[object Object]' === Object.prototype.toString.call(t)) {
        for (let c in t) {
            Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t);
        }
    } else {
        for (let e = 0, l = t.length; l > e; e++) {
            o.call(r, t[e], e, t);
        }
    }
};

const hamburgers = document.querySelectorAll('.hamburger');

if (hamburgers.length > 0) {
  forEach(hamburgers, function(hamburger) {
	hamburger.addEventListener('click', function() {
	  this.classList.toggle('is-active');
	}, false);
  });
}

// SCROLL UP
$(window).on('scroll', function () {
    if ($(window).scrollTop() > 200) {
        $('#toTop').fadeIn();
    } else {
        $('#toTop').fadeOut();
    }
});
$('#toTop').on('click', function() {
    $('html, body').animate({
        scrollTop: 0
    }, 500)
});

// LINK SCROLL
$(function(){
        $('header a[href^="#"]').click(function(){
                const _href = $(this).attr('href');
                $('html, body').animate({scrollTop: $(_href).offset().top + 'px'});
                return false;
        });
});

// CIRCULAR BARS - KNOB	
if(typeof($.fn.knob) != 'undefined') {
	$('.knob').each(function () {
        const $this = $(this),
        knobVal = $this.attr('data-rel');

        $this.knob({
            'draw' : function () { 
                $(this.i).val(this.cv + '%')
            }
        });

        $this.appear(function() {
            $({
                value: 0
            }).animate({
                value: knobVal
            }, {
                duration: 2000,
                easing: 'swing',
                step: function () {
                    $this.val(Math.ceil(this.value)).trigger('change');
                }
            });
        }, {accX: 0, accY: -150});
    });
}})(jQuery);

// TEXT GREETING
let greeting;

const greetingDay = new Date();
const greetingHour = greetingDay.getHours();

    if (greetingHour >= 5 && greetingHour < 12) {
        greeting = 'Доброе утро';
    }
    else if (greetingHour >= 12 && greetingHour < 18) {
        greeting = 'Добрый день';
    }
    else if (greetingHour >= 18 && greetingHour < 24) {
        greeting = 'Добрый вечер';
    }
    else if (greetingHour >= 0 && greetingHour < 5) {
        greeting = 'Доброй ночи';
    } else {
        greeting = 'Доброго времени суток';
    }
document.getElementById('greeting-text').innerHTML = greeting;

// PRELOADER
let preloader = document.getElementById('preloader-preload');
let documentBody = document.getElementsByTagName('body')[0];

documentBody.style = 'overflow-y: hidden';

function fadeOut(event) {
    event.style.opacity = 1;
    let interhellopreloader = setInterval(function() {
        event.style.opacity = event.style.opacity - 0.05;
        if (event.style.opacity <= 0.05) {
            clearInterval(interhellopreloader);
            preloader.style.display = 'none';
            documentBody.style = '';
        }
    }, 16);
}
window.onload = function() {
    setTimeout(function() {
        fadeOut(preloader);
    }, 3000);
};

// DARK MODE
$('.portfolio-link').on('click', function() {

    $(this).addClass('portfolio-active');
});
$('.close-modal').on('click', function() {

    $('.portfolio-link').removeClass('portfolio-active');
});

$(function() {
    
    $('.modal-swipe').swipe( {

        swipeRight: function() {

            $('.modal-content').addClass('dark-mode-enabled');
            $('.modal-swipe').addClass('swipe-active');
            $('.swipe-item img').addClass('item-active');

        },
        swipeLeft: function() {

            $('.modal-content').removeClass('dark-mode-enabled');
            $('.modal-swipe').removeClass('swipe-active');
            $('.swipe-item img').removeClass('item-active');
        }

    });
});

$('.modal-swipe').hover(function() {

    $('.swipe-item p').hide();
    $('.swipe-item img').show();
}, function() {

    $('.swipe-item p').show();
    $('.swipe-item img').hide();
});

// BUTTON SHOW MORE
$('.btn-show-more').on('click', function() {

    alert('Данная функция находится на стадии разработки.');
});


// ЕСЛИ ВЫ ЗДЕСЬ, ЧТОБЫ НАЙТИ РАЗГАДКУ К КВЕСТУ, ТО ЭТО ВАШЕ ДЕЛО.
// Я СЧИТАЮ, ЧТО ИГРАТЬ НУЖНО ЧЕСТНО, А ИНАЧЕ КАКОЙ ОТ ЭТОГО СМЫСЛ?