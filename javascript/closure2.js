function fun(x){
    return function(y){
        console.log(x+y);
    }
}
var obj = fun(3);       // obj 就是外部函数， 也就是等于执行结果==内部函数
obj(4)  ;   // 内部函数执行 得到最终结果