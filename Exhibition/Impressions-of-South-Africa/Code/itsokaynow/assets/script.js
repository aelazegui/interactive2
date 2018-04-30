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
		$(this).removeClass('pushback');
		
		$('.worktitles').hide();
		$('.bodycopy').hide();
		
		$('img').not(this).parent('group-holder').hide();
		$('img').not(this).addClass("pushback");
		$(this).addClass('comeforward');
		$(this).siblings().show();
	});

}); //end jquery