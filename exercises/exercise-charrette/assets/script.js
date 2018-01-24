$(document).ready(function(){
	
// when you click button 3, the following function happens

	$('#button-7').click(function() {
		$(this).animate({
			opacity: 0,
			marginLeft: '0.6in',
			fontSize: '24px',
		}, 10 ); //number changes the speed
	});

	var counts = 0;
	$(".btn").click(function() {
		counts += +1;
		if(
			counts<10){
			counts1 = "0" + counts
		}
		else{
			counts1 = counts;
		}
		$(".counts").text(counts1);
	});
	
	$(".reset").click(function(e){
		counts = 0;
		counts1 = "0"+counts;
		$(".counts").text(counts1);
	});


	var element, circle, d, x, y;
$("#button-13").click(function(e){
  
	element = $(this);
  
	if(element.find(".circle").length == 0)
		element.prepend("<span class='circle'></span>");
		
	circle = element.find(".circle");
	circle.removeClass("animate");
	
	if(!circle.height() && !circle.width())
  {
		d = Math.max(element.outerWidth(), element.outerHeight());
		circle.css({height: d, width: d});
	}
	
	x = e.pageX - element.offset().left - circle.width()/2;
	y = e.pageY - element.offset().top - circle.height()/2;
	
	circle.css({top: y+'px', left: x+'px'}).addClass("animate");
});

function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
};

	//$('#button-14').click(function() {
	//	$(item).toggleClass('#button-14-active'); //number changes the speed
	//});

	//$("#button-4").click(function() {
 	//	$('.pinkcircle').toggleClass('.T-ps-active');
	//});


});