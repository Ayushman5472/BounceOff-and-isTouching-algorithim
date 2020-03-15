function isTouching(rect1,rect2){
    if(rect1.x-rect2.x<rect1.width/2+rect2.width/2&&
      rect2.x-rect1.x<rect2.width/2+rect1.width/2&&
      rect1.y-rect2.y<rect2.height/2+rect1.height/2&&
      rect2.y-rect1.y<rect2.height/2+rect1.height/2){
       //rect1.shapeColor="red"
       //rect2.shapeColor="red"
       return true
     }
     else{
       //rect1.shapeColor="cyan"
       //rect2.shapeColor="cyan"
     return false
      }
  }
  function bounceOff(movingRect,fixedRect){
    movingRect.velocityX = movingRect.velocityX * (-1);
  fixedRect.velocityX = fixedRect.velocityX * (-1);
    if (movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
      && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
      movingRect.velocityY = movingRect.velocityY * (-1);
      fixedRect.velocityY = fixedRect.velocityY * (-1);
      }
  }