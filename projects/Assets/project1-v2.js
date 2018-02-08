$(document).ready(function(){
	
// when you click button 3, the following function happens


//button 7
	$('.item').click(function() {
		$(this).animate({
			opacity: 0,
			marginLeft: '50%',
		}, 100 ); //number changes the speed
		$( "this" ).remove()
	});



});