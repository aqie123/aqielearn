/**
 *responseText  : 以字符串形式接收服务器返回信息
*readyState:ajax对象状态
* responseXML 相应信息格式化为xml对象，并返回
status :当前请求的http状态码
  200 --正常
  304 -- 没有缓存
  404 没有找到
  403 禁止访问
  50X 服务器端有错误
statusText :返回当前请求的响应行状态

0:创建ajax对象
1：有调用open方法
2：有调用send方法
3:只返回部分数据
4：数据返回完整

setRequestHeader : 单独指定请求的某个http头

onreadystatechange : ajax事件在readyState状态变化发生变化时候触发
*/
function getRequest(file,id){
 
  //1.创建对象
  var xhr = new XMLHttpRequest(id);
  //4. 状态改变事件
  xhr.onreadystatechange = function res(){
    // 获得状态变化信息
    // console.log(xhr.readyState);
    if(xhr.readyState === 4){
      // console.log(1);
      document.getElementById(id).innerHTML =  xhr.responseText;
    }
  };

  //2.open(get / post,地址)创建http请求协议
  xhr.open('get',file);

  // 3.把http请求发送给服务器(send(get-null)/post(数据))
  xhr.send(null);
  return xhr.onreadystatechange();
  
}

function checkname(file,name){
  // 获得用户名，并传递给服务器端
  var username = name;

  // 对username 编码处理
  username = encodeURIComponent(username);

  //1.创建对象
  // &->%26  =->%3D
  var xhr = new XMLHttpRequest();
  //4.
  xhr.onreadystatechange = function res(){
    // 获得状态变化信息
    if(xhr.readyState === 4){
      alert(xhr.responseText);
    }
  };
  //2.
  xhr.open('get',file+'?name='+username+'&age=24');
  //3.
  xhr.send(null);
}