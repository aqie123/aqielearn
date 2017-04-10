
obtn[1].addEventListener('click',handel,false)     //可以添加多个事件,不能通过匿名函数取消

                           //true是捕获,false冒泡 
                           //                        
// test1(false);  //冒泡事件发生时的函数，开启才会有
/*
obtn[1].attachEvent('onclick',function(){
	alert("我是ie")
})
只支持ie*/

obtn[1].addEventListener('click',handel1,false) 
obtn[1].addEventListener('mouseover',handel1,false) 
obtn[1].addEventListener('mouseout',handel1,false) 

//阻止特定事件默认性为
alink[0].addEventListener('click',function(e){
	alert(e.cancelable);   //为true才可以使用下面方法
	e.preventDefault();  //ie 取消默认行为是 window.event.returnValue = false;
})


//用封装的对象来取消默认行为
EventUtil.addHandeler(alink[1],'click',function(){   //韩顺平链接失效
	EventUtil.preventDefault(event);  //取消默认行为
	EventUtil.stopPropagation(event);  //取消冒泡
	alert("点不开")
});

//onload事件
// EventUtil.addHandeler(window,'load',aqie);  //打开网页就调用
EventUtil.addHandeler(img[0],'load',function(event){
	alert("图片加载成功");
	event = EventUtil.getEvent(event);
	alert(EventUtil.getTarget(event).src);          //弹出图片路径
});


//onunload 用户退出页面，或者强制刷新触发

