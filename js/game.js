class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
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
      tank1 = createSprite(100,200)
      tank1.addImage(tank1img)
      tank1.scale = 0.2
      tank2 = createSprite(200,200)
      tank2.addImage(tank2img)
      tank2.scale = 0.2
      infantry1 = createSprite(300,200)
      infantry1.addImage(infantry1img)
      infantry1.scale = 0.2
      infantry2 = createSprite(400,200)
      infantry2.addImage(infantry2img)
      infantry2.scale = 0.2
    }

      play(){
        form.hide();
        Player.getPlayerInfo();
            
        if(allPlayers !== undefined){
               
    
        }
    
                
       
        drawSprites();
      }
    
  }
  