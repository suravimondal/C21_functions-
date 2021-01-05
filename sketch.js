var fixedRect, movingRect;
var car, wall;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  car= createSprite(200,200,30,20);
  car.shapeColor= "white";
  car.velocityX= 5;
  wall= createSprite(600,200,10,80);
  wall.shapeColor= "brown";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

if(is_touching(car, wall)){
  car.shapeColor= "lightblue";
  textSize(30);
  fill("yellow");
  text("TOUCHED!!",200,300);
}  
BOUNCE_OFF(car,wall);

  drawSprites();
}
function collide(){
  
}
