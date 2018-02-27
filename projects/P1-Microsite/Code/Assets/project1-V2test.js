$(document).ready(function(){
	
// when you click button 3, the following function happens


//button 7
	$('.item').click(function() {
		$(this).animate({
			opacity: 0,
			marginLeft: '40%',
		}, 200 ); //number changes the speed
		$( "this" ).remove()
	});

/* if $('.item') moves to the right,  make the one above it move down?



});