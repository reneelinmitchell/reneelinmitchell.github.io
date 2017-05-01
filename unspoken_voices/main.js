// main.js

$(window).scroll(function() {
	// right now this is an anonymous function
	// because it's within "scroll" it's
	// automatically gonna get called
	console.log($(window).scrollTop());
	// create a variable called breakpoint
	var breakpoint1 = 200;
	var breakpoint2 = 260;

	if ($(window).scrollTop() >= 200){
		$('.container').css('visibility',
			'visible').hide().fadeIn(2000);

		// $('.carousel-immigrants').css('position',
		// 	'fixed');
		// $('.slideFun1').css('z-index',
		// 	'9999');
		// 1500 = 1.5 seconds

		// make this only run once; cause scroll is once
		$(this).off('scroll')

	}
 
});

$(document).ready(function() {
   $('#aboutUs').localScroll({duration:800});
});
