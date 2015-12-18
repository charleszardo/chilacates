$(document).ready(function() {
	function checkVisible( elm, eval ) {
	    eval = eval || "visible";
	    var vpH = $(window).height(), // Viewport Height
	        st = $(window).scrollTop(), // Scroll Top
	        y = $(elm).offset().top,
	        elementHeight = $(elm).height();
    
	    if (eval == "visible") return ((y < (vpH + st)) && (y > (st - elementHeight)));
	    if (eval == "above") return ((y < (vpH + st)));
	}
	
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {

    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 900, function(){
   
      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });
  });
  
  // Slide in elements on scroll
  $(window).scroll(function() {
    if (checkVisible($('#jumbotron'))) {
			$('#logo').fadeOut(1000);
    } else {
			$('#logo').fadeIn(1000);
    }
		
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
        }
    });
  });
})

