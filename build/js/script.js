
$(document).ready(function() {
	// $('.j-header__voice').click(function() {
	// 	console.log("alert")
	// 	var _self = $(this);
		
	// 	if(_self.hasClass('active')) {
	// 		//alert("active")
	// 		return;
	// 	} else {
	// 		//alert("not active")
	// 		$('.j-header__voice').removeClass('active');
	// 		_self.addClass('active');
	// 	}
	// });
	$(".slider__total").slick({
        dots: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 1,
        autoplay: true, 
    	autoplaySpeed: 2500,
    	arrow:true,
    	speed: 1000,
    	pauseOnHover: false,
        // slidesToScroll: 1
    }); 


	var sel = window.location.pathname.replace('/','')
	$('.j-header__voice[href="'+sel+'"]').addClass('active')
		


	$('.j-photoView').click(function() {

		$('.j-gallery').addClass('visible');
		$('.j-contentGallery ').addClass('visible');
		$('.blockCont').addClass('active');
	});

	$('.j-btnClose').on("click",function() {
		$('.j-gallery').removeClass('visible');
		$('.blockCont').removeClass('active');
		$('.j-contentGallery ').removeClass('visible');
	});


	$('.j-iconMenu').click(function() {
		$('.blockCont').toggleClass('active');
		$('.j-voiceMenu').toggleClass('menu_mobile');
		$('.header__hamIcon').toggleClass('active');
		$('.hamIcon').toggleClass('active');

	});
	
});

var toTop = {
	wind : 0,
	doc : 0,
	fot : 0,
	scrollPos : 0,
	footerArrived : 0,
	newScrollPos : 0,
	backTo : 0,
	beforeFot : 0,

	init : function() {
		this.backTo = $('.scroll')

		this.sizer() // mi torna valori
		this.scrollEvent(0)
		
		this.backTo.click(function() {
			$('html,body').animate({scrollTop:0}, 300);
			return false
		});
	},
	scrollEvent : function(val) {	
		// if ( val > 100) {
		// 	$('.scroll').addClass('active');
		// } else {
		// 	$('.scroll').removeClass('active');
		// }

		this.backTo.css({
			opacity: val > 100 ? 1 : val/100
		});

		this.stopPos(val)
	},
	stopPos : function(val) {
		// if (val >= this.footerArrived) {
		// 	this.backTo.css({
		// 		'bottom': val - this.footerArrived
		// 	});
		// } else {
		// 	this.backTo.css({
		// 		'bottom': 0
		// 	});
		// }
		var newScrollPos = val + this.wind
		this.beforeFot = newScrollPos - this.footerArrived
		
		this.backTo.css({
			'bottom': newScrollPos >= this.footerArrived ? this.beforeFot : 0
		});

	},
	sizer : function() {
		this.wind = $(window).height()
		this.doc = $(document).height()
		this.fot = $('.footer').height()
		this.footerArrived = this.doc - this.fot
	}
}
toTop.init()

var header = {
	fix : 0,
	h_Header : 0,

	start : function() {
		this.h_Header = $('.header__fixed').innerHeight()
		this.fix = $('.header__fixed')

		this.scrollEvent(0)

	},
	scrollEvent : function(val) {
		console.log('head')
		if (val > 100) {
			this.fix.addClass('sticky')

			$('body').css({
				'padding-top': 'this.h_Header'
			});

		} else {
			this.fix.removeClass('sticky')
			$('body').css({
				'padding-top': '0'
			});
		}
	}
}
header.start()

$(window).scroll(function(){
	var scrollPos = $(window).scrollTop()

	toTop.scrollEvent(scrollPos)
	header.scrollEvent(scrollPos)
});

