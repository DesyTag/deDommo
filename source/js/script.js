$(document).ready(function() {
	$('.j-header__menu').on('click',function(){
		var mob = $(this).parent().find('.header__subContent');

		if (mob.is(':visible') ) {
			mob.slideUp('slow');
		}
		else {
			$('.header__subContent').slideUp('slow');
			mob.slideDown('slow');
		}

		 // this.addClass('.header__subMenu');

	});

	$('.j-menuToggle').on('click',function(){
		$('body').toggleClass('menuMobile');
		
		return false;
	});

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
