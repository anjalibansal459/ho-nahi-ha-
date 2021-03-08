const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies 
var engine,world 
var Bimage
function preload(){
Bimage=loadImage("bbg.png")
}

function setup(){
  createCanvas(1000,600)
engine=Engine.create()
world=engine.world
}

function draw(){
  background(Bimage)
  Engine.update(engine)



  
}