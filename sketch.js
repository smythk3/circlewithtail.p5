var x = 12.5;
var xspeed = 10
var yspeed = 5
var y = 10;

var osc;
var env;

var jazzy;

var circleSize;
var tail;
var delayX;

function setup() {
  createCanvas(800,500);
  
  circleSize = 5;
  tail = 50;
  
  
 // delayX = new p5.Delay();
 // delayX.process(osc, .1, .5, 400);
  
  
}

function draw() {
  //background(255);
  
  fill(255,tail);
  rect(0,0, width,height);
  
  
  osc = new p5.Oscillator();
  osc.setType('sine');
  //osc.start();
  //osc.freq(440);
  //osc.amp(env);
  //env.play();
  
  env = new p5.Env();
  env.setADSR(0.1, 001, 0.5, 0.8);
  env.setRange(1, 0);
  
  displayBall();
  moveBall();
  
  if(y > 790 || y < 12.5) {
   
  yspeed = -yspeed;
  } 
  
  function displayBall() {
  fill(125);
  noStroke();
  ellipse(x,y,circleSize,circleSize);
  }
  
  function moveBall() {
  x = x + xspeed;
  y = y + yspeed;
  
  if(x > 800 || x < 12.5) {
    
    xspeed = -xspeed;
    osc.start();
    osc.freq(440);
    osc.amp(env);
    env.play();
    circleSize = circleSize+10;
  }
  if (y > 500 || y < 0) {
	 	  yspeed = -yspeed;
	 	  circleSize = circleSize+10;
	 	  osc.start();
	 	  osc.freq(440);
     osc.amp(env);
	 	  env.play();
  	}
  }
}