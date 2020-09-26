(function ($) {
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

const modalDarkMode = $('.modal-content');$('.dissolution').mousedown(function(event) {if (event.button === 1 && modalDarkMode.hasClass('dark-mode-enabled')) {$('.modal-overlay').html('<div class="modal-window"><div class="close-modal"><span></span></div><div class="modal-window-content"><h3>Вау, это сработало!</h3><p>1. Ночь — смена цветовой гаммы. Колесо — колёсико от мышки. Сложно было догадаться? Первый этап пройден. Начало положено.<hr>2. Предупреждение! Давайте мы не будем играть в "хакеров" — не будем лезть в чужой код. Я за честный квест. Играем честно, а иначе какой от этого смысл? ;)<hr>3. Чтобы активировать второй этап, я должен знать, что Вы прошли первый. Я должен увидеть фразу "c3eef2eee221" где-нибудь. Удачи!</p></div></div>');const elements = $('.modal-overlay, .modal-window');elements.addClass('active');$('.close-modal').on('click', function() {elements.removeClass('active');});}});

// MAGNIFIC POPUP
$('.img-poppu').magnificPopup({
    type: 'image',
    gallery: {
        enabled:true
    }
});

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
let preloader = document.getElementById('preloader_preload');
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

// ЕСЛИ ВЫ ЗДЕСЬ, ЧТОБЫ НАЙТИ РАЗГАДКУ К КВЕСТУ, ТО ЭТО ВАШЕ ДЕЛО.
// Я СЧИТАЮ, ЧТО ИГРАТЬ НУЖНО ЧЕСТНО, А ИНАЧЕ КАКОЙ ОТ ЭТОГО СМЫСЛ?