var startX = 0;
var startY = 0;
var moveX = 0;
var moveY = 0;
var X = 0;
var Y = 0;
var snakeHead = {
  x:0,
  y:0,
  color:"#ff0000",
  w:20,
  h:20
}
var direction = null;
var snakeDirection = "right";
Page({
  
  canvasStart:function(e){
    startX = e.touches[0].x;
    startY = e.touches[0].y;
    //Console.log(e);
  },
  canvasMove:function(e){
    moveX = e.touches[0].x;
    moveY = e.touches[0].y;

    X = moveX - startX;
    Y = moveY - startY;

    if(Math.abs(X)>Math.abs(Y) && X>0){
      direction="right";
    } else if (Math.abs(X) > Math.abs(Y) && X < 0){
      direction="left";
    } else if (Math.abs(Y) > Math.abs(X) && Y > 0){
      direction="down";
    } else if (Math.abs(Y) > Math.abs(X) && Y < 0){
      direction="top";
    }
  },
  canvasEnd:function(){
    snakeDirection=direction;
  },
  onReady:function(){
    var context = wx.createContext();

    function animate(){
      context.setFillStyle(snakeHead.color);
      context.beginPath();
      context.rect(snakeHead.x,snakeHead.y,snakeHead.w,snakeHead.h);
      context.closePath();
      context.fill();
      wx.drawCanvas({
        canvasId:"snakeCanvas",
        actions:context.getActions()
      });
      requestAnimationFrame(animate);
    } 
    animate();
  }
})
