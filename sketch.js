
var movingRectangle;
var fixedRectangle;
var me;
var hi;
var box;

function setup() {
  createCanvas(800,400);
 movingRectangle=createSprite(300,120,50,30);
 movingRectangle.shapeColor = "green";
movingRectangle.velocityX = -1;
movingRectangle.velocityY = -1;
 
 fixedRectangle=createSprite(180,120,50,30);
 fixedRectangle.shapeColor = "green";
 fixedRectangle.velocityX = 1;
 fixedRectangle.velocityY = -1;

box = createSprite(600,100,50,30);
box.shapeColor = "blue";

me = createSprite(300,200,50,30);
me.shapeColor = "purple";

hi = createSprite(450,380,50,30);
hi.shapeColor = "orange";


}

function draw() {

  background(255,255,255);  
  box.x = World.mouseX;
  box.y = World.mouseY;
if(isTouching(box,hi)){
 box.shapeColor = "red";
  hi.shapeColor = "red";

}

else{
  box.shapeColor = "green";
    hi.shapeColor = "green";

}
bounceOff(movingRectangle,fixedRectangle)

/*if(movingRectangle.x - fixedRectangle.x<movingRectangle.width/2 + fixedRectangle.width/2 && fixedRectangle.x - movingRectangle.x <fixedRectangle.width/2 + movingRectangle.width/2 && fixedRectangle.y-movingRectangle.y< fixedRectangle.height/2 + movingRectangle.height/2 && movingRectangle.y - fixedRectangle.y<movingRectangle.height/2 + fixedRectangle.height/2){
  movingRectangle.shapeColor = "red";
  fixedRectangle.shapeColor = "red";
  movingRectangle.velocityX = movingRectangle.velocityX*(-1);
  movingRectangle.velocityY = movingRectangle.velocityY*(-1);
  fixedRectangle.velocityX = fixedRectangle.velocityX*(-1);
  fixedRectangle.velocityY = fixedRectangle.velocityY*(-1);
}
  else{
    movingRectangle.shapeColor = "green";
    fixedRectangle.shapeColor = "green";

  }*/
  drawSprites();
}
function isTouching(object1,object2)
{
if(object1.x - object2.x<object1.width/2 + object2.width/2 && object2.x - object1.x <object2.width/2 +object1.width/2 && object2.y-object1.y< object2.height/2 + object1.height/2 && object1.y - object2.y<object1.height/2 + object2.height/2){
return true;

}
else{
  return false;
}




}
function bounceOff(object1,object2){

if(object1.x - object2.x<object1.width/2 + object2.width/2 && object2.x - object1.x <object2. width/2 + object1.width/2 && object2.y-object1.y< object2.height/2 + object1.height/2 && object1.y - object2.y<object1.height/2 + object2.height/2){
  object1.velocityX = object1.velocityX*(-1);
  object1.velocityY = object1.velocityY*(-1);
  object2.velocityX = object2.velocityX*(-1);
  object2.velocityY = object2.velocityY*(-1);

}
}