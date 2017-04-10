


function add(){
	var paramsNum=arguments.length;//得到传入参数个数
	var sum = 0;
	var max = 0;
	for(var i =0; i<paramsNum;i++){
		if(arguments[i]>max){
			max=arguments[i];
		}
		sum+=arguments[i];
	}
	// return max;
	return sum;
}
function aqie(a,b,c,callback){
	var i,arr =[];
	for(i=0;i<3;i++){
		arr[i]=callback(arguments[i]*2);
	}
	return arr;
}
//判断类型
function classof(obj){
	if(obj===null){
		return 'NULL';
	}
	if(obj ===undefined){
		return 'Undefined';
	}
	return Object.prototype.toString.call(obj).slice(8,-1);
}


function MyError(msg){
	this.name = 'MyError';
	this.message = msg||'默认的自定义错误信息';
}
MyError.prototype = Object.create(Error.prototype);
MyError.prototype.constructor = MyError;      







