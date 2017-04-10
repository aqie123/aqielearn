/*
document.write("这是javascript打出的第一句话");
document.write("<p>这是一个段落！</p>");
document.write("hello 反斜杠在js里换行\
 world!");

*/
//替换文字函数
function replace_(){
var	x=document.getElementsByClassName("demo");//定义变量并找到元素；
	x[0].innerHTML="Hello JavaScript";//替换内容，被替换内容可以是变量
	x[0].style.color="#ff0000";          // 改变样式

}

//替换图片函数
function change_Image(){
var	Img=document.getElementsByClassName('myimage')[0];

	if (Img.src.match("3")){
		Img.src="./picture/7_lern/1.jpg";
	}else{
	    Img.src="./picture/7_lern/3.jpg";

	}

}


//验证填入的是否是数字
function verifi(){
	var Tex=document.getElementsByClassName("tex")[0].value;
	if(Tex==""||isNaN(Tex)){
		alert("This is not number!");
	}
}

//alert(i);
//九九乘法表
document.write("<hr  color='red'/>");
document.write('<table border="1"cellpadding="0" bgcolor="#eee" width="900px" height="900px"> ');
for(var i=1;i<=9;i++){
  document.write("<tr>");
  for(var j=1;j<=i;j++){
    document.write("<td width='100px' height='100px'>"+i+"x"+j+"="+(i*j)+"</td>")
  }
  document.write("</tr>");
}
document.write("</table>")
//倒着打印九九乘法表
document.write("<hr  color='red'/>");
document.write('<table border="1" cellpadding="0" bgcolor="#000" width="900px" height="900px">');
for(var i=9;i>=1;i--){
  document.write("<tr>");
  for(var j=1;j<=i;j++){
    document.write("<td width='100px' height='100px'>"+i+"x"+j+"="+(i*j)+"</td>")
  }
  document.write("</tr>");
}
document.write("</table>");

//百钱买百鸡
for(var i=0;i<=20;i++){//公鸡每只五元
  for(var j=0;j<=33;j++){
    for(var k=0;k<=100;k++){
      if((i+j+k==100)&&(5*i+3*j+k/3==100))
        document.write("公鸡:"+i+"母鸡:"+j+"小鸡:"+k+"<br>");
    }
  }
}
document.write("百钱买百鸡解法2<br/>")
for(var i=0;i<20;i++){
  for(var j=0;j<=33;j++){
    k=100-j-i;
    if((k%3==0)&&(5*i+3*j+k/3==100)){
       document.write("公鸡:"+i+"母鸡:"+j+"小鸡:"+k+"<br>");
    }
  }
}
document.write("while循环<br>");
i=1;
while(i>0){
  document.write(i+"<br>");
  i++;
  if(i==3){
    i++;
    continue;//跳过当次循环
  }
  if(i==10){
    break;
  }

}
document.write("函数使用<br>");
function calc(x,y){
  if(x===undefined){
    x=0;
  }
  y=y===undefined?0:y;
  return x+y;

}
//alert(calc(1,3));
function max(x,y){
  //return arguments;
  x=arguments[0]?arguments[0]:0;
  y=arguments[1]?arguments[1]:0;
  return x+y;
}
//alert(max());
//alert(max(1,2));
function test(){
  var paramsNum=arguments.length;
  var sum = 0;
  var max11=0;
  for(var i=0;i<paramsNum;i++){
    if(arguments[i]>max11){
      max11=arguments[i];
    }
    sum+=arguments[i];
  }
  return max11;
}
//alert(test(1,2,3,455));
document.write(parseFloat('2.8e2')+"<br>");
var K = "甲乙丙丁戊己庚辛壬癸";  
var J = "子丑寅卯辰巳午未申酉戌亥"; 