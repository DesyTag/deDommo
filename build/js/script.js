$(document).ready(function() {
	$('.header__menu').click(function() {
		 $(this).addClass('active');
	})
		// selezione active del menu

		// $('.j-menuToggle').on('click',function(){
		// 	$('.header__container').toggleClass('menuMobile');
		// return false;

	$('.j-menuToggle').click(function(){

		var selectedAccordion = $(this).parent().find('.header__navbar');

		if ( selectedAccordion.is(':visible') ){  // TRUE
			selectedAccordion.slideUp(300);

		} else { //FALSE
			$('.header__navbar').slideUp(300);
			selectedAccordion.slideDown(300);
		}

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

 });
