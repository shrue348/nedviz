'use strict';

$(function(){
	baguetteBox.run('.baguetteBox');

});


$(function(){
	$('.car_list').slick({
	  centerMode: true,
	  slidesToShow: 3,
	  accessibility: true,
	  infinite: true,
	  prevArrow: '<a href="javascript:;" class="left carousel-control"></a>',
	  nextArrow: '<a href="javascript:;" class="right carousel-control"></a>',
	  responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        arrows: false,
	        centerMode: true,
	        centerPadding: '40px',
	        slidesToShow: 3
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        arrows: false,
	        centerMode: true,
	        centerPadding: '40px',
	        slidesToShow: 1
	      }
	    }
	  ]
	});


	$('.header_top_car').slick({
		slidesToShow: 1,
		dots: true,
		swipe: true,
		swipeToSlide: true,
		arrows: false
	})
})


$(function(){
	$('.calc_slide').each(function(){
		var elem = $(this).find('input[type="range"]'),
			target = $(this).find('.val span');

		target.text(elem.val());
		elem.on('change', function(){
			target.text(elem.val());
		});
	});
})
	

$(function(){
	$('input[name=phone]').mask('+7(999) 999-9999')
})

$(function(){
	$('.sect_block img').on('click', function(){
		var width = $(window).width()
		if ( width < 979) {
			var text = $(this).siblings('.sect_block__desc');

			$('.sect_block__desc').fadeOut();
			$(text).fadeIn();
		}
	});
	$('.sect_block .close').on('click', function(){
		$(this).parent().fadeOut()
	})
})

$(function(){
	$('.main_menu__toggle').on('click', function(){
		$('.main_menu ul').toggleClass('open')
	});

	$(document).mouseup(function (e){
		var div = $(".main_menu ul");
		if (!div.is(e.target)
		    && div.has(e.target).length === 0) {
			$('.main_menu ul').removeClass('open')
		}
	});
	$(window).scroll(function(){
		$('.main_menu ul').removeClass('open')
	})
})


$(function(){ //плавный скролл к якорям
	$("a.scrollto, .main_menu ul a").click(function () {
		var elementClick = $(this).attr("href")
		var destination = $(elementClick).offset().top;
		jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 400);
		return false;
    });
});
