$(window).bind("scroll", function() {
    if ($(this).scrollTop() > 195) {    	
        $(".section2").fadeIn();

    } else {
        $(".section2").stop().fadeOut();
    }
});

