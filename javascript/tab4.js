
/**
 * 闭包版本tab选项卡
 * function(){}()
 */
var obox = document.getElementsByClassName('box')[0];
var btn  = obox.getElementsByTagName('button');
var odiv = obox.getElementsByTagName('div');
var len=btn.length;
for(var i=0;i<len;i++){         // 给上面按钮加颜色
    var timer = null;
    btn[i].onmouseover = function (num){
        return function(){
            clearTimeout(timer);
            timer = setTimeout(function(){
                for(var j=0;j<len;++j){         // 所有样式重置
                    btn[j].className = '';
                    odiv[j].style.display = 'none';
                }
                btn[num].className="active";        // 当前j经过按钮 变颜色
                odiv[num].style.display='block';
            },300);
        }
    }(i);

    btn[i].onmouseout = function(){
        clearTimeout(timer);
    }
}



