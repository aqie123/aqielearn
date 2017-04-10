/**
 *
 * @type {Object}
 */
/*
1.
var obj = new Object();
2.推荐第二种
var obj = {};

*/
var arr = [];       // 定义空数组
arr.run = function(){
    // alert("西红柿炒番茄");
};
arr.run();

// 给数组原型
Array.prototype.run = function(){
    // alert("麻辣小龙虾");
};
var demo = [];
demo.run();


function Person(name,age){      // 构造函数
    this.name = name;
    this.age = age;
}

Person.prototype.showName = function(){
    alert('我的名字是'+this.name);
};
Person.prototype.showAge = function(){
    alert('我的年龄是'+this.age);
};
var demo1 = new Person('啊切',18);       // 新实例
demo1.showName();
demo1.showAge();