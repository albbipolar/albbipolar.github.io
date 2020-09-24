'use strict';

// STICKY NAVIGATION

$(document).ready(function() {
    
    if (window.innerWidth > 540) {

        $('#fullpage').fullpage({
            anchors: ['home', 'about', 'team', 'services', 'blog', 'contact'],
            css3: true,
            scrollingSpeed: 1000,
            afterLoad: function(anchorLink, index) {
                if (index === 1) {
                    $('.toggle-button').hide();
                }
                else if (index === 2 || index === 4 || index === 5) {
                    $('.toggle-button').css({'display': 'block'});
                    $('.toggle-button').removeClass('button-dark')
                }
                else if (index === 3 || index === 6) {
                    $('.toggle-button').css({'display': 'block'});
                    $('.toggle-button').addClass('button-dark');
                } else {
                    $('.toggle-button').show();
                }
            }
        });
    } else {

        // CHANGE LINKS
        
        $('.toggle-main').html(
            `<li><a href="#mobile-home">Home</a></li>
            <li><a href="#mobile-about">About Us</a></li>
            <li><a href="#mobile-team">Team</a></li>
            <li><a href="#mobile-services">Services</a></li>
            <li><a href="#mobile-blog">Blog</a></li>
            <li><a href="#mobile-contact">Contact Us</a></li>`
        );

        $('.header-title a').attr('href', '#mobile-services');

        $('.header-scroll').html(
            `<a href="#mobile-about">
            <span></span>
            <span></span>
            <span></span>
            </a>`
        );

        // LINK SCROLL
        
        $(`a[href^='#']`).click(function() {

            let href = $(this).attr('href');
            
            $('html, body').animate({scrollTop: $(href).offset().top + 'px'});

            // CLOSE MENU
            $('.toggle-button').removeClass('button-active');
            $('.toggle-navigation').removeClass('overlay-show');
            $('.toggle-overlay').removeClass('overlay-show');

            return false;
        });
    }
});

$('.toggle-button, .toggle-overlay').click(function() {
    
    $('.toggle-button').toggleClass('button-active');
    $('.toggle-overlay').toggleClass('overlay-show');
    $('.toggle-navigation').toggleClass('overlay-show');
});

const linkList = document.getElementById('toggle-navigation').getElementsByTagName('a');

[].forEach.call(linkList, function(event) {

    event.addEventListener('click', function () {
        // CLOSE MENU
        $('.toggle-button').removeClass('button-active');
        $('.toggle-navigation').removeClass('overlay-show');
        $('.toggle-overlay').removeClass('overlay-show');
    });
});

// PARALLAX

const scene = document.getElementById('scene');
const parallaxInstance = new Parallax(scene);

// PRELOADER

$(window).load(function() {

    let counter = 0;
    let percent = 0;
    let interval = setInterval(function() {
        
        $('.preloader-page .preloader-counter h2').html(percent + '%');
        $('.preloader-page .preloader-counter hr').css('width', percent + '%');
        
        counter++;
        percent++;
        
        if (counter === 101) {
            
            clearInterval(interval);
            
            setTimeout(function() {
                
                $('.preloader').addClass('preloader-right-easing');
            
            }, 1000);
            
            setTimeout(function() {
                
                $('.preloader').fadeOut();
                
            }, 2000);
        
        }
    }, 25);
});

// UNSUPPORTING HORIZONTAL ORIENTATION

$(window).resize(function() {

    if (window.orientation === 90 || window.orientation === -90) {
    
        document.write(`<div style="
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background: #1d1d1d;
        width: 100%;
        height: 100%;
        color: #fff;
        text-align: center;
        font-size: 24px">
        
        <p>Unfortunately, this site does not support horizontal screen orientation. Please turn the screen over and reload the page.</p>
        <p>К сожалению, данный сайт не поддерживает горизонтальную ориентацию экрана. Пожалуйста, переверните экран и перезагрузите страницу.</p>
        
        </div>`);
    }

});


// MODAL WINDOW

const elements = $('.modal-overlay, .modal-window');

$('.modal-button').on('click', function() {
    elements.addClass('active');
});

$('.close-modal').on('click', function() {
    elements.removeClass('active');
});

let touchtime = 0;

$('.modal-overlay').on('click', function() {

    if (touchtime === 0) {
        
        touchtime = new Date().getTime();

    } else {

        if (((new Date().getTime()) - touchtime) < 1000) {

            elements.removeClass('active');
            touchtime = 0;
            
        } else {
            touchtime = new Date().getTime();
        }
    }
});