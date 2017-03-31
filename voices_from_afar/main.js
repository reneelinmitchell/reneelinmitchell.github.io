// main.js

$(window).scroll(function() {
	// right now this is an anonymous function
	// because it's within "scroll" it's
	// automatically gonna get called
	console.log($(window).scrollTop());
	// create a variable called breakpoint
	var breakpoint1 = 100;

	if ($(window).scrollTop() >= breakpoint1){
		$('.container').css('visibility',
			'visible').hide().fadeIn(2000);
		// 1500 = 1.5 seconds

		// make this only run once; cause scroll is once
		$(this).off('scroll')

	}

	var wrap = $("#wrap");

	var breakpoint2 = $(this).scrollTop();
	if ( breakpoint2 >= 120){
        $('carousel-immigrants').css(position:'absolute');
        $('slideFun1').css(z-index: '9999');  
    }

    else {
        $('carousel-immigrants').css(position:'fixed');  
    }   
});
