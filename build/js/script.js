$(document).ready(function() {
	$('.j-header__menu').on('click',function(){
		var _this = $(this);
		var mob = _this.parent().find('.header__subContent');

		if (mob.is(':visible') ) {
			mob.slideUp('slow');
			// _this.removeClass('active')
		}
		else {
			$('.header__subContent').slideUp('slow');
			mob.slideDown('slow');
				// _this.addClass('active')
		}
				 // this.addClass('.header__subMenu');
	}); 
	// --> per il subMenu

	$('.j-menuToggle').on('click',function(){
		$('body').toggleClass('menuMobile');
		
		return false;
	});
	 // --> il menuMobile hamburger

	$('.j-header__menu').click(function() {
		var _this = $(this);

		if (_this.hasClass('active') ) {

		}
		else {
			$('.j-header__menu').removeClass('active');
			$(_this).addClass('active');
		}
	}); 
	// --> il menu attivo al click


 	$('.j-imgBtn').click(function() {
 		var _this = $(this);
 		var parent = _this.closest('.widget__total');
 		// parent.addClass('active');

 		var txt = _this.attr('href');
 			console.log(parent)

 		if (parent.hasClass('active') ) {
 			parent.removeClass('active');	
 		}
 		else {
 			// $('.j-widget__contentHiden').removeClass('active');
 			// $(txt).addClass('visible');

 			$('.j-imgBtn').removeClass('active');
 			_this.addClass('active');

 			txt.removeClass('active');
 			parent.addClass('active');
 		}

 		// parent.toggleClass('active');


 		// if ( $('.j-widget__contentImg').is(':visible') ) {
 		// 	// $('.j-widget__contentImg').hide();

 		// 	$('.j-widget__contentHiden').addClass('active');
 		// }
 		// else {
 		// 	$('.j-widget__contentHiden').removeClass('active');

 		// }
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