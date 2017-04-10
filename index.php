
<?php 
  error_reporting(0);
  session_start();
  $ip = $_SERVER["REMOTE_ADDR"];
  echo $ip ;
  $myip = "127.0.0.1";
  if($ip==$myip){
  	// echo "yes";
  	$_SESSION['isok']='ok';
  }else{
  	echo "<script>location.href = 'https://aqie123.github.io/Tetris/'</script>";
    exit;
  }

?>


<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
	<title>欢迎</title>
	<link href="bootstrap/public/css/bootstrap.min.css" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="bootstrap/public/css/bootstrap.min.black.css">
	<script src="Vue/vue1.0/dist/vue.js"></script>
	<script src="Vue/learn/vue-resource.js"></script>
	<style>
	    body{
	    	color: rgb(245, 50, 50);
	    }
		table{
			margin:30px auto;
			text-align: center;
			position: fixed;
			top:110px;
			left:300px;

		}
		table td{
			display: inline-block;
			line-height: 50px;
			color:green;
		}
		table .btn{
			width:90px;
		}
		.mark{
			font-weight: bold;
			color: rgb(93, 28, 28);
		}
		.btn-danger {
		    color: rgb(255, 221, 44);
		    background-color: #ee5f5b;
		    border-color: #ee5f5b;
		}
		h1{
			text-align: center;
		}
		.gray{
			background-color: #918585;
		}
		ul{
			position: relative;
			margin-left: -40px;
		}
		li{
			width:250px;
			height: 30px;
			line-height: 30px;
			text-align: center;
			list-style: none;

		}

	</style>
</head>
<body>
	<h1>啊切</h1>

    <!-- 百度下拉菜单 -->
		<input type="text" name="" v-model="t1" @keyup="jsonp3($event)" @keydown.down="changeDown()" @keydown.up.prevent="changeUp()">
		<button @click="search()">啊切一下</button>
		<!-- <input type="text" name="" class="weblink" placeholder="请输入网址">
    <input type="text" class="webname" placeholder="请输入网址名称"> -->
    <!-- <button class="btn mark"> 提交网址</button>  -->
        <!-- 数据展示 -->
		<ul>
			<li v-for="value in myData" :class="{gray:$index==now}">
				{{value}}
			</li>
			<p v-show="myData.length==0">暂无数据</p>
		</ul>
		<!-- 百度下拉菜单 -->
		
		<!-- 有道翻译 开始-->
		<input type="text" name="" v-model="t1"><button @click="search2()">有道一下</button>
		<!-- 有道翻译结束 -->
			<br>
		<!-- 360搜索开始 -->
		<!-- <input type="text" name="" v-model="t1"><button @click="search3()">360一下</button> -->
		<!-- 360搜索结束 -->
		<br>
		<!-- 谷歌搜索开始 -->
		<input type="text" name="" v-model="t1" ><button @click="search4()">Google一下</button>
		<!-- 谷歌搜索结束 -->
		<br>
		<br>
		<!-- 百度搜索开始 -->
		<input type="text" name="" v-model="t1" ><button @click="search5()">百度云一下</button>
		<!-- 百度搜索结束 -->
    <script src="public/js/libs/jquery-3.1.1.min.js"></script>
    <script src="public/js/libs/bootstrap.min.js"></script>
		<script type="text/javascript">


		// document.write("<hr  color='red'/>");
		var k=a=b=c=0;
		var link= new Array(81);
		var linkname =new Array(81);
		length = linkname.length;
		
		// linkname[5]=linkname[5]===undefined?"aqie":linkname[5];		
		//开始手写
		link[0] = "https://www.google.com/";
		linkname[0] = "谷歌";
		link[1] = "http://www.css88.com/nav/";
		linkname[1] = "前端文档";
		linkname[2] = "Animate";
		link[2] = "https://daneden.github.io/animate.css/";

		linkname[3] = "翻译";
		link[3] = "http://fanyi.baidu.com/";
		
		linkname[4] = "组件";
		link[4]= "http://element.eleme.io/#/zh-CN/component/pagination";

		linkname[5] = "jQui";
		link[5]="http://jqueryui.com/";
		linkname[6]="amazeUI";
		link[6] ="http://amazeui.org/";
		linkname[7] = "Hui";
		link[7]="http://www.h-ui.net/H-ui.admin.shtml";
		linkname[8] = "mui";
		link[8]="http://dev.dcloud.net.cn/mui/";


		link[9] ="http://www.52pojie.cn/thread-498124-1-1.html";
		linkname[9] ="PJ";
		linkname[10]="资源库";
		link[10]="http://www.myexception.cn/other/1391134.html";
		linkname[11]="Vue官网";
		link[11]="http://cn.vuejs.org/v2/guide/";
		linkname[12]="码云";
		link[12]="https://git.oschina.net/";
		linkname[13]="handlebars";
		link[13]="http://www.cnblogs.com/iyangyuan/archive/2013/12/12/3471227.html";
		linkname[14]="WEB 开发";
		link[14]="https://developer.mozilla.org/zh-CN/docs/Web/Guide/HTML/HTML5";
		linkname[14]="花生壳";
		link[14]="http://aqie123.vicp.io/php/article2/foreground/index.php";
		linkname[15]="github";
		link[15]="https://github.com/"
		linkname[16]="react";
		link[16]="https://facebook.github.io/react/";
		linkname[17]="Web开发";
		link[17]="https://developer.mozilla.org/en-US/";


		linkname[18]="sass语法";
		link[18]="http://www.w3cplus.com/sassguide/syntax.html";
		
		linkname[19]="loadsh";
		link[19]="https://lodash.com/";
		linkname[20]="设计模式";
		link[20]="http://www.cnblogs.com/TomXu/archive/2012/02/20/2352817.html";
		linkname[21]="caniuse";
		link[21]="http://caniuse.com/usage-table";
		linkname[22]="BS中文";
		link[22]="http://v3.bootcss.com/components/";
		linkname[23]="yii2官网";
		link[23]="http://www.yiiframework.com/doc-2.0/index.html";
		linkname[24]="stackoverflow";
		link[24]="http://stackoverflow.com/";
		linkname[25]="前端网";
		link[25]="http://www.qdfuns.com/";
		linkname[26]="知乎";
		link[26]="https://www.zhihu.com/#signin";
		


		linkname[27]="HTML5";
		link[27] = "http://www.aqie.com/html5/1.html";
		linkname[28]="Css3";
		link[28]="http://www.aqie.com/css3/3.html"
		linkname[29]="canvas"
		link[29]="http://www.cnblogs.cm/vajoy/p/3914131.html";
		linkname[30]="Response"
		link[30]="http://www.aqie.com/response/src";
		linkname[31]="Vue";
		link[31]="http://www.aqie.com/Vue/5.html";
		linkname[32]="饿了吗";
		link[32]="http://www.cnblogs.com/woodk/p/6048890.html";
		linkname[33]="Vue2";
		link[33]="http://www.aqie.com/Vue2/1.html";
		linkname[34]="yii2中文网";
		link[34]="http://www.yiichina.com/doc/api/2.0";

		link[36]="knockout/1.html";
		linkname[36]="Knockout";

		linkname[37] = "jquery";
		link[37] = "http://www.aqie.com/jquery/1.html";

		linkname[38] = "Javascript";
		link[38] = "http://www.aqie.com/javascript/1.html";
		linkname[39] = "bootstrap";
		link[39] = "http://www.aqie.com/bootstrap/1.html";
		linkname[40] = "Angular";
		link[40] = "http://www.aqie.com/angular/1.html";
		
		linkname[41] = "Sass";
		link[41] = "http://www.aqie.com/sass/";
		linkname[42] = "ECMAScript";
		link[42] = "http://www.aqie.com/emcajs/1.html";
		linkname[43] = "Ajax/json";
		link[43] = "http://www.aqie.com/ajax/index.php";
		linkname[44] = "Webpack";

		linkname[45]="sublime";
		link[45]="https://www.zhihu.com/question/24896283?rf=19976788";
		linkname[46]="bootswatch";
		link[46]="http://bootswatch.com/";
		linkname[47]="ThinkPHP";
		link[47]="http://www.thinkphp.cn/";
		linkname[48]="php自学论坛";
		link[48]="http://www.phper.video";

		linkname[54]="门素材";
		link[54]="http://www.17sucai.com";
		linkname[55]="jquery插件库";
		link[55]="http://www.jq22.com/code589";
		linkname[56]="weui";
		link[56]="https://weui.io/";
		linkname[57]="后盾网";
		link[57]="http://bbs.houdunwang.com/";
		linkname[58]="啊切";
		link[58]="http://www.365cmd.com/forum.php?gid=379";
		linkname[59]="aqie";
		link[59]="http://www.aqie.com/php/aqie/databases.php";
		linkname[60]="码云";
		link[60]="https://git.oschina.net/";
		linkname[61]="码市";
		link[61]="https://coding.net/user";
		linkname[62]="aqieframe";
		link[62]="http://aqieframe.com/index.php";


		linkname[63]="PHP";
		link[63]="http://www.aqie.com/php/board/index.php";
		linkname[64]="MYSQL";
		linkname[65]="ThinkPHP";
		link[65]="http://www.tp.com//admin.php?c=login";
		linkname[66]="PHPadmin";
		link[66]="http://www.aqie.com/phpMyAdmin/index.php";
		linkname[67]="文章管理系统";
		link[67]="http://www.aqie.com/php/article/index.php";
		linkname[68]="文章2";
		link[68]="http://www.aqie.com/php/article2/login.php";
		linkname[69]="yii商城";
		link[69]="http://www.yii2.com/index.php?r=index/index";
		linkname[70]="php官网";
		link[70]="http://php.net/";
		linkname[71]="ecshop";
		link[71]="http://www.ecshop.com/admin/index.php";

		linkname[72]="移动前端";
		link[72]="http://www.aqie.com/mobile/index.html";
		linkname[73]="haoroom";
		link[73]="http://www.haorooms.com";
		linkname[74]="慕课php";
		link[74]="http://www.imooc.com/course/landingpagephp?from=phpkecheng";
		linkname[75]="接口";
		link[75]="http://gank.io/";
		linkname[76]="博客后台";
		link[76]="http://www.aqie.com/php/article2/backstage/add_content.php";
		linkname[77]="七牛";
		link[77]="https://portal.qiniu.com/bucket/aqie-shop/index";
		linkname[78]="yii2商城1.0";
		link[78]="http://www.aqie.com/php/yiitest/basic/web/index.php?r=index/index";
		linkname[79]="博谷";
		link[79]="http://v.itcast.cn/map/23.html?qq-pf-to=pcqq.group";
		linkname[80]="php规范";
		link[80]="https://psr.phphub.org/";
		
		
		
		
		


		//循环打出表格
		document.write('<table border="1"cellpadding="0" bgcolor="#eee" width="812px" height="450px"> ');
		for(var i=1;i<=9;i++){
			document.write("<tr>");
			for(var j=1;j<=9;j++){
				linkname[k]=linkname[k]===undefined?"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;":linkname[k];

			document.write("<td width='90px' height='50px'><a href='"+link[k]+"'target='_blank' class="+k+"><button class='btn btn-danger "+k+"'>"+linkname[k]+"</button></a></td>");
			k++;

		}
		document.write("</tr>");
		}
		document.write("</table>")
        // alert($)
        //向表格添加网址
        // var $elements = $('')
        		$(".mark").click(function(){
					
					var webname = $(".webname").val();
					var weblink = $(".weblink").val();
        			// alert(webname);
					for(var a=0;a<length;a++){
						if(linkname[a]==="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"){
							// alert(a); a=3现在

							// linkname[a]=webname;
							// alert(linkname[a]);
							// alert(linkname[2]);
							if(webname==''){
								$(".btn-danger").eq(a).text("新网址");
							}else{
								$(".btn-danger").eq(a).text(webname);
							}
							
							// $(".btn-danger").parents("a:eq(a)").attr("href",weblink);
							$(".btn-danger").eq(a).parent().attr("href",weblink);
							 break;
						}
					}
				});

     new Vue({
			el:'body',		
			data:{
				msg:'aqie',
				myData:[],
				t1:'',
				now:-1
				
			},
			json:{

			},
			methods:{
				jsonp:function(ev){			// 谷歌获取数据
					this.$http.jsonp('https://www.google.com/complete/search',{
						q:'javascript'
					},{
						jsonp:'xhr'				//callback名字
					}).then(function(res){
						alert(res.data.s)
					},function(res){
						alert(res.status)
					});

				},
				jsonp1:function(ev){			// 有道获取数据
					this.$http.jsonp('http://dsuggest.ydstatic.com/suggest.s',{
						wd:'javascript'
					},{
						jsonp:'cb'				//callback名字
					}).then(function(res){
						alert(res.data.s)
					},function(res){
						alert(res.status)
					});

				},
				jsonp2:function(ev){			// 360获取关键字
					this.$http.jsonp('https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su',{
						wd:'javascript'
					},{
						jsonp:'cb'				//callback名字
					}).then(function(res){
						alert(res.data.s)
					},function(res){
						alert(res.status)
					});

				},
				jsonp3:function(ev){			// 百度获取关键字
					if(ev.keyCode==38 ||ev.keyCode==40){    //按上下键，不再接收数据
						return
					};
					if(ev.keyCode==13){						//按回车进行搜索
						window.open('https://www.baidu.com/s?wd='+this.t1);
						this.t1='';
					}

					this.$http.jsonp('https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su',{
						wd:this.t1
					},{
						jsonp:'cb'				//callback名字
					}).then(function(res){
						this.myData=res.data.s
					},function(res){
						alert(res.status)
					});

				},
				changeDown:function(){
					this.now++;
					this.now %= this.myData.length;
					this.t1=this.myData[this.now];
				},
				changeUp:function(){
					this.now--;
					// alert(this.myData.length)   //10					
					if(this.now<0){
						this.now=this.now+this.myData.length;
						this.t1=this.myData[this.now];
					}
					// console.log(this.now)
				},
				search:function(){		// 百度搜索
					// alert(this.myData.length) 
					
					window.open('https://www.baidu.com/s?wd='+this.t1);
					this.t1='';
					this.myData=[];

				},
				search2:function(){		// 有道搜索
					window.open('http://www.youdao.com/w/eng/'+this.t1+'/#keyfrom=dict2.index');
				},
				search4:function(){		// 谷歌搜索
					window.open('https://www.google.com/#q='+this.t1+'&*');
				},
				search5:function(){		// 百度搜索
					window.open('http://baiduyun.57fx.cn/so-result.html?keyword='+this.t1);
				},
			},

		})

     console.log(({}+{}).length);
	</script>
</body>
</html>