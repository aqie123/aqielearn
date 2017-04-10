var obox = document.getElementsByClassName('box')[0];
var btn  = obox.getElementsByTagName('button');
var odiv = obox.getElementsByTagName('div');
var len=btn.length;
for(var i=0;i<len;i++){         // 给上面按钮加颜色
    btn[i].index = i;               // 点击时候给按钮一个index
    btn[i].onclick = function(){      // 循环得到当前点击按钮  所有样式重置
        for(var i=0;i<len;++i){
            btn[i].className = '';        // 所有按钮颜色去掉
            odiv[i].style.display = 'none';
        }
        // alert(this.innerHTML);
        this.className="active";        // 当前点击按钮 变颜色
        odiv[this.index].style.display='block';
    }
}

