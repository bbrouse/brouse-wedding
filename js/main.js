$(document).ready(function(){

	//fancybox.js init
	$('.fancybox').fancybox({
		openEffect : 'none',
		closeEffect : 'none',
		prevEffect : 'none',
		nextEffect : 'none',

		arrows : false,
		helpers : {
			media : {},
			buttons : {}
		}
	});



	//wow.js init
	wow = new WOW(
	    {
		  animateClass: 'animated',
		  mobile: false,
		  offset: 100
		}
	);
	wow.init();

	$(".header_button").click(function(event) {
		var target_element = null;
		var id = event.target.id
		console.log(id)
		if (id === "header_directions"){
			target_element = $("#directions_section");
		}
		else if (id === "header_venue"){
			target_element = $("#venue_section");
		}
		else if (id === "header_party"){
			target_element = $("#party_section");
		}
		else if (id === "header_registry"){
			target_element = $("#registry_section");
		}

	    $('html, body').animate({
	        scrollTop: target_element.offset().top - 10
	    }, 900);
	    return false;
	});

	//sticky nav bar
	// grab the initial top offset of the navigation 
   	var stickyNavTop = $('.nav').offset().top;
   	
   	// our function that decides weather the navigation bar should have "fixed" css position or not.
   	var stickyNav = function(){
	    var scrollTop = $(window).scrollTop(); // our current vertical position from the top

	    // if we've scrolled more than the navigation, change its position to fixed to stick to top,
	    // otherwise change it back to relative
	    console.log("checking sticky nav")
	    if (scrollTop > stickyNavTop) { 
	        $('.nav').addClass('sticky');
	    } else {
	        $('.nav').removeClass('sticky'); 
	    }
	};

	stickyNav();
	// and run it again every time you scroll
	$(window).scroll(function() {
		stickyNav();
	});

});

