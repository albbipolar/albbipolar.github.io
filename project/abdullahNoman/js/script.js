$(document).ready(function() {

	$('#scroll-bottom').click(function () {
		let scrollToBlock = $('.section-about').offset().top;
		$('html, body').animate({scrollTop: scrollToBlock}, 600);
	});
});