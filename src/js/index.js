import {$, Slider} from './common';

//range slider
if($('.js-range-input').length){
	$('.js-range-input').each(function(){
		var $parent = $(this).parents('.js-range');
		var $rangeVal = $parent.find('.js-range-val');
		var numMin = $(this).data('slider-min').toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
		var numMax = $(this).data('slider-max').toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

		if($rangeVal.data('text') == 'день'){
			$rangeVal.text($(this).data('slider-value') + ' ' + nameDay($(this).data('slider-value')));

			if($parent.data('note') == true){
				numMin = numMin + ' ' + nameDay($(this).data('slider-min'));
				numMax = numMax + ' ' + nameDay($(this).data('slider-max'));
			}
		}else{
			$rangeVal.text($(this).data('slider-value') + ' ' + $rangeVal.data('text'));

			if($parent.data('note') == true){
				numMin = numMin + ' ' + $rangeVal.data('text');
				numMax = numMax + ' ' + $rangeVal.data('text');
			}
		}

		$parent.find('.js-range-min').text(numMin)
		$parent.find('.js-range-max').text(numMax)
	});
	

	$('.js-range-input').on("slide", function(e) {
		var $rangeVal = $(this).parents('.js-range').find('.js-range-val');

		if($rangeVal.data('text') == 'день'){
			$rangeVal.text(e.value + ' ' + nameDay(e.value));
		}else{
			$rangeVal.text(e.value + ' ' + $rangeVal.data('text'));
		}
	});

	function nameDay(val) {
		var lastFigure = parseInt(val.toString().substr(val.toString().length - 1, 1));

		if (val >= 11 && val < 15) {
			return 'дней';
		}
		else {
			if (lastFigure == 1) return 'день';
			if (lastFigure > 1 && lastFigure < 5) return 'дня';
			if (lastFigure == 0 || lastFigure >= 5) return 'дней';
		}
	}
}

// animation for steps
if($('.js-step-list').length){
	function stepAnim(delay){
		var $stepBox = $('.js-step-list');
		if ($stepBox.length) {
			if (!$stepBox.hasClass('animate')) {
				$stepBox.addClass('animate');

				$('.js-step-list-item').each(function(indx, element){
					$(this).css({'animation-delay': delay+'s', '-webkit-animation-delay': delay+'s'})
					delay = parseFloat(delay);
					delay = delay + 0.3;
					delay = delay.toFixed(1);
				});
			}
		}
	}

	var stepBlockTop = $('.js-step-list').offset().top;
	var topStepScroll = stepBlockTop - $(window).outerHeight()/2;

	console.log(stepBlockTop);
	console.log(topStepScroll);

	$(window).on('scroll', function(){
		if($(this).scrollTop()>=topStepScroll){
			stepAnim(0);
		}
	});
}

// review slider
if($('.js-review-slider').length){
	$('.js-review-slider').slick({
		centerMode: true,
		centerPadding: 'calc(50% - 585px)',
		slidesToShow: 3,
		slidesToScroll: 1,
		appendArrows: $('.js-review-slider-arr'),
		prevArrow: '<button id="prev" type="button" class="btn-arr"><svg class="icon ic-arrow-left" width="8" height="14"><use xlink:href="assets/sprites/sprite.svg#ic-arrow-left"></use></svg></button>',
		nextArrow: '<button id="next" type="button" class="btn-arr"><svg class="icon ic-arrow-right" width="8" height="14"><use xlink:href="assets/sprites/sprite.svg#ic-arrow-right"></use></svg></button>'

		// responsive: [
		//   {
		// 	breakpoint: 768,
		// 	settings: {
		// 	  arrows: false,
		// 	  centerMode: true,
		// 	  centerPadding: '40px',
		// 	  slidesToShow: 3
		// 	}
		//   },
		//   {
		// 	breakpoint: 480,
		// 	settings: {
		// 	  arrows: false,
		// 	  centerMode: true,
		// 	  centerPadding: '40px',
		// 	  slidesToShow: 1
		// 	}
		//   }
		// ]
	});
}

// unwrap block
if($('.js-unwrap-block').length){
	$('.js-unwrap-block-btn').on('click',function(event){
		event.preventDefault();
		var $parent = $(this).parents('.js-unwrap-block');

		$parent.toggleClass('opened');
		if($parent.hasClass('opened')){
			$parent.children('.js-unwrap-content').slideDown(400);
		}else{
			$parent.children('.js-unwrap-content').slideUp(400);
		}
	});
}