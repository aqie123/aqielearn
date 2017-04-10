<?php 
include "conn.php";
// echo "当前页数是：".$currentpage. ".<br>";
$re = mysqli_query($con,"select * from guestlist");
$contents = array();
$outp='';
while($rs = mysqli_fetch_array($re)){
			 
			  // $contents[]=$rs["username"];//保存到数组中
	   if ($outp != "") {$outp .= ",";}
	    $outp .= '{"Name":"'  . $rs["username"] . '",';
	    $outp .= '"Title":"'   . $rs["title"]        . '",';
	    $outp .= '"Date":"'. $rs["adddate"]     . '"}'; 
	}
	$outp ='{"records":['.$outp.']}';

//插入数据
// $sql_insert = "insert into guestlist (username values('$username'))";
	$con->close();
		// print_r($contents);
		 echo($outp);
?>