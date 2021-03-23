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