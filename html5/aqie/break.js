// window.onload= init;
window.onmousemove = mouseMoveHandler;
var context,leval=1;
var bg2, ball,board;
// canvas 宽高
var cW = 1024, cH = 670;
// 下面挡板初始位置
var boardX = 0,boardY = 640;
// 小球位置
var ballX= 490, ballY = 330;
// 小球速度
var vx = vy = 0;

var bricks = [];
// 游戏暂停
var pause = document.getElementsByTagName('button')[0];
var begin = document.getElementsByTagName('button')[1];
var midx,midy;
var mid= true;
var play;
var canvas2 = document.getElementById('leval');
var canleval = canvas2.getContext('2d');

function init() {
  // log("init");
  var canvas = document.getElementById('gameCanvas');
  context = canvas.getContext('2d');
  bg2 = addImage("images/3.jpg");
  board = addImage("images/4.png");
  ball = addImage("images/0.png");
  createBricks();
  // 单独删掉某一个砖块
  // bricks.splice(0,5);  // (索引，删几个)
  // if(!confirm('开始游戏')) return;
  setTimeout(ballmove,2000);
  play = setInterval(gameTick,1000 / 60); 
}
function ballmove(){
  switch(leval){
    case 1:
    vx = 4, vy = 8;
    break;
    case 2:
    vx = 5, vy = 9;
    break;
    case 3:
    vx = 7, vy = 12;
    break;
    case 4:
    vx = 8, vy = 16;
    break;
  }
  
}

// 游戏主体绘制
function gameTick(){
  clearScreen();
  context.drawImage(bg2,0,0,1024,cH);      // (图片，起始坐标，宽高) 背景图片
  context.drawImage(board,0,0,528,42,12,0,1000,30);   //  (图片,截取起始宽度,截取宽高,放置xy,图片显示大小) 上面挡板
  context.drawImage(board,0,0,528,42,boardX,boardY,210-(leval-1)*50,18);   //  (图片,截取起始宽度,截取宽高,放置xy,图片显示大小，) 下面挡板
  updateBricks();
  updateBall();
  testBallAndBoard();
  testBallAndBricks()
}
// 小球和挡板碰撞
function testBallAndBoard() {
  var hit = hitTestPoint(boardX,boardY,210,18,ballX,ballY+40);
  if(hit) {
    // ballY = boardY - (18+40);
    vy *= -1;
    // vx *= 0;
  }
}
// 小球和砖块碰撞
function testBallAndBricks() {
  for(var i =bricks.length-1;i>=0;i--){
    var item = bricks[i];
    var hit = hitTestPoint(item.x, item.y,190,66,ballX,ballY);
    // var hit2 = hitTestPoint(item.x, item.y,190,66,ballX+40,ballY);
    if(hit ){
      vy *= -1;
      bricks.splice(i,1);     // 删除第i个
    }
    if(bricks.length === 0){        // 升级
      // alert("升级了")
      levalup();
      leval++;
      begingame();
      
    }
  }
}

// 碰撞检测
function hitTestPoint(x1,y1,w1,h1,x2,y2){     //(检测碰撞物体坐标,被碰撞物体宽高,碰撞的点)
  if(x2>=x1 && x2<= x1+w1 && y2>=y1 && y2 <= y1+h1){
    return true;
  }else{
    return false;
  }
}
// 显示砖块
function updateBricks(){
  for(var i = 0;i<bricks.length;i++){
    var item = bricks[i];
    context.drawImage(item.item, item.x,item.y,190,66);   // 砖块宽高190,66
  }
}
// 砖块存进数组5行4列
/*function createBricks(){
  for(var i = 0;i < 5 ;i++){
    for(var j = 0;j<4;j++){
      var item = addImage("images/images/a1.png");
      bricks.push({item :item,x:20 + (198) *i,y:60 +70*j});
    }
    
  }
}
*/
// 砖块存进数组5行4列
function createBricks(){
  for(var i = 0;i < 5 ;i++){
    for(var j = 0;j<4;j++){
      var item = addImage("images/images/a"+rnd(1,5)+".png");
      bricks.push({item :item,x:20 + (198) *i,y:30 +70*j});
    }
    
  }
}

// 重绘小球 (小球弹跳运动)
function updateBall() {
  ballX += vx;
  ballY += vy;
  if(ballX < 0){
    ballX = 0;
    vx *= -1;
  }else if(ballX > cW -40){        // x轴超出左右边界(画布宽度减去小球宽度)
    ballX = cW - 40;
    vx *= -1;
  }

  if(ballY < 30 ){
    ballY = 30;
    vy *= -1;
  }else if(ballY >= 670-40){        // y轴超出上下边界(画布宽度减去小球宽度)
    faile();                         // 游戏结束
    clearInterval(play);
    context.drawImage(bg2,0,1146,1920,107.5,0,640,1024,60);      // (图片，截取起始坐标，截取宽高，放置起始坐标，宽高) 背景图片
    ballY = 670-40;
    // vy *= 0;
    
  }
  context.drawImage(ball,ballX,ballY,40,40);    //绘制小球 宽高40
}

// 挡板跟随鼠标移动
function mouseMoveHandler(e) {
  boardX = e.x - 125;
  if(boardX<=0){
    boardX =0;
  }else if(boardX+210>1024){
    boardX =1024-210;
  }
  // boardY  = e.y;
}

// 清屏
function clearScreen(){
  context.clearRect(0,0,cW,cH);
}
function addImage(url) {    // 添加图片
  var img = new Image();
  img.src = url;
  return img;
}


function log(msg) {
  console.log(msg);
}

function pausegame(){
    if(mid){
      midx = vx;
      midy = vy;
      // alert(mid)
      // alert(midx)
      vx = vy = 0;
      this.innerHTML = "继续";
      mid = false;
      // clearInterval(play);
    }else{
      vx = midx;
      vy = midy;
      // alert(mid);
      this.innerHTML = "暂停";
      mid = true;
    }   
  }

function begingame(){
    // alert(1)
    // context.clearRect(0,0,cW,cH);
    clearInterval(play);
    ballX= 490, ballY = 330;
    vx = vy = 0;
    init();
  }
document.onkeydown = function(ev){
  console.log(ev.keyCode);
  var num =ev.keyCode;
  switch(num){
    case 65:
    pausegame();
    break;
    case 83:
    begingame();
    break;
  }

}
function rnd(min,max){
  var result = min+(max-min+1)*Math.random()
  return parseInt(result);
}
function faile(){
  context.font=("30px Georgia");
  context.fillStyle="#f00";
  canleval.clearRect(0,0,500,600);
  context.fillText("GAME OVER！",430,350);   //开始坐标，最大文本宽度

}
function levalup(){
  // alert(1)
  
  canleval.clearRect(0,0,500,600);
  canleval.font=("30px Georgia");
  canleval.fillStyle="#f00";
  canleval.fillText("恭喜你升级了！当前等级"+(leval+1)+'级',0,600);   //开始坐标，最大文本宽度
}