var s;
var scl=15;
var food;
function setup(){

    createCanvas(600,600);
    s=new snake();
    frameRate(10);
    pickloaction();
  }


  function pickloaction(){
    var cols=floor(width/scl);
    var rows = floor(height/scl);
    food=createVector(floor(random(rows)),floor(random(cols)));
    food.mult(scl);
  }


  function draw(){
      
    background(51);
    s.update();
      s.show();

      if(s.eat(food))
      {
        pickloaction();
       
        }

    
      fill(255,0,100);
    rect(food.x,food.y,scl,scl,5); 
   }
   
  function keyPressed(){
      if(keyCode===UP_ARROW)
      s.dir(0,-1);
      else if(keyCode===DOWN_ARROW)
      s.dir(0,1);
      else if(keyCode===RIGHT_ARROW)
      s.dir(1,0);
      else if(keyCode===LEFT_ARROW)
      s.dir(-1,0);

  }