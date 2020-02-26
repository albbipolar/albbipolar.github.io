(function ($) {
 "use strict";
 
$('.menu>li').slice(-2).addClass('last-elements'); 
 
 
  $(window).on('scroll',function() {    
   var scroll = $(window).scrollTop();
   if (scroll < 245) {
    $(".header-sticky").removeClass("sticky");
   }else{
    $(".header-sticky").addClass("sticky");
   }
  }); 

 
$('.main-menu nav').meanmenu({
	meanScreenWidth: "991",
	meanMenuContainer: '.mobile-menu'
}); 
 
$('.grid').imagesLoaded( function() {
	
// FILTER ITEMS ON BUTTON CLICK
$('.portfolio-menu').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});	

// INIT ISOTOPE
var $grid = $('.grid').isotope({
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
    gallery:{
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
var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};

var hamburgers = document.querySelectorAll(".hamburger");
if (hamburgers.length > 0) {
  forEach(hamburgers, function(hamburger) {
	hamburger.addEventListener("click", function() {
	  this.classList.toggle("is-active");
	}, false);
  });
}

// SCROLL UP
$(window).on('scroll',function () {
    if($(window).scrollTop()>200) {
        $("#toTop").fadeIn();
    } else {
        $("#toTop").fadeOut();
    }
});
$('#toTop').on('click', function() {
    $("html,body").animate({
        scrollTop:0
    }, 500)
});

// LINK SCROLL
$(function(){
        $("a[href^='#']").click(function(){
                var _href = $(this).attr("href");
                $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
                return false;
        });
});

// CIRCULAR BARS - KNOB	
if(typeof($.fn.knob) != 'undefined') {
	$('.knob').each(function () {
        var $this = $(this),
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