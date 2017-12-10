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
		arrows: false,
		responsive: [
		{
	      breakpoint: 980,
	      settings: {
	        arrows: true,
	        centerMode: true,
	        slidesToShow: 1
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	        arrows: false,
	        centerMode: true,
	        slidesToShow: 1
	      }
	    }
	  ]
	});
});


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
	$('input[name=phone]').mask('+7(999) 999-9999');
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
		$(this).parent().fadeOut();
	})
})

$(function(){
	$('.main_menu__toggle').on('click', function(){
		$('.main_menu ul').toggleClass('open');
	});

	$(document).mouseup(function (e){
		var div = $(".main_menu ul");
		if (!div.is(e.target)
		    && div.has(e.target).length === 0) {
			$('.main_menu ul').removeClass('open')
		}
	});
	$(window).scroll(function(){
		$('.main_menu ul').removeClass('open');
	});
});

$(function(){ //плавный скролл к якорям
	$("a.scrollto, .main_menu ul a").click(function () {
		var elementClick = $(this).attr("href")
		var destination = $(elementClick).offset().top;
		jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 400);
		return false;
    });
});

$(function(){
	var range = document.getElementById('range');
	var range_val = document.getElementById('range_val');
	var range2 = document.getElementById('range2');
	var range2_val = document.getElementById('range2_val');

	noUiSlider.create(range, {
		start: [35, 100],
		connect: true,
		range: {
			'min': 35,
			'max': 100
		}
	});

	range.noUiSlider.on('update', function( values, handle ) {
		var val1 = number_format(values[0], 0, ',', ' ');
		var val2 = number_format(values[1], 0, ',', ' ');

		val1 = val1 + ' - ' + val2;

		$('#range_val span').text(val1)
	});

	noUiSlider.create(range2, {
		start: [3000000, 10000000],
		connect: true,
		step: 500000,
		range: {
			'min': 3000000,
			'max': 10000000
		}
	});

	range2.noUiSlider.on('update', function( values, handle ) {
		var val1 = number_format(values[0], 0, ',', ' ');
		var val2 = number_format(values[1], 0, ',', ' ');

		val1 = val1 + ' - ' + val2;

		$('#range2_val span').text(val1);
	});
});



function number_format(number, decimals, dec_point, separator ) {
  number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
  var n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = (typeof separator === 'undefined') ? ',' : separator ,
    dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
    s = '',
    toFixedFix = function(n, prec) {
      var k = Math.pow(10, prec);
      return '' + (Math.round(n * k) / k)
        .toFixed(prec);
    };
  // Фиксим баг в IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n))
    .split('.');
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((s[1] || '')
    .length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1)
      .join('0');
  }
  return s.join(dec);
}