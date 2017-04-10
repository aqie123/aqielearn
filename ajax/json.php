<?php
/**
 * json javascript object notation      js对象符号
 * 三种对象声明 ： 字面量(就是json),构造函数,object对象
 */
//生成json信息 json_encode()
// 关联数组  json
$weather = array('city'=>'beijng','wind'=>'south');
$json = json_encode($weather);
//print_r($json);

// 索引数组  ->array数组
$color = array('red','blue');
$color =  json_encode($color);
//print_r($color);

// 索引加关联    ->json
$weather = array('city'=>'beijing','wind'=>'south','sun');
$json = json_encode($weather);
//print_r($json);

// 对象 ->json
class Person{
    public $name = 'aqie';
    public $age = 24;
    public function read(){
        echo "I can Read";
    }
}
$person = new Person();
$person = json_encode($person);
//print_r($person);

// 对json数组反编码
// 默认false返回object
$contraryJson = json_decode($json,false);
// 返回数组
$contraryJson = json_decode($json,true);
//print_r($contraryJson);



// 对json字符串进行反编码
$json_city = '{"山东":"济南","福建":"福州","广东":"广州"}';
$contraryJson = json_decode($json_city,true);       // 数组
$contraryJson = json_decode($json_city,false);       // 对象
print_r($contraryJson);


?>

<script>
    /**
     * ajax服务器端请求json信息
     */

    function getJson(){
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if(xhr.readyState ===4){
                console.log(xhr.responseText);            // 字符串 string => 对象
                eval("var data=" + xhr.responseText);   // 字符串信息转为实体对象
                console.log(data.city);
                console.log(data.wind);
            }
        };
        // 默认不允许跨域
        xhr.open('get','./data.php');
        xhr.send(null);
    }
    getJson();

    // 小demo js 把字符串转换为对象
    /*
    var obj = "{name:'aqie',age:5}";
    eval("var cat="+obj);
    console.log(cat);
    */
    
</script>

