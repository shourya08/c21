var ob1,ob2,ob3,ob4

function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(200, 200, 50, 80);
  fixedrect.shapeColor="green";
  movingrect=createSprite(400,200,80,30);
  movingrect.shapeColor="green";
ob1=createSprite(100,100,50,50);
ob1.shapeColor="green"
ob2=createSprite(200,100,50,50);
ob2.shapeColor="green"
ob3=createSprite(300,100,50,50);
ob3.shapeColor="green"
ob4=createSprite(400,100,50,50);
ob4.shapeColor="green"


}

function draw() {
  background(255,255,255);
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;
if(isTouching(movingrect,ob1
  )){
  movingrect.shapeColor="red";
ob1.shapeColor="red";

}
else{
  movingrect.shapeColor="green";
  ob1.shapeColor="green";
}
  drawSprites();
}
function isTouching(object1,object2
  ){
  if(object1.x-object2.x<object2.width/2+
    object1.width/2
    && object2.x-object1.x<object2.width/2+object1.width/2
    &&object1.y-object2.y<object2.height/2+ object1.height/2
    &&object2.y-object1.y<object2.height/2+object1.height/2){
   return true;
  
  }
  else{
    return false;
  }
} 