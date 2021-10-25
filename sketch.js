const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;

var box1 =[];
var canvas, backgroundImage;
var button;
var gameState = 0;
var playerCount;
var allPlayers;
var database;

var form, player, game;
var bg_img,musiconbutton_img,musicoffbutton_img,startButton_img,sound_mp3;
var startButton,musicButton, bg ;
var infantry1img,infantry2img,infantry1,infantry2,tank1img,tank1,tank2,tank2img;
function preload(){
  
  bg_img = loadImage("images/bgforgamepage1.jpg")
  musiconbutton_img = loadImage("images/musiconButton.png")
  musicoffbutton_img = loadImage("images/musicoffButton.png")
  sound_mp3 = loadSound("music/Pandemia.mp3",loaded);
  tank1img = loadImage("images/tank1.png")
  tank2img = loadImage("images/tank2.png")
  infantry1img = loadImage("images/infantry1.png")
  infantry2img = loadImage("images/infantry2.png")   
      
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  engine = Engine.create();
  world = engine.world;
  database = firebase.database();
  button = createImg("images/musiconButton.png");
  button.position(displayWidth-100,25);
  button.mousePressed(togglePlaying);

  for (var k = 0; k <=displayWidth-20; k = k + 80) {
    for (var j = 0; j <=displayHeight-100; j = j + 80) {
      box1.push(new Grid(k, j,80,80));
    }
  }
  game = new Game();
  game.getState();
  game.start();
 
}
function togglePlaying(){
  if(!sound_mp3.isPlaying()){
  sound_mp3.loop()
  sound_mp3.setVolume(0.1);
 // button.image("images/musiconButton.png");
  } else{
    sound_mp3.stop();
  }
}
function loaded(){
  console.log("loaded")
}

function draw(){
  background(bg_img)
  Engine.update(engine);
if(playerCount === 2){
  game.update(1);
}
if(gameState === 1){
  for (var k = 0; k < box1.length; k++) {
    for (var j = 0;j < box1.length; j++) {
   
      box1[k,j].display();
    }
  }
  game.play();
}
  drawSprites();
}
