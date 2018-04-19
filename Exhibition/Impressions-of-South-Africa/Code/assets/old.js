$(document).ready(function(){
	
//	
//		$('#savethepress').addClass( "showme" );
	
	var images = $('img');	
	var forwardnow = $('img').has('comeforward');
	
	
	$("img:not('comeforward')").hover( 
		function (){ // Mouse over
		$(this).addClass("hoverimg");
	}, function() { // Mouse out
  		$(this).removeClass("hoverimg");
	});
	
	
	$('img').on('click', function (){
		if ($('img').hasClass('comeforward')) {
			
			//$(this).addClass("makeroom");
			$(this).animate({top: '50px', left: '50px'}, 1500, function () {
			console.log('i moved it!');
	});
		} else {
			$('img:not(this)')
				.addClass("pushback")
				//.addClass('blurimg');
			$(this).addClass("comeforward");
		}
	});
	
	
	$('#savethepress.comeforward').click(function(){
		$(".worktitles .bodycopy").fadeIn();
	});
	
	
//	
//	$('img.comeForward').on('click', function(){ 
//		$(this).addClass('makeRoom');
//	});	
	
	
	
//	$("img:not('comeforward')").hover( function (){ // Mouse over
//		$(this).addClass("makeroom");
//	}, function() { // Mouse out
//  		$(this).removeClass("makeroom");
//});
	
		
	
//	$('img').on('click', function (){
//		//all images will push back
//  	$('img:not(this)').addClass("pushback");
//		//the image clicked on will come forward
//	$(this).addClass("comeforward");
//	});	
//	
//	
//	
//	//on click, images that already have comeforeword applied to it
//	

//	
//	
//	
//	
//	
//if ($(this).is('comeforward')) { 		//if the thing clicked is already 'comefoward'
//			$(this).on('click', function (){ //then on click, animate it
//				$(this).animate({
//        			left: '250px',
//        			opacity: '0.5',
//					height: '150px',
//        			width: '150px'	
//	
//	
	
//	images.on('click', function (){
//		$(this).toggleClass('comeforward');
//		console.log ('toggleme');
//		if ($(this).is('comeforward')) {
//			images.not(this).each(function(){
//         	$(this).addClass('pushback');
//			$(this.target).animate(({height:'hide', opacity:'hide'}, slidespeed));
//             });
//			$(this).removeClass('pushback');
//	});
	
	
	
//	
//		
//		if ($(this).is('pushback')) {
//			$(this).removeClass("pushback");
//			$(this).addClass("comefoward");
//			images.addClass("pushback");}
//	});	
//	
	
	
	
	
	
//	images.hover(function (){
//		$(this).addClass('hoverrise');
//	}, function() {
//		$(this).removeClass('hoverrise');
//	}
//	});
	
	
	
	
	
//$('#savethepress').on('click', function (event) {
//	$("#savethepress").addClass('comeforward');
//	$("#savethepress").removeClass('pushback');
//	});
//
//document.getElementsByClassName('.photo').on('click',function(event) {
//	
//} 
//											 
//var artwork = 
//	
//	
//function addOneToZ (){
//	document.querySelectorAll(Image).style.zIndex = + 1;
//	}
//	
//	
//	function getArtwork() {
//		var artwork = document.querySelectorAll('Image');
//		artwork.click(function)
//		
//		
//		element.classList.toggle("mystyle");
////	
//		
//var allArtwork = document.querySelectorAll(Image);
//var zValue = allArtwork.style.zIndex;
//
//		
//$('Struckarock').on('click', function (event) {
//
//if (allArtwork.style.zIndex >= 100)
//	
//	
//	allArtwork.style.zIndex = 100;
//	
//	if (allArtwork.style.zIndex > 100) {
//	allArtwork.style.zIndex = - 1;
//	}
//		
//		
		
		
		
		
//$(function() {
//    var boxes = $("photo");
//    boxes.click(function() {
//        var el = $(this), 
//            max = 0;
//        boxes.each(function() {
//            var z = parseInt( $( this ).css( "z-index" ), 10 );
//            max = Math.max( max, z );
//        });
//        el.css("z-index", max + 1 );
//    });
//});


//function myFunction() {
//    var element = document.getElementById("savethepress");
//    element.classList.toggle("mystyle");
//}
//
//  $("p").click(function(){
//        $(this).hide();
//    });

//$("img").click(function(){
//    document.getElementById("img").style.zIndex = "100"
//});
	
	
//document.getElementById("img1").style.zIndex = "100"
	
	
});

//maybe on img click, a duplicate comes forward & opacity increases
//and the actual one opacity 0 while the group pushes into background.