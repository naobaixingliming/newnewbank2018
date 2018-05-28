/* 
* popup 0.1 
* Copyright (c) 2016 by 明玉帛 
* Date: 2016-12-20 
* 通用弹框的使用
*/ 
$.fn.popup=function(options){
	var defaults={
		url:"javascript:void(0);",
	urlblank:"",
	text:"",
	aText:"确认",
	alength:"",
	fontSize:"20",
	fcolor:"#333",
	spantext:"",
	spantextSelf:"",
	cancelCallback:'',  //取消按钮回调函数
	okCallBack:''   //确定按钮回调函数
}
var options=$.extend(defaults,options);
var $this=$(this);
var htmlStr="<div class='shadow'></div><div class='popup' style='display:block;'><div class='popup-p'>"+options.text
		+"</div><div class='popup-btn'><a href='javascript:;'  btn-triggle='expandUp' class='popup-gay'>取消</a><a target='"+options.urlblank+"' href='"+options.url+"' btn-triggle='expandUp' class='psure'>"+options.aText+"</a><span onclick=window.open('"+
		options.spantextSelf+"') class='plink'>"+options.spantext+"</span></div></div>";
$this.append(htmlStr);
if(parseInt(options.alength)==1){
	$this.find(".popup-gay").remove();
}
//属性设置
var fontsize=parseInt(options.fontSize);
var fcolor=options.fcolor;
$this.find(".popup-p").css({fontSize:fontsize});
$this.find(".popup-p").css({color:fcolor});
//确定
$this.find(".psure").on("click",function(){
	if(options.url=="javascript:void(0);"){
		$this.find(".shadow").hide();
		$this.find(".popup").hide();
		if(options.okCallBack && typeof(options.okCallBack)=='function'){
			options.okCallBack();
		}
	}
})
//取消
$this.find(".popup-gay").on("click",function(){
	$this.find(".shadow").hide();
	$this.find(".popup").hide();
	if(options.cancelCallback && typeof(options.cancelCallback)=='function'){
			options.cancelCallback();
		}
	})		
}
