$(document).ready(function() {

	$('.j-header__menu').on('click',function(){
		 $(this).addClass('active');
	});

	$('.j-menuToggle').on('click',function(){
		$('body').toggleClass('menuMobile');
		
		return false;
	});


	// $('.j-menuToggle').click(function(){

	// 	var selectedAccordion = $(this).parent().find('.header__navbar');

	// 	if ( selectedAccordion.is(':visible') ){  // TRUE
	// 		selectedAccordion.slideUp(300);

	// 	} else { //FALSE
	// 		$('.header__navbar').slideUp(300);
	// 		selectedAccordion.slideDown(300);
	// 	}

 // 	}); --> menu portfolio

 	$('.j-serviceBtn').click(function() {

 		if ('.j-widget__contentImg'.is('visible')) {
 			$('.j-widget__contentImg').hiden();

 			$('.j-widget__contentHiden').addClass('active');
 		}
 		else {
 			$('.j-widget__contentHiden').removeClass('active');

 		}
 		return false;

 	});
 });
