<?php
// 对服务器请求同时传递get参数
$subject = "aqie&age=24";
$subject = urlencode($subject);
echo "<a href='./file.php?name=$subject'> 点击</a>";