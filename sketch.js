const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var world,engine;
var box1,box2,box3;


function preload(){

}

function setup(){
   var canvas = createCanvas(600,600);
  engine = Engine.create();
  world = engine.world;

box1 = new Box(200,200,10,20);
box2 = new Box(500,200,10,20);
}



function draw(){
background("lightblue");
Engine.update(engine);
rectMode(CENTER);
box2.display();
box1.display();
}