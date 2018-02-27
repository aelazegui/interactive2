$(document).ready(function(){
	
// when you click button 3, the following function happens


//button 7
	$('.item').click(function() {
		$(this).animate({
			opacity: 1,
			marginLeft: Math.floor((Math.random() * 100) + 1) + '%',
		}, 100 ); //number changes the speed
	});



});