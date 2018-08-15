$(function(){
	$(window).scroll(function() {
		if($(this).scrollTop() >= 200) {
			$('.menu-block-nav').addClass('stickytop');
		}
		else{
			$('.menu-block-nav').removeClass('stickytop');
		}
	});

	$('.menu_link').click( function(){ 
		var scroll_el = $(this).attr('href'); 
		if ($(scroll_el).length != 0) { 
			$('html, body').animate({ scrollTop: $(scroll_el).offset().top-90 }, 500);
		}
	});
});