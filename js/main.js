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
		  offset: 150,
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
	        scrollTop: target_element.offset().top - $('.nav').height() - target_element.css("marginTop").replace('px', '')
	    }, 900);
	    return false;
	});

});

