$(document).ready(function() {
	// функция движения background'a, если ширина экрана > n px;
  if ($(window).width() > 1440) {
  	// изменение background'а при движении мыши;
  	$('.backgoundg-mousemove').mousemove(function(event) {
  		let movedX = (event.pageX * -1 / 50);
  		let movedY = (event.pageY * -1 / 100);
  		$(this).css('background-position', movedX + 'px ' + movedY + 'px');
  	});
  };
  // адаптивное меню;
  $('.adaptive-menu i').on('click', function() {
  	$('.navigation').toggleClass('mobile-menu');
  });
});