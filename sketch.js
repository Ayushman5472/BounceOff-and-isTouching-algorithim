var fixedRect
var movingRect
var sprite1,sprite2,sprite3
function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 50);
  movingRect=createSprite(100,100,60,60);
  fixedRect.shapeColor="cyan"
  movingRect.shapeColor="cyan"
  sprite1=createSprite(200,300,20,20)
  sprite2=createSprite(500,300,20,20)
  sprite3=createSprite(700,300,20,20)
  sprite1.shapeColor="red"
  sprite2.shapeColor="green"
  sprite3.shapeColor="blue"
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(255,255,255);  
  drawSprites();
movingRect.x=mouseX
movingRect.y=mouseY
var answer = isTouching(sprite3,movingRect);
console.log(answer)
if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
  && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2) {
bounceOff(movingRect,fixedRect)
}

}
