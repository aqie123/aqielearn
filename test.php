<?php 
// echo "hello world";
/**

echo $s = base_convert(2469767744,10,2),"<br>";
echo $a = base_convert("10010011001101011010101001000000",2,10);
echo "<br>";
echo strlen($s);
echo "<br>";
echo bindec('10010011001101011010101001000000'),"<br>";
echo count($a);
echo "<br>";
echo count("10010011001101011010101001000000");
*/

session_start();
$mem = new Memcache();
$mem->connect('localhost','11211');
// $mem ->addServer("localhost",11212);

echo $mem->get('mut4ir03cj4oqms39gpi2vojo0');


 ?>