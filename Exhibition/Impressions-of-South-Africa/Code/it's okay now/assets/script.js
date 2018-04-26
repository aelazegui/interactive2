$(document).ready(function(){
	
//	
//		$('#savethepress').addClass( "showme" );
	
	//on hover, raise the img
	$("img:not('comeforward')").hover( 
		function (){ // Mouse over
		$(this).addClass("hoverimg");
	}, function() { // Mouse out
  		$(this).removeClass("hoverimg");
	});
	
	//on hover, raise the img that are in the background
	$("img.pushback").hover( 
		function (){ // Mouse over
		$(this).addClass("hoverimg");
	}, function() { // Mouse out
  		$(this).removeClass("hoverimg");
	});
	
	

	

	$('img').on('click', function (){
		$('img.comeforward').removeClass('comeforward');
		
		$('.worktitles').hide();
		$('.bodycopy').hide();
		
		$(this).addClass('comeforward');
		$(this).siblings().show();
	});

}); //end jquery