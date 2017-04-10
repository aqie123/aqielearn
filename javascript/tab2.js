/**
 * 闭包版本tab选项卡
 */
var obox = document.getElementsByClassName('box')[0];
var btn  = obox.getElementsByTagName('button');
var odiv = obox.getElementsByTagName('div');
var len=btn.length;
for(var i=0;i<len;i++){         // 给上面按钮加颜色
    btn[i].onmouseover = tab(i);
}
function tab(num){
    return function(){
        for(var j=0;j<len;++j){
            btn[j].className = '';        // 所有按钮颜色去掉
            odiv[j].style.display = 'none';
        }
        btn[num].className="active";        // 当前j经过按钮 变颜色
        odiv[num].style.display='block';
    }
}


