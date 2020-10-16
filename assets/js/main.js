'use strict'

;!(function ($) {
    $.fn.classes = function (callback) {
        var classes = [];
        $.each(this, function (i, v) {
            var splitClassName = v.className.split(/\s+/);
            for (var j = 0; j < splitClassName.length; j++) {
                var className = splitClassName[j];
                if (-1 === classes.indexOf(className)) {
                    classes.push(className);
                }
            }
        });
        if ('function' === typeof callback) {
            for (var i in classes) {
                callback(classes[i]);
            }
        }
        return classes;
    };
})(jQuery);

$(document).ready(function() {
	$('.menu-icon').click(function(event) {
		$('.menu-icon, .menu-body').toggleClass('active')
		if($('.menu-icon').classes()[1] == 'active') {
			document.body.style.overflow = 'hidden';
			$(document).scrollTop(0);
		} else {
			document.body.style.overflow = 'auto';
		}
	});

	$('.menu-icon').click(function(event) {
		if($('.menu-icon').classes()[1] == 'active') {
			document.body.style.overflow = 'hidden';
			document.body.style.postition = 'hidden';
			$(document).scrollTop(0);
			$(window).scroll(function(){
        		$('body').scrollTop(0);
			});
		} else {
			document.body.style.overflow = 'auto';
		}
	});

	$('.menu-icon').on('touchstart click', function(event) {
		if($('.menu-icon').classes()[2] == 'active') {
			document.body.style.overflow = 'hidden';
			document.body.style.postition = 'hidden';
			$(document).scrollTop(0);
			console.log('12')
		} else {
			document.body.style.overflow = 'auto';
		}
	});

	function ibg(){
		$.each($('.ibg'), function(index, val) {
			if($(this).find('img').length>0){
				$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
				
			}
		});
	}
	
	ibg();


	//slider
	if($('.slider__body').length>0){
		$('.slider__body').slick({
			//autoplay: true,
			infinite: false,
			dots: true,
			arrows: false,
			accessibilty: false,
			slidesToShow: 1,
			autoplaySpeed: 3000,
			adaptiveHeight: true,
			nextArrow: '<button type="button class="slick-next"></button>',
			prevArrow: '<button type="button class="slick-prev"></button>',
			responsive: [{
				breakpoint: 768,
				setting: {}
			}]
		});
	}
})

