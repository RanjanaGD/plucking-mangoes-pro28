
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy;
var tree1;
var ground,stone;
var mango1, mango2, mango3, mango4, mango5, mango6,mango7,mango8,mango9,mango10;
var slingShot;


function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);

	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


ground=new Ground(550,550,1400,10);

tree1=new Tree(800,55,30,50);
boy=new Boy(100,400,100,100);
mango1=new Mango(900,150,20,30);
mango2=new Mango(900,200,20,30);
mango3=new Mango(1000,200,20,30);
mango4=new Mango(1000,90,20,30);
mango5=new Mango(1100,140,20,30);
mango6=new Mango(1000,140,20,30);
mango7=new Mango(1100,200,20,30);
mango8=new Mango(1050,140,20,30);
mango9=new Mango(950,100,20,30);
mango10=new Mango(950,200,20,30);








stone=new Stone(100,390,50,50);

slingShot = new Slingshot(stone.body,{x:200,y:400});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  
  

tree1.display();
ground.display();
boy.display();
mango1.display();
mango2.display();
mango3.display();
mango4.display();
mango5.display();
mango6.display();
mango7.display();
mango8.display();
mango9.display();
mango10.display();
stone.display();
slingShot.display();







detectollision(stone,mango1)
detectollision(stone,mango2)
detectollision(stone,mango3)
detectollision(stone,mango4)
detectollision(stone,mango5)
detectollision(stone,mango6)
detectollision(stone,mango7)
detectollision(stone,mango8)
detectollision(stone,mango9)
detectollision(stone,mango10)


  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    slingShot.fly()
}

function detectollision(lstone,lmango){

mangoBodyPosition=lmango.body.position
stoneBodyPosition=lstone.body.position

var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);

if(distance<=lmango.r+lstone.r){
	Matter.Body.setStatic(lmango.body,false);
}

}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:100,y:390})
		slingShot.attach(stone.body);
	}
}

