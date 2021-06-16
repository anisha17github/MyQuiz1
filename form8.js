class form8 {

    constructor() {
      this.input1 = createInput("Name");
      this.input2 = createInput("Enter choice");
      this.question = createElement('h3')
      this.option1= createElement('h4')
      this.option2 = createElement('h4')
      this.option3 = createElement('h4')
      this.option4 = createElement('h4')
      this.button = createButton('Play');
      this.greeting = createElement('h2');
      this.title = createElement('h2');
      this.reset = createButton('Reset');

    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
      this.title.hide();
      this.input1.hide();
      this.input2.hide();
    }
  
    display(){
      this.title.html("Camp Creteceous quiz");
      this.title.position(displayWidth/2 - 50, 0);
  
      this.question.html("Question:- What was inside the room E750? " );
      this.question.position(150, 80);
      this.option1.html("1: Indominus rex " );
      this.option1.position(150, 100);
      this.option2.html("2: Scorpius rex" );
      this.option2.position(150, 120);
      this.option3.html("3: Dr.Wu " );
      this.option3.position(150, 140);
      this.option4.html("4: Dr.Masrani" );
      this.option4.position(150, 160);
  

      this.input1.position(displayWidth/2 - 40 , displayHeight/2 - 80);
      this.input2.position(displayWidth/2 + 40 , displayHeight/2 - 80);
      this.button.position(displayWidth/2 + 30, displayHeight/2);
      this.reset.position(displayWidth-100,20);
  
      this.button.mousePressed(()=>{
        this.input1.hide();
        this.input2.hide();
        this.button.hide();
        player.name = this.input1.value();
        player.rank = this.input2.value();
        playerCount+=1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);
        this.greeting.html("Hello " + player.name)
        this.greeting.position(displayWidth/2 - 70, displayHeight/4);
      });
  
      this.reset.mousePressed(()=>{
        player.updateCount(0);
        game.update(0);
        Player.updateEnd(0);
      });
  
    }
  }
  