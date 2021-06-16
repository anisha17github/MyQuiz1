class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",(data)=>{
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
  
      
    }
  
    play(){
      form.hide();
      
      Player.getPlayerInfo();
  
      player.getEnd();
  
       //call getContestantInfo( ) here
    if(allPlayers !== undefined){
      
      var display_answers=230
      fill (0);
      textSize(20)
      text("*NOTE: Contestants who answered correct are highlighted in green color.", 130, 230)
      for(var plr in allPlayers){
        
        var correctAns = "2";
        if(correctAns === allPlayers[plr].answer)
        fill("green")
        else
        fill("red");
        display_answers+=30
        textSize(20)
        text(allPlayers[plr].name+": "+allPlayers[plr].answer,250,display_answers)

      }
    }
   
         
          //textSize(15);
          //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
       
     
      drawSprites();
    }
  
    end(){
      console.log("Game Ended");
      console.log(player.rank)
      textSize(30)
      text("rank: "+player.rank, camera.position.x, camera.position.y)
    }
  }
  