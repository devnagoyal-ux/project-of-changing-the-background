
var r = 0;
var g = 50;
var b=255;
var button;
var background;

function draw(){
background( r,g,b); 
createCanvas(1200,400);

  var x1 = map(mouseX, 0, width, 25, 75);
  fill('blue');
   ellipse(x1, 25, 25, 25);
  

 if(mouseX >100){
  changeBG();
 
 }  
  
}

function changeBG() {
  var  val = random(215);
  background(val);
}