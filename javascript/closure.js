/**
 *  外部执行与的非持久型变量神奇的保留他们闭包最初定义值
 *  优点： 不产生全局变量，实现属性私有化
 *  缺点： 闭包中数据常驻内存，不删除会导致内存溢出
 *
 */
var func = function(){
    // alert(2);
};
function fun(){
    var num = 0;   // 内部变量
    function inner(){
        num++;
        alert(num);
        // console.log(num);   // 外部变量可以被内部使用
    }
    return inner;       // 返回函数体  核心
}

// alert(num);  会报错
// console.log(fun());    //   返回内部函数
//console.log(fun);     // 返回外部函数体
/**
 * 闭包 ： 用一个函数访问另外一个函数内部变量
 */
var demo = fun();   // 这不没执行
demo(); demo();
var demo2 = fun();
demo2(); demo2();