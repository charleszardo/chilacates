$(document).ready(function() {
	$("#logo").hide();
	
	$(window).scroll(function() {
	    if (checkVisible($('#jumbotron'))) {
				$('#logo').fadeOut(1000);
	    } else {
				$('#logo').fadeIn(1000);
	    }
	});

	function checkVisible( elm, eval ) {
	    eval = eval || "visible";
	    var vpH = $(window).height(), // Viewport Height
	        st = $(window).scrollTop(), // Scroll Top
	        y = $(elm).offset().top,
	        elementHeight = $(elm).height();
    
	    if (eval == "visible") return ((y < (vpH + st)) && (y > (st - elementHeight)));
	    if (eval == "above") return ((y < (vpH + st)));
	}
})

