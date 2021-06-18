
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball1,ball2,ball3,ball4,ball5,ball6
var ground,ground2,backgroundimg;
var sling1,sling2,sling3,sling4,sling5,sling6,bg,bg1
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;
function preload()
{
  getBackgroundImg();
  bg=loadImage("im.jpg")
  bg1=loadImage("images.jpg")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground = new Ground(400,600,800,10)
ground2=new Ground(600,400,230,10)
ball6 = new Ball(100,350)

box1=new Box(520,370,50,50)
box2=new Box(570,370,50,50)
box3=new Box(620,370,50,50)
box4=new Box(670,370,50,50)
box5=new Box(545,320,50,50)
box6=new Box(595,320,50,50)
box7=new Box(645,320,50,50)
box8=new Box(570,270,50,50)
box9=new Box(620,270,50,50)
box10=new Box(595,220,50,50)
sling6 = new SlingShot(ball6.body,{x:100, y:350});










	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  if(backgroundimg)
  background(backgroundimg);

  //sling1.display();
  //sling2.display();
  //sling3.display();
  //sling4.display();
  //sling5.display();
 
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();

  ground.display();
  ground2.display();
 // ball1.display();
  //ball2.display();
  //ball3.display();
  //ball4.display();
  //ball5.display();
    ball6.display();

    sling6.display();
  drawSprites();
 





  
  
  //keyPressed();

}



function mouseDragged(){
  Matter.Body.setPosition(ball6.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  sling6.fly();
}
function keyPressed(){
  if(keyCode===32)
  sling6.attach(ball6.body);
  Matter.Body.setPosition(ball6.body,{x:100,y:400}) 
  Matter.Body.setPosition(box1.body,{x:520,y:370})
  Matter.Body.setPosition(box2.body,{x:570,y:370})
  Matter.Body.setPosition(box3.body,{x:620,y:370})
  Matter.Body.setPosition(box4.body,{x:670,y:370})
  Matter.Body.setPosition(box5.body,{x:545,y:320})
  Matter.Body.setPosition(box6.body,{x:595,y:320})
  Matter.Body.setPosition(box7.body,{x:645,y:320})
  Matter.Body.setPosition(box8.body,{x:570,y:270})
  Matter.Body.setPosition(box9.body,{x:620,y:270})
  Matter.Body.setPosition(box10.body,{x:595,y:200})
 
}

async function getBackgroundImg(){

var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
var responseJSON = await response.json();  

var datetime=responseJSON.datetime;
var hour=datetime.slice(11,13);



if(hour>=6 && hour<=18){

  backgroundimg=bg1
}

else{
backgroundimg=bg

}
//console.log(backgroundImg);

}
