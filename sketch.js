var ground;
var engine;
var world;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;
var particle;



function setup() {
  createCanvas(480, 800);
  engine = Matter.Engine.create()
  world = engine.world;
  ground = new Ground(240, 798, 480, 10);
  for (var k = 0; k <= width; k = k + 80) {
    var division = new Division(k, height - divisionHeight / 2, 19, divisionHeight)
    divisions.push(division);
  }

  for (var k = 0; k <= width; k = k + 80) {
    var p1 = new Plinko(k, 200)
    plinkos.push(p1);
  }

  for (var k = 0; k <= width; k = k + 80) {
    var p2 = new Plinko(k, 400)
    plinkos.push(p2);
  }

  
}



function draw() {

  background(0, 0, 0);
  Matter.Engine.run(engine);
  drawSprites();
  ground.display()
  for (var i = 0; i < divisions.length; i = i + 1) {

    divisions[i].display();

  }

  for (var i = 0; i < plinkos.length; i = i + 1) {

    plinkos[i].display();

  }

  if (frameCount%10===0){

particle = new Particle(random(10,470),0)
particles.push(particle)
console.log("fc")



  }

  if(particle!=null){
  particle.display()
  console.log("n")
  
for (var i = 0; i < particles.length; i = i + 1) {

    particles[i].display();

  }

  
}}