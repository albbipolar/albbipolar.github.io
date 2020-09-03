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
    nav: true,
    navContainerClass: 'container-owl',
    navClass: true,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive:{
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
// const modalBackground = $('.modal-content');
// const modalElements = $(`.modal-content h2,
//     .modal-content p,
//     .modal-content a,
//     .modal-content li`);
// const modalClose = $('.modal-content .lr, .modal-content .rl');
// const modalTextBackground = $('.modal-content .text-highlight');

// $('#switch').on('click', function() {


//     if ($('#switch').is(':checked')){

//         modalBackground.css('background', '#181818');
//         modalElements.css('color', '#fff');
//         modalClose.css('background-color', '#fff');
//         modalTextBackground.css('background-image', 'none');
//     } else {
//         modalBackground.css('background', '#fff');
//         modalElements.css('color', '#181818');
//         modalClose.css('background-color', '#181818');
//         modalTextBackground.css('background-image', 'url(img/bg-highlight.png)');
//     }
// });

$('.portfolio-link').on('click', function() {

    $(this).addClass('portfolio-active');

    if($(this).hasClass('portfolio-active')) {

        $('.dark-mode').css({
            'display': 'block',
            'width': '75px',
            'z-index': '9999999',
            'position': 'fixed',
            'top': '10px',
            'left': '10px'
        });
    }
});
$('.close-modal').on('click', function() {

    $('.dark-mode').css('display', 'none');
});
$('#switch').on('click', function() {
    alert('Функция ночной темы находится в разработке');
});