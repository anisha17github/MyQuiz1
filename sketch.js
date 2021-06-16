var gameState=0;
var playerCount=0;
var rank;
var database;
var player,form,game;
var ques, ques1, ques2, ques3, ques4, ques5, ques6, ques7, ques8, ques9;

function setup(){
  createCanvas(1200,800)
  database=firebase.database()
  game = new Game()
  game.getState()
  game.start()
}

function draw(){
background("green")
if(playerCount===2){
  game.update(1)
}
if(gameState===1){
  clear()
  game.play()
}
}