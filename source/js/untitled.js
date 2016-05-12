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



		// if (parent.hasClass('active') ) {
 	// 		parent.removeClass('active');	
 		}
 		else {
 			$('.j-widget__contentHiden').removeClass('visible');
 			$(txt).addClass('visible');

 		// 	$('.j-imgBtn').removeClass('active')
 		// 	_this.addClass('active');
 		// }