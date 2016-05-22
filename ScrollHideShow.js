$(window).bind("scroll", function() {
    if ($(this).scrollTop() > 200) {    	
        $(".section2").fadeIn();

    } else {
        $(".section2").stop().fadeOut();
    }
});