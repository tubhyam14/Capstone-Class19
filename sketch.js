var tower,towerImg;
var doorImg, door, doorGroup;
var climber, climberImg, climberGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var sound;
var gameState="play";

function preload()
{
    towerImg = loadImage("tower.png");
    doorImg= loadImage("door.png");
    climberImg= loadImage("climber.png");
    ghostImg= loadImage("ghost-standing.png");
    sound=loadSound("spooky.wav");


}

function setup(){
createCanvas(600,600);
sound.loop();
tower= createSprite(300,300);
tower.addImage(towerImg)
tower.velocityY= 1;

doorGroup= new Group();
climberGroup = new Group();
invisibleBlockGroup= new Group();

ghost= createSprite(200,200,50,50);
ghost.addImage(ghostImg);
ghost.scale=0.3;


}
function draw(){
background("black")



if(gameState==="play"){
if(keyDown("left")){
  ghost.x=ghost.x - 3;

}
if(keyDown("right")){
    ghost.x=ghost.x + 3;
  
  }
  if(keyDown("space")){
    ghost.velocityY=-5;

   }
 ghost.velocityY=ghost.velocityY+0.8;
 if(climberGroup.isTouching(ghost)){
    ghost.velocityY=0;

 }
 if(tower.y>400){
    tower.y=300;
}

 if(invisibleBlockGroup.isTouching(ghost)|| ghost.y>600){
    ghost.destroy();
    

 }

spawnDoor();
drawSprites();
}

if(gameState==="end"){
 stroke("yellow");
 fill("red");
 textSize(30);
 text("Game Over",230,250);


}

}
function spawnDoor(){
if ( frameCount % 240===0){
    door = createSprite(200,-50);
    door.addImage(doorImg);
    door.x=Math.round(random(120,400));
    door.velocityY=1;
    door.lifetime=800;
    doorGroup.add(door);

    climber=createSprite(200,10);
    climber.addImage(climberImg);
    climber.x=door.x;
    climber.velocityY=1;
    climber.lifetime=800;
    climberGroup.add(climber);

    invisibleBlock= createSprite(200,15);
    invisibleBlock.width=climber.width;
    invisibleBlock.height=2;
    invisibleBlock.x=door.x;
    invisibleBlock.velocityY=1;
    invisibleBlock.debug=true;
    invisibleBlockGroup.add(invisibleBlock);

    ghost.depth=door.depth;
    ghost.depth += 1;
}
}
  
        
    
