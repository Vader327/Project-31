const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var ground, i;

var particles = [];
var plinkos = [];
var divisions = [];

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240,height,480,20);

  title = createElement("h3");

  for(i = 0; i<=width; i+=80){
    divisions.push(new Ground(i,height - 150,10,300));
  }

  for(i = 40; i<=width; i+=50){
    plinkos.push(new Plinko(i,75));
  }
  for(i = 15; i<=width; i+=50){
    plinkos.push(new Plinko(i,175));
  }
  for(i = 40; i<=width; i+=50){
    plinkos.push(new Plinko(i,275));
  }
  for(i = 15; i<=width; i+=50){
    plinkos.push(new Plinko(i,375));
  }
}

function draw() {
  background(0);  
  Engine.update(engine);

  ground.display();

  title.html("Plinko");
  title.elt.id = "title";
  title.position(180, 370);

  for(i = 0; i < divisions.length; i++){
    divisions[i].display();
  }

  for(i = 0; i < plinkos.length; i++){
    plinkos[i].display();
  }

  if(frameCount%30===0){
    particles.push(new Particle(random(width/2 - 100, width/2 + 100), 0));
  }
  for(i = 0; i < particles.length; i++){
    particles[i].display();
  }
}