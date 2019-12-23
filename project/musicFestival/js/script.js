$(document).ready(function() {

	$('.fa-bars').on('click', function() {

		$('.navigation').toggleClass('mobile-menu');
	});










	$('.timeline').addClass('hidden');
	// добавить скрытый класс по умолчанию

		$('.fa-circle-o').on('click', function() {
			// при клике чередовать класс у соседнего параграфа
			$(this).siblings('.timeline').toggleClass('active');
		});
});





// $('.timeline').addClass('hidden');
// 	//добавить класс hidden

// 		$('.fa-circle-o').on('click', function() {
// 			//удалить класс hidden и добавить active
// 			$(this).siblings('.timeline').removeClass('hidden').addClass('active');
// 		});