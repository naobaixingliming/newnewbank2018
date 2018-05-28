			//			参数			类型			说明									      默认值
			//			angle		数字		旋转一个角度									0
			//			animateTo	数字		从当前的角度旋转到多少度							0
			//			step		函数		每个动画步骤中执行的回调函数，当前角度值作为该函数的第一个参数	无
			//			easing		函数		自定义旋转速度、旋转效果，需要使用 jQuery.easing.js		无
			//			duration	整数		旋转持续时间，以毫秒为单位							无
			//			callback	函数		旋转完成后的回调函数								无
			//			getRotateAngle		函数	返回旋转对象当前的角度							无
			//			stopRotate	函数		停止旋转	
			var doubleVm = {
				rotete: function() {					
					var rotateTimeOut = function() {						
						$('.rotateBtn').rotate({
							angle: 0,
							animateTo: 2160,
							duration: 8000,
							callback: function() {
								alert('网络超时，请检查您的网络设置！');
							}
						});
					};
					//var bRotate = false;
					var rotateFn = function(awards, angles,txt) {
						doubleVm.bRotate = !doubleVm.bRotate;
						$('#rotateBtn').stopRotate();
						$('#rotateBtn').rotate({
							angle: 0,
							animateTo: angles + 1800, //angle是图片上各奖项对应的角度，1800是让指针固定旋转圈数
							duration: 3000,
							callback: function() {
								$('#cash').html(txt);
								$('.hideEle').show();								
								doubleVm.bRotate = !doubleVm.bRotate;
							}
						})
					};
					var rotateFnBg = function(awards, angles,txt) {
						doubleVm.bRotate = !doubleVm.bRotate;
						$('#rotateBtnBg').stopRotate();
						$('#rotateBtnBg').rotate({
							angle: 0,
							animateTo: angles + 1800,
							duration: 3000,
							callback: function() {
								$('#cash').html(txt);
								$('.hideEle').show();								
								doubleVm.bRotate = !doubleVm.bRotate;
							}
						})
					};
					//小额现金 --抽奖
					$('.pointBtn').on('click', function() {	
						$('.keep1').show();
						$('.keep2').hide();
						goRun();
					});
					//小额现金 --继续 抽奖
					$('.keepBtnSg').on('click', function() {	
						$('.hideEle').hide();
						okRun();						
					});
					//大额现金-- 抽奖
					$('.pointBtnBg').on('click', function() {
						$('.keep1').hide();
						$('.keep2').show();
						goRunBg();
					});
					//大额现金-- 继续 抽奖
					$('.keepBtnBg').on('click', function() {
						$('.hideEle').hide();
						okRunBg();
					});
					function okRun(){
						var item = getRand(1, 5);
							switch(item) {
								//var angle = [36, 108, 180, 252, 324];
								case 1:
									rotateFn(1, 36, '60');
									break;
								case 2:
									rotateFn(2, 108, '80');
									break;
								case 3:
									rotateFn(3, 180, '40');
									break;
								case 4:
									rotateFn(4, 252, '70');
									break;
								case 5:									
									rotateFn(5, 324,'50');
									break;
							}
							console.log(item);
						}
					function okRunBg(){														
							var item = getRand(0, 4);
							switch(item) {
								case 0:
									rotateFnBg(0, 324,'788');
									break;
								case 1:
									rotateFnBg(1, 36, '588');
									break;
								case 2:
									rotateFnBg(2, 108, '888');
									break;
								case 3:
									rotateFnBg(3, 180, '488');
									break;
								case 4:
									rotateFnBg(4, 252, '688');
									break;
							}
							console.log(item);						
						}
					function goRun(){						
						if(doubleVm.bRotate) return;
						$("#popup").popup({
							text: "本次抽奖需消耗1积分<br><i class='color_666 font_16'>当前可用积分为：101分</i>",
							aText: "确定抽奖",
							alength: "2",
							okCallBack: function() {								
								okRun();
							},
							cancelCallback: function() {
								return;
							}
						});		
					}					
					function goRunBg(){						
						if(doubleVm.bRotate) return;
						$("#popup").popup({
							text: "本次抽奖需消耗10积分<br><i class='color_666 font_16'>当前可用积分为：680分</i>",
							aText: "确定抽奖",
							alength: "2",
							okCallBack: function() {
								okRunBg();
							},
							cancelCallback: function() {
								return;
							}
						});	
					}
					function getRand(n, m) {
						return Math.floor(Math.random() * (m - n + 1) + n)
					}
				},
				
				//循环滚动
				rollCircle: function(roll, app, ul) {
					var speed = 10;
					var rollBox = document.getElementById(roll);
					var appendBox = document.getElementById(app);
					var ulBox = document.getElementById(ul);
					appendBox.innerHTML = ulBox.innerHTML;
					function Marquee() {
						if(appendBox.offsetTop - rollBox.scrollTop <= 0){
							rollBox.scrollTop -= ulBox.offsetHeight;
						}
						else {
							rollBox.scrollTop++;							
						}
					}
					var MyMar = setInterval(Marquee, speed)
				},
				
				//分页
				page:function(){					
					var $_li = $('#ul1').children('li');
					var item_size = $('#ul1').children('li').size();    //总的数量
					var limitNum = 5; 									//显示条数				
					var pageNum =Math.ceil(item_size / limitNum);       //总页数
					var currentPage=0;									//当前页
									
					$('#current_page').val(0);//隐藏域默认值
					
					$('#ul1').children().slice(0, limitNum).css('display', 'block');//默认显示数据				
					function showNum(page_num) {
						startNum = page_num * limitNum; 
						endNum = startNum + limitNum; 
						$('#ul1').children().css('display', 'none').slice(startNum, endNum).css('display', 'block');
						$('#current_page').val(page_num);
					}
					//上一页
					$('.prevBtn').on('click', function() {
						if(currentPage>0){
							$('.nextBtn').removeClass('not-pointer');
							currentPage = parseInt($('#current_page').val()) - 1;
							showNum(currentPage);
						}else{
							$(this).addClass('not-pointer');
						}					
					});
					//下一页
					$('.nextBtn').on('click', function() {
						if(currentPage+1<pageNum) {
							$('.prevBtn').removeClass('not-pointer');
							currentPage = parseInt($('#current_page').val()) + 1;
							showNum(currentPage);
						} else {
							$(this).addClass('not-pointer');
						}
					});
				},
				
				//事件处理
				bindEvent:function(){			
					$('.lookBtn').on('click',function(){						
						if(doubleVm.bRotate) return;
						$('.hintEle').show();
					})
					//关闭现金弹窗
					$('.closeBtn').on('click',function(){						
						$('.hideEle').hide();
					})
					$('.closeDetail').on('click',function(){						
						$('.hintEle').hide();
					});
				},
				
								
			}
			doubleVm.rotete(); //轮盘抽奖
			doubleVm.rollCircle("rollBox", "appendBox", "ulBox"); 		//循环滚动
			//doubleVm.rollCircle("rollBox1", "appendBox1", "ulBox1");    //循环滚动
			doubleVm.bindEvent();//事件处理