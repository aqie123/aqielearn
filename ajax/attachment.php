<?php
// 收集 表单+上传文件
/*
echo "post:";
print_r($_POST);
echo '<br>files:';
print_r($_FILES);
*/
//附件上传有问题
if($_FILES['avatar']['error']>0){
    exit('附件有问题');
}
// 附件上传

$path = "./upload/";
$name = date("YmdHis").mt_rand(1000,9999);
//附件名称
$name_arr = explode('.',$_FILES['avatar']['name']);
// 附件后缀
$ext = ".".$name_arr[count($name_arr)-1];
//附件真实路径名
$pathname = $path.$name.$ext;
if(move_uploaded_file($_FILES['avatar']['tmp_name'],$pathname)){
    echo "文件上传成功";
}else{
    echo "失败";
}