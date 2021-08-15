var trex,trex_running;
var ground, groundimg;

function preload(){
  
trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
groundimg = loadImage("ground2.png");
}



function setup(){
  createCanvas(600,200);
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running",trex_running);
  trex.scale = 0.5;
  


ground = createSprite(200,180,400,20);
ground.addImage("ground",groundimg);

}


function draw(){
  background("white");

  ground.velocityX = -3;

  if(ground.x<0){
    ground.x = ground.width/2;
  }



if(keyDown("space")){
  trex.velocityY = -20
  
}

trex.velocityY = trex.velocityY + 0.8;



trex.collide(ground);
  drawSprites();
  
}