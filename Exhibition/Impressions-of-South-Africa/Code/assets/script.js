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
	$("img.pushback").not(this).hover( 
		function (){ // Mouse over
		$(this).addClass("hoverimg");
	}, function() { // Mouse out
  		$(this).removeClass("hoverimg");
	});
	
	

	$('img').on('click', function (){

	var selectparents = $(this).parents()
	var uncles = selectparents.siblings();
		
		$('img.comeforward').removeClass('comeforward');
		
		$('.worktitles').hide();
		$('.bodycopy').hide();
		uncles.hide();
		
		$('img').not(this).addClass("pushback");
		$(this).addClass('comeforward');
		$(this).siblings().addClass('showmedem');
		$(this).siblings().show();
		selectparents.show();
		$(this).siblings('.bodycopy .worktitles').show();
	});

}); //end jquery