
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var rope;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	fill("red");
	bobObject1 = new Bob(600,300,50);
	bobObject2 = new Bob(650,300,50);
	bobObject3 = new Bob(700,300,50);
	bobObject4 = new Bob(750,300,50);
	bobObject5 = new Bob(800,300,50);

	//DustBin1 = new dustbin(1200,650,20,50);

	fill("red");
	roof = new Roof(700,100,300,25);

	rope = new Rope(bobObject1,{x:600,y:100});
	//keyPressed();

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  //DustBin1.display();

  roof.display();

  drawSprites();
 
}

//function keyPressed(){
	//if(keyCode === UP_ARROW) {
	//	Matter.Body.applyForce(Paper1.body,Paper1.body.position,{x:85,y:-85});
//	}
//}

