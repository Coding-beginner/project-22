const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase, playerArcher;
var baseimage;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  
  angleMode(DEGREES);

  //create player base body
  var options = {
    isStatic: true
  };

  //create player body
  playerbase = bodies.rectangle(200, 350, 180, 150, options);
  world.add(world, playerBase);

  player = bodies.rectangle(250, playerbase.position.y - 160,50,180,options);
  world.add(world, player)
}

function draw() {
  background(backgroundImg);

  Engine.update(engine);

  //show the player image using image() function
  image(baseimage, playerBase.position.x, playerBase.position.y, 180, 150)
 
  //show the playerbase image using image() function
  image(playerimage, player.position.x, player.position.y, 50,180)


  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);
}
