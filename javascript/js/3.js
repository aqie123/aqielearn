//数组直接量创建数组
var arr = [];
var arr = [12,4,2.4,true,[1,2,3],{x:1,y:2}];
console.log(arr);
//构造函数Array()创建数组
//只给一个参数是长度
var a = new Array(1,2,3);
//使用数组
console.log(arr[1]);
arr[6] = 'aqie';
var obj = {};
obj[0] = 'a';
obj[1] = 'b';
console.log(obj.length);     //数组和对象区别，数组索引必须是非负整数才有长度
//arr.length=0;等价于删除数组元素
Object.defineProperty(arr,"length",{  //改变数组长度可写性
	writeable:false
});
arr.push('啊切','1','2');  
arr.pop();		//pop删除数组末尾元素
arr.shift();     //删除数组首部元素
arr.unshift('我是添加元素');
delete arr[1];		//不会改变数组长度
console.log(arr);

//遍历数组
//for 循环遍历下标连续数组
//for in 遍历数组
for(var i = 0;i<arr.length;i++){
	console.log(arr[i]);
}
console.log("for in 遍历")
for(var i in arr){
	if(arr.hasOwnProperty(i)){         //遍历自身属性
		console.log(arr[i]);
	}
}
//forEach()遍历
arr.forEach(function(x){
	console.log(x);
});
//定义函数
function goThrough(element,index,array){
	console.log("要处理数组："+array);
	console.log("索引为"+index+"的值是"+element);
}
arr.forEach(goThrough);
//数组常用方法
//join是 splice逆向方法，
arr = ['a','b','c','A',"B"];
arr = [1,2,11,22];
var res = arr.join('-');
res = arr.reverse();  //反转
res = arr.sort();  //排序数组，按照字符串unicode排序

console.log(res);
res = arr.sort(function(a,b){	//从小到大排序
	return a-b;
});
console.log(res); 
var users = [
	{name:'aqie',age:12},
	{name:'bqie',age:22},
	{name:'cqie',age:32},
	{name:'dqie',age:42},
	{name:'Aqie',age:52},
];
users.sort(function(a,b){
	if(a.name>b.name)return 1;  //说明a比b大
	if(a.name<b.name)return -1;
	return 0;
});
for(var i in users){			//指定顺序排序
	console.log(users[i]['name']); 
}
//concat
arr = arr.concat(3,4,5);   //将数组与给定元素连接到一起
arr = arr.concat([3,4,5],[7,[8]]);
console.log(arr);
//slice
res = arr.slice(0,3);
res = arr.slice(2,-3);
res = arr.splice(0,3,'!','?','%');  //好像不能为负,这样可以替换数组元素
console.log(res);
console.log(arr);
//map
res= arr.map(function(x){
	return x*x;
})
console.log(arr);
arr.push('a');         //这里调用下面函数出问题
arr = ['a!','b','c'];
res = arr.map(Trans);
function Trans(x){
	return x.replace(/!/g,'?').toUpperCase();  //替换掉！，并都转换成大写
}
console.log(res);

//filter  过滤数组中元素
arr = [1,3,55,2,5,,2,5,211,null,''];
res= arr.filter(function(x){
	return x<=10;
});
res =arr.filter(function(x){
	return x%2==0 && x!==undefined && x!= null;

})
console.log(res);
//reduce 累加器  不包括被删除和未被赋值元素
arr = [1,2,3,4,22,53,88,2,3,4,2,56,2,66,77]; 
res = arr.reduce(function(a,b){         //可以对数组元素累加
	return a+b;
});
console.log(res);
//some every
res = arr.every(function(x){    //判断是否有未成年，返回布尔类型
	return x>=18;  
})
console.log(res);  //必须全部符合条件
res = arr.some(function(x){ 
	return x>=18;  
})
console.log(res);  //有就可以

//indexOf  第一次搜索位置，根据元素找到对应索引,区分大小写
res = arr.indexOf(2,2);  //第二个是从第几次出现位置
console.log(res);
//lastIndexOf  最后一次出现位置
res = arr.lastIndexOf(2);
console.log(res);

//isArray判断是否是数组
console.log(Array.isArray(arr));
console.log(Array.isArray({})); //数组是对象对象不是数组

//toString
console.log(arr.toString());