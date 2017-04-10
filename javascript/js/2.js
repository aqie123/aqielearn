//全局函数
document.write(parseInt('34',8)+"<br />");
document.write(parseInt('F',16)+"<br />");
document.write(parseInt('0xabc')+"<br />");
x = Infinity;
console.log(isFinite(x));
x=false;
console.log(isFinite(x));
x=NaN;
console.log(isNaN(x));
//测试编码url
var url="http://www.phpfamily.org/test.php?search= this is a test&sum=1+2&test1=!.()*~";
var res = encodeURI(url);
document.write(res+"<br />");
res= decodeURI(res);
document.write(res+"<br />");
res = encodeURIComponent(url);
document.write(res+"<br />");
res = decodeURIComponent(url);
document.write(res+"<br />");
document.write("<hr />")

var str1 = " 你好hello aqie http://www.aqie.com?search=javascript&test=this is a test&test1=-_?*";
str1 = escape(str1);
document.write(str1+"<br />");
str1 = unescape(str1);
document.write(str1+"<br />");

document.write("<hr />");
document.write("number把对象转化成数字，如果是Data对象，返回从<br />1970到现在的毫秒数<br />");
document.write("String把对象转换成字符串<br />");

str = new Boolean(123);
console.log(str); //现在是一个对象

str = Number(str);  //不是纯数值，得到NaN
str = Number(new Date());
console.log(str);

document.write("<hr />");
var test = function(x,y){//回调函数:把函数作为参数传递给另一个函数+自调用函数：执行一次性任务
	return x*y;
}

 //回调函数使用
 function calc(x,y){
 	return x() + y();
 }
 function test1(){  //回调函数：不做命名，节省全局变量;将函数调用委托给另一个函数
 	return 2;
 }
 function test2(){
 	return 5;
 }
 document.write("回调函数:"+calc(test1,test2));
 document.write("<hr />");
function cheng2(){
	var i,arr=[];
	// alert("数组长度是："+arguments.length);
	for(i=0;i<arguments.length;i++){
		arr[i]= arguments[i]*2;
	}
	return arr;
}
function jia1(a){
	return a+1;
}
var add1=function(){
	alert("调用成功")
}

var arr1 = [];
arr1 = cheng2(10,20,30,40);

 document.write(arr1+"<br />");
 for(i=0;i<4;i++){
 	arr1[i] = jia1(arr1[i]);
 }
 document.write(arr1+"<br />");
 document.write("回掉函数aaaaaaaaa"+aqie(1,2,3,jia1)+"<br />");
 // alert(aqie(1,2,3,jia1));
 document.write("call函数使用："+jia1.call(jia1,5)+"<br />");
 var params = [7];
  document.write("apply函数使用："+jia1.apply(jia1,params)+"<br />");
  document.write("<hr />");
  //自调用函数使用
  //不会产生全局变量，但是函数无法重复执行，适合初始化
(function(a,b){
	document.write("自调用函数"+(a+b));
})(1,2);
document.write("<hr />"+"对象学习"+"<br />");
document.write("1.通过对象字面量 var obj={};名值对<br />2.通过构造函数创建对象<br />3.\
	通过var obj = new Object();创建<br />4.通过Object.create创建对象<br />");
var obj = {
	x:1,
	y:2,
	z:3,
	username:'aqie',
	'first-name':'toby',
	'age':18,
	test:null,
	'test1':undefined,
	person:{
		username:'aqie',
		age:'18'
	}
};
document.write(obj['first-name']+obj.age+obj['username']+obj.test+"&nbsp;"+obj.test1+"<br />");
var obj1 = new Object();
var obj2 = new Array();//创建数组对象
var date = new Date(); //日期对象
var reg = new RegExp('js');//创建正则对象
  document.write("<hr />");
  function Test(num1,num2){  //构造器函数首字母最好大写，区别其他函数，创建对象时候可以接收参数
  	this.n1=num1;
  	this.n2=num2;
  } 
  var obj4 = new Test(6,2);
  // alert(obj4 instanceof Test);
  var obj6 = Object.create({
  	x:1
  });
  var obj7 = Object.create(null);//创建一个没有原型对象

  //创建普通的空对象
  var obj8 = Object.create(Object.prototype);
  //如果属性不确定，使用方括号
  var key = 'username';   //这个有什么用
  console.log('用户的key是'+obj.key);
  console.log('用户的key是'+obj[key]);


  document.write("<hr />");
  function PersonInfo(name,age,sex){
  	this.name=name;
  	this.age=age;
  	this.sex=sex;
  	this.info2 = function(){
  		return this.name+this.age+this.sex;
  	};
  }
  var person1 = new PersonInfo('king','34','男');
  person1.addr = '北京';
  console.log(person1.addr);

  //删除属性
  delete person1.name;//只能删除自身属性，不能删除继承属性\
  //只是断开属性和宿主对象的联系；不能删除那些可配置性为FALSE的属性
  person1.name='aqie';   //name又重新赋值
  
  //for in 来遍历属性
  for(var attr in person1){
  	console.log("输出的是属性:"+attr+'\n');
  }

  //在对象中使用方法
 person1.sayHi = function(){  //来添加属性和属性名
  	return '你好啊！';
  };
  person1.info = function(){
  	return '用户名：'+person1.name;
  }
  console.log(person1.sayHi());
  console.log(person1.info());
  console.log("在构造函数中调用方法："+person1.info2());

  //原型使用+对象原型链？？？？？？？？？？？
  PersonInfo.prototype.z=5;
  console.log(person1.z);
  delete person1.z;  //删除不掉
  console.log(person1.z);
  console.log(obj.toString);
  person1.z=12;
 console.log("对象本身："+person1.z);
 delete PersonInfo.prototype.z;
 delete person1.z;
 console.log("都删除以后："+person1.z);
 console.log('name' in person1);   //检测对象上是否有某个属性
 console.log('toString' in person1);


//hasOwnProperty
console.log(person1.hasOwnProperty(toString)); //只能检测本身是否有属性

var person2 = Object.create({x:1});                                  //通过Object.create创建
person2.y = 2;
/* 
上面相当于
Object.defineProperty(person2,'y',{
	value :2,
	writable:true,
	enumerable:true,
	configurable:true
})
 */
console.log("这是从object继承下来的，"+person2.hasOwnProperty('x'));


//四个描述属性特性：writable,Enumerable,configurable,value
console.log(person2.propertyIsEnumerable('x'));  //属性是自己对象，并且是可枚举的，返回true
console.log(person2.x!==undefined);//判断属性是否存在

console.log(Object.prototype.propertyIsEnumerable('toString'));  //不可枚举的

//类似for in,返回所有自由属性的名称
console.log(Object.getOwnPropertyNames(person1));
//Object.keys(obj)  for in 还可以遍历对象从其原型链继承的属性
console.log(Object.keys(person2));

//定义属性
Object.defineProperty(person2,'y',{  //默认不可修改，不可枚举,默认false
	value:12,             //可配置话，这里可以改，但是writable是false,外面不可以改
	configurable:false,  //是否可配置，属性可改变，可被删除,是false,下面两个不可改.  特殊：不可配置，true可以改成那false
	enumerable:false,   //是否可枚举
	writable:false       //是否可写,可以改变值  这样改person2.y=9;
});
person2.y=9;
console.log("定义属性修改值："+person2.y);
console.log(Object.keys(person2));
Object.defineProperty(person2,'z',{
	get : function(){                   //存取器函数,记得加空格
		return 25;
	}
});
console.log("z的值为"+person2.z);
var person3 = {                              //对象字面量形式
	// __proto__:null,//保证属性不是继承来的  这个会影响继承链
	value:25,
	get age(){
		return 12;
	},
	set age(val){
		console.log("不能设置"+val);
	},
	x:2,
	y:2,
	z:3,
	get zhouchang(){
		return this.x+this.y+this.z;
	},
	set fbzc(val){
		this.x*= val;
		this.y*= val;
		this.z*=val;
	}
}
Object.defineProperties(person3,{
		'username' : {
			value:'aqie123',        //记得加引号
			writable:true,
			enumerable:true,
			configurable:true
		},
		sex :{
			value:25,
			writable:false
		}
	})
console.log("person3的age值："+person3.age);
person3.age = 15; 
console.log(person3.zhouchang);
person3.fbzc = 2; //定义周长翻几倍
console.log("翻倍后的周长"+person3.zhouchang);
console.log("person3的名字"+person3.username);
console.log(Object.getOwnPropertyDescriptor(person3,'username'));
person3.addr="北京";  //默认是true
console.log(Object.getOwnPropertyDescriptor(person3,'addr'));


//检测对象是否是另一个对象原型（或处于原型链，或者另一个对象原型链）
// var person4 = {x:1};
var person4= Object.create(person3);   //3就是4的原型对象
console.log("person4的属性包括"+Object.keys(person4));
console.log("3是4的原型对象"+person3.isPrototypeOf(person4));
console.log("Object.prototype是4的原型对象"+Object.prototype.isPrototypeOf(person4));

//对象的类属性  标识对象类型的字符串
console.log(person3.toString()); //第二个是类型
var arr = new Array();
console.log(Object.prototype.toString.call(arr));            //这是什么意思？？？？？
var d = new Date();
console.log(d);
console.log(Object.prototype.toString.call(d)); 

console.log(classof(d));

//构造日期对象
// var d = new Date(72891181333);
var d = new Date(2016,11,22);  //第二个参数是第几个月，是从0开始的
var de = new Date("2016-12-22 07:14:30");
console.log(de.getDate());   //获取毫秒数
console.log("日"+de.getDay());
console.log("年份"+de.getFullYear());
console.log("月"+(de.getMonth()+1));
//设置  年份月份日期
de.setFullYear('2017');
de.setDate('12');
de.setMonth('0');
console.log(de);
console.log(de.toString());   //字符串形式显示时间
console.log("json:"+de.toJSON());     //返回date对象字符串形式
  

//正则表达式
var patt = new RegExp("Javascript");       //创建对象方式
var res= patt.test('this is javascript course');
console.log(res);

//直接写
patt = /Javascript/i;  //加i不区分大小写
res= patt.test('this is javascript course');
console.log(res);

res = /[abc]/.test('def');   //后面字符串是否出现abc
console.log("1"+res);
res = /[^abc]/.test('def');    //是否不包括前面字符
console.log("2"+res);

res = /[abc]/.test('beijing');   //后面字符串是否出现abc
console.log(res);
res = /[^abc]/.test('beijing');    //是否不包括前面字符
res = /[0-9]/.test("aqie1");
res = /[a-z]/.test("123453677");
res = /./.test('\n');  //表示除换行符以外任意字符
console.log(res);

document.write("<hr />");
document.write("error对象<br />");
/*
try {
	// notexists();
	var n = 0;
	if(n==0){
		throw new Error('0不能作为被除数');
	}else{
		alert(4/n);
	}
}catch(e){
	if(e instanceof EvalError){
		alert("Eval错误:"+e.message);
	}else if(e instanceof RangeError){
		alert("Range错误:"+e.message);
	}else if(e instanceof TypeError){
		alert("Type错误:"+e.message);
	}else if(e instanceof ReferenceError){
		alert("Reference错误:"+e.message);
	}else{
		alert(e.name+e.message)
	}
	
}finally{
	alert("我总是被调用")
}
*/
try{
	throw new MyError("自定义错误信息");
}catch(e){
	console.log(e.name+":"+e.message);
}
//比较对象 
var o1 = {x:1};
o2 = o1;
o2.x = 2;
console.log("对象赋给对象，他们指向同一对象"+o1.x);
console.log("如何比较两个对象"+o1===o2);
