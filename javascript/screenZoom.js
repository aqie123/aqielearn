/**
 * parameter 参数
 * 在ie8移动一像素加两次
 */
/*
var resize =  document.getElementsByClassName('resize')[0];
window.onresize = function(){
    resize.innerHTML = window.innerWidth;
};
*/

/**
 * 闭包版本
 * 传参数传的是函数
 */
var num = 0;
var resize =  document.getElementsByClassName('resize')[0];
window.onresize = throttle(function(){
    resize.innerHTML = window.innerWidth || document.documentElement.width;
    num++;
    console.log(num);
},30);
function throttle(fun,delay) {      // 闭包，节流
    var timer = null;
    return function(){
        clearTimeout(timer);
        timer = setTimeout(fun,delay);
    }
}