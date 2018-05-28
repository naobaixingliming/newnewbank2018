$(document).ready(function() {
	$(".level1 > a").click(function() {
		$(this).addClass("current") //给当前元素添加"current"样式
			.next().show() //下一个元素显示
			.parent().siblings().children("a").removeClass("current")
			//父元素的兄弟元素的子元素<a>移除"current"样式
			.next().hide(); //它们的下一个元素隐藏
		return false;
	});
	//增加左右同高
	var $rightHigh = $('.rightHigh').outerHeight();
	var $leftHigh = $('.leftHigh').outerHeight();
	if($rightHigh > $leftHigh) {
		$('.leftHigh').css('height', $rightHigh);
	} else {
		$('.rightHigh').css('height', $leftHigh);
	}
	$('.icon-left-1').on('click', function() {
		$('.bigImg1,.cover').show();
	})
	$('.icon-left-2').on('click', function() {
		$('.bigImg2,.cover').show();
	})
	$('.icon-right-1').on('click', function() {
		$('.bigImg3,.cover').show();
	})
	$('.icon-right-2').on('click', function() {
		$('.bigImg4,.cover').show();
	})
	$('.deleteBtn').on('click', function() {
		$(this).parent('p').hide();
		$('.cover').hide();
	})

});