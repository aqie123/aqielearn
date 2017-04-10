<?php
// 数组转换为字符串
$weather = array('city'=>'北京','wind'=>'south','sun');
$weather = json_encode($weather);
//echo $weather;
$cars = array
(
    array("Volvo",22,18),
    array("BMW",15,13),
    array("Saab",5,2),
    array("Land Rover",17,15)
);
$cars = json_encode($cars);
echo $cars;