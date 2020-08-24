var car, wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);

  car = createSprite(50,200,40,40);

  wall = createSprite(1500,200,10,height/2);
  wall.shapeColor=color(0); 
}

function draw() {
  background(0,255,255); 
  
  speed=random(15,90);
  weight=random(300,1500);

  car.velocityX=speed;

  if(wall.x-car.x <(car.width + wall.width)/2)
  {
    car.velocityX=0;

    var deformation = 0.5*weight*speed*speed/22500;
    
    if(deformation>180)
    {
      car.shapeColor=color(255,0,0);
    }

    if(deformation>100 && deformation<180)
    {
      car.shapeColor=color(230,230,0);
    }

    if(deformation<100)
    {
      car.shapeColor=color(0,255,0);
    }
  }
  
  drawSprites();
}