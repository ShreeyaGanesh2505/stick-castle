const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
   world = engine.world;
  box1 = new Box (600,70,30,370);

}

function draw() {
  background(0); 
  Engine.update(engine);
  box1.display();
  //rect(600,70,30,370);
  //rect(140,70,30,370);
  //rect(500,200,90,200);
  //rect(410,100,80,300);
  //rect(340,200,70,250);
  //rect(280,100,60,300);
  //rect(180,120,100,290);

  triangle(30, 75, 58, 20, 86, 75);
  drawSprites();
}
