(function() {
	if('addEventListener' in document) {
		document.addEventListener('DOMContentLoaded', function() {
			FastClick.attach(document.body);
		}, false);
	}

	$('.shirkBtn').on('click', function() {
		$(this).parents('.content-item').hide(500)
			.siblings('div.target').find('.shrink-btn').removeClass('shrink-btn').addClass('expand-btn').text('展开');
	});

	$('.click-arrow').on('click', function() {
		if($(this).children('i').hasClass('shrink-btn')) {
			$(this).parents('div.target').siblings('.content-item').hide(500);
			$(this).children('i').text('展开');
			$(this).children('i').removeClass('shrink-btn').addClass('expand-btn');
		} else {
			$(this).parents('div.target').siblings('.content-item').show(500);
			$(this).children('i').text('收起');
			$(this).children('i').removeClass('expand-btn').addClass('shrink-btn');
			//					$(this).parents('div.item-box').siblings('div.item-box').find('.click-arrow .shrink-btn').removeClass('expand-btn').addClass('expand-btn');
			//					$(this).parents('div.item-box').siblings('div.item-box').find('.content-item').hide(400);					
		}
	})

}())