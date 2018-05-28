(function() {
	if('addEventListener' in document) {
		document.addEventListener('DOMContentLoaded', function() {
			FastClick.attach(document.body);
		}, false);
	}
	$('.click-arrow').on('click', function() {
		if($(this).children('i').hasClass('arrow-down')) {
			$(this).parent('div').siblings('.navContent').hide(500);
			$(this).children('i').removeClass('arrow-down').addClass('arrow-right');
		} else {
			$(this).parent('div').siblings('.navContent').show(500);
			$(this).children('i').removeClass('arrow-right').addClass('arrow-down');
			$(this).parents('div.page-box').siblings('div.page-box').find('.click-arrow .arrow-down').removeClass('arrow-down').addClass('arrow-right');
			$(this).parents('div.page-box').siblings('div.page-box').find('.navContent').hide(400);
		}
	})

}())