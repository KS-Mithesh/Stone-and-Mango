const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var engine, world;
var lstone,lmango;
var bg;
var tree1;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7;
var boy1;
var stone1;
var chain1;

function setup(){
    createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    tree1 = new tree(950,320);

    mango1 = new mango(850,220);
    mango2 = new mango(900,200);
    mango3 = new mango(1050,150);
    mango4 = new mango(1100,250);
    mango5 = new mango(990,80);
    mango6 = new mango(950,150);
    mango7 = new mango(990,250);

    boy1 = new boy(250,450);

    stone1 = new stone(145,365);

    chain1 = new chain(stone1.body,{x:145,y:357});
}

function preload() {
  bg = loadImage("sprites/BG.jpg");
}
function draw() {
  Engine.update(engine);
  background(bg);

  tree1.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();

  boy1.display();

  stone1.display();

  chain1.display();

  detectCollision(mango1,stone1);
  detectCollision(mango2,stone1);
  detectCollision(mango3,stone1);
  detectCollision(mango4,stone1);
  detectCollision(mango5,stone1);
  detectCollision(mango6,stone1);
  detectCollision(mango7,stone1);

  
  drawSprites();
}

function mouseDragged(){
  Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  chain1.fly();
}

function keyPressed(){
  if(keyCode === 32) {
      Body.setPosition(stone1.body,{x:145,y:357});
      chain1.attach(stone1.body);
  }
}
function detectCollision(lmango,lstone){
  posMango = lmango.body.position;
  posStone = lstone.body.position;

  var distance = dist(posStone.x,posStone.y,posMango.x,posMango.y);
  if (distance<=15+20)
  {
    Matter.Body.setStatic(lmango.body,false);
  }
}