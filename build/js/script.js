$(document).ready(function() {
<<<<<<< HEAD

	$('.j-header__menu').on('click',function(){
=======
	$('.header__menu').click(function() {
>>>>>>> 997f6775e12228998f5ef748400bbae96c9e9f91
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

	$('.accordion__title').click(function(event){

		var accordionItem = $(this).parent().find('.accordion__text')
		if ( accordionItem.is(":visible") ) {
			$(accordionItem).slideUp();

		}
		else {
			$('.accordion__text').slideUp();
			accordionItem.slideDown();
		}
		return false
	});



	$('.j__tab').click(function() {

		var select = $(this);
		var seleTab = select.attr('href');

		if (select.hasClass('active')) {



		} else {

			$('.j__tabCover').removeClass('visible')
			$(seleTab).addClass('visible')

			$('.j__tab').removeClass('active')
			$(select).addClass('active')
		}
		return false
	});

 });
