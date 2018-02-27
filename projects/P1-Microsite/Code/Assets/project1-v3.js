$(document).ready(function(){

	$('.item').click(function() {
			function randomFive() {
  			return getRandomInt(-2, 3) * 50; 
			}
			
			function getRandomInt(min, max) {
  			return Math.floor(Math.random() * (max - min + 1) + min);
			}

		$(this).animate({
			opacity: 1,
//			marginLeft: Math.floor((Math.random() * 100) + 1) + '%',
			marginLeft: randomFive(-10, 10) + '%',
		}, 200 ); //number changes the speed
	});

});



// marginLeft: Math.floor((Math.random() * 100) + 1) + '%',
// 		}, 200 ); //number changes the speed

// marginLeft: getRandomInt + '%'

//function getRandomInt(min, max) {
//  		return Math.floor(Math.random() * (500 - 50 + 1) + 50);
//}