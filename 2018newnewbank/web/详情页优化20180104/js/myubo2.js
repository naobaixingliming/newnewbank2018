
/** 
 * @param  obj ：object
 * @param  rate : 速度
 * @param  attr : 属性
 * @param  target :目标距离
 * @param  endFn : 回调函数(非必须)
 */
function doMove(obj, rate, attr, target, endFn) {
    var rate = parseInt(getStyle(obj, attr)) < target ? rate : -rate;
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var speed = parseInt(getStyle(obj, attr)) + rate;
        if (speed < target && rate < 0 || speed > target && rate > 0) {
            speed = target;
        }
        obj.style[attr] = speed + 'px';
        if (speed == target) {
            clearInterval(obj.timer);
            endFn && endFn();
        }
    }, 50)
}

function getStyle(obj, attr) {
    return obj.currentStyle ? obj.currentStyle[attr]: getComputedStyle(obj)[attr];
}

function scollTab(imgUrl,oUl,pageNum,oBox,aBtn) {
    var box = document.getElementById(oBox);
    var oUl = document.getElementById(oUl);
    var circleDot = document.getElementById(pageNum);
    var aP = document.getElementById(aBtn);
    var aBtn=aP.getElementsByTagName('a');
    var aLi = oUl.getElementsByTagName('li');

    var htmlStr = '';   
    for (var i = 0; i < imgUrl.length; i++) {
        htmlStr += '<li><img class="lm-img" src=' + imgUrl[i] + ' alt=""></li>';
    }
    oUl.innerHTML = htmlStr;
    circleDot.innerHTML = '总共有' + imgUrl.length + '页';
    aBtn[0].className = 'not-allow';

    var showNum = 4;
    box.style.width = getWidth(aLi[0]) * showNum + 'px';
    oUl.style.width = getWidth(aLi[0]) * aLi.length + 'px';
   
   
    if(parseInt(getStyle(box,'width'))>=parseInt(getStyle(oUl,'width'))){
        aBtn[0].className = 'not-allow';
        aBtn[1].className = 'not-allow';
    }


    for (var i = 0; i < aBtn.length; i++) {
        aBtn[i].index = i;
        aBtn[i].onclick = function () {
            var d_next = -getWidth(aLi[0]);
            var d_next2 = 0;
            var obj1 = aBtn[1];
            var d_prev = -getWidth(aLi[0]) * (aLi.length - 1 - showNum);
            var d_prev2 = -getWidth(aLi[0]) * (aLi.length - showNum);
           
            var obj2 = aBtn[0];
            var posWidth = getWidth(aLi[0]);
            if (this.index == 0) {
                tab(d_next, d_next2, obj1, posWidth, this);
            } else {
                tab(d_prev, d_prev2, obj2, -posWidth, this);
            }
        }
    }

    var flag = false;
    var posLeft;
    function tab(d, d2, obj, posWidth, self) {
        if (flag) { return };
        flag = !flag;
        posLeft = parseInt(getStyle(oUl, 'left'));
        obj.className = '';
       
        if (posLeft == d) {
            self.className = 'not-allow';
        }
        if (posLeft == d2) {
            return flag = !flag;;
        }
        doMove(oUl, 40, 'left', posLeft + posWidth, function () {
            flag = !flag;
        });
    }
}

function getWidth(obj) {
    return parseInt(getStyle(obj, 'marginRight')) + parseInt(getStyle(obj, 'marginLeft')) + obj.offsetWidth;
}


