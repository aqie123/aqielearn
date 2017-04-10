<?php
$fp = fopen("./1.txt","a"); // 追加方式打开，没有自动创建

fwrite($fp,date("Y-m-d H:i:s")."\n");   // 向文件中写入时间

$exits_name = array('aqie','admin');

if($_SERVER['REQUEST_METHOD']=="POST"){
  echo "<div style='color:red'>post方式请求</div>";
  print_r($_POST);
  // $name = $_POST['name'];

}else{
  echo "<div style='color:green'>get方式请求</div>";

  
  // 输出客户端传递过来用户名信息
  // print_r($_GET);   // 打印所有get变量
  $name = empty($_GET['name']) ? 'admin' : $_GET['name'];

  // 判断用户名是否存在
  if(in_array($name,$exits_name)){
    echo "用户名已经存在";
  }else {
    echo "用户名可以使用";
  }
}





/**
 *post  get 区别
 1. 传递数据量 get方式受浏览器，传递数据少
 2.post传递数据更安全
 3.数据形式：  get ：在url后边以请求字符串形式传递(名值对)
              post ：以xml形式传递

  php编码函数 ：urlencode()/urldecode()    编码和反编码
  javascript : encodeURIComponent() 

*/