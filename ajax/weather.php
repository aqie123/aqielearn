<?php
header("content-type:text/html;charset=utf-8");
/**
 * 利用ajax跨域请求其他网站的信息
 */
// 本地文件其他网站地址
echo file_get_contents("http://www.weather.com.cn/data/sk/101010100.html");
?>