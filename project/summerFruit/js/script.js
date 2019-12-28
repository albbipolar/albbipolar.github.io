$('.bg').mousemove(function(e){
	let movedX = (e.pageX * -1 / 50);
	let movedY = (e.pageY * -1 / 100);
	$(this).css('background-position', movedX + 'px ' + movedY + 'px');
});