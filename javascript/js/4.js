//btn.onclick = null;  删除事件
//事件模型：内联模型，脚本模型，DOM2模型

obtn[0].onclick = function(e){
	
	alert(e.type);
	cancel();          //取消冒泡
}

// test();


//addEventListener(),removeEventListener(事件名，函数，冒泡或捕获的布尔值)
//冒泡是从里往外，捕获相反
//attachEvent(),detachEvent().
//事件对象Event
//
obtn[1].onclick = function(){
	alert(count++);
	if(count == 3){
		alert("事件被取消");
		obtn[1].onclick = null;
	}
	cancel();
	
}
