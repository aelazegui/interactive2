$(document).ready(function(){

	$('.item').click(function() {
		$(this).animate({
			opacity: 1,
			marginLeft: Math.floor((Math.random() * 100) + 1) + '%',
		}, 200 ); //number changes the speed
	});

});