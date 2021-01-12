(function($) {
'use strict';

$('.main-menu nav').meanmenu({
    meanScreenWidth: '991',
    meanMenuContainer: '.mobile-menu'
});

// PORTFOLIO SLIDER
$('.portfolio-carousel').owlCarousel({
    nav: true,
    navText: false,
    dots: false,
    autoplay: true,
    autoplayHoverPause: true,
    margin: 30,
    autoplayTimeout: 5000,
    responsive: {
    0: {
        items: 1
    },
    200: {
        items: 1
    },
    800: {
        items: 2
    },
    1000: {
        items: 3
    }
}});

// SERVICE SLIDER
$('.service-carousel').owlCarousel({
    loop: true,
    center: true,
    nav: false,
    navText: ['<div class="arrow-left"></div>', '<div class="arrow-right"></div>'],
    dots: true,
    autoplay: true,
    autoplayHoverPause: true,
    margin: 30,
    autoplayTimeout: 3000,
    responsive: {
    0: {
        items: 1
    },
    200: {
        items: 1
    },
    800: {
        items: 2
    },
    1000: {
        items: 3
    }
}});

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
$(window).load(function() {

    // HIDE PRELOADER
    setTimeout(function() {

        $('.preloader-load').fadeOut();
    }, 2000);

    setTimeout(function() {

        $('body').addClass('show-scroll');

        $('.preloader').fadeOut();
    }, 3000);
});

// DARK MODE
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