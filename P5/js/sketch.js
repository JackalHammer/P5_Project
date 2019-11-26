var song;
var amp;
var bScene1 = false;
var ballA = 0;
var playing = false;
var cSwitch = 0;
var cSwitch2 = 0;




function preload(){
    song = loadSound('assets/bonhiver.mp3');  
    
}



function setup() {
//slider = createSlider(0, 1, 1, 0.01);
  createCanvas(windowWidth, windowHeight);
  amp = new p5.Amplitude();
  background(255);
}




function draw() {
  var vol = amp.getLevel();
  var diam = map(vol, 0, 0.3, 60, 300);
  var diam2 = map(vol, 0, 0.3, 50, 1000);
  var Col1 = map(vol, 0, 0.5, 100, 255);
  var sWeight = map(vol, 0, 0.3, 5, 20);
  
    
    
    //Scene displayer
    
    //Scene 1
    if(song.currentTime() > 0 && song.currentTime() < 15){
        
      noFill();
      stroke(0,  random(50, Col1), random(50, Col1), ballA-50 );
      strokeWeight(sWeight);
      ellipse(width / 2, height / 2, diam2, diam2);
        
      noStroke();
      fill(random(50, Col1), 0, random(50, Col1), ballA-100);
      ellipse(pmouseX, pmouseY, diam, diam);   
        
      fill(random(50, Col1), 0, random(50, Col1), ballA-150);
      ellipse((-1 * pmouseX + width), pmouseY, diam, diam);   
      ballA = ballA + 0.5;
    }  
    
    
    //Scene 2
    if(song.currentTime() > 15 && song.currentTime() < 25){
        
      noFill();
      stroke(0,  random(50, Col1), random(50, Col1) );
      strokeWeight(sWeight);
      ellipse(width / 2, height / 2, diam2, diam2);
        
      noStroke();
      fill(random(50 - cSwitch2, (Col1 - cSwitch)), random(cSwitch2, (Col1 + cSwitch)), random(50, Col1));
      ellipse(pmouseX, pmouseY, diam, diam);   
        
      fill(random(50, Col1), random(cSwitch2, (Col1 + cSwitch)), random(50 - cSwitch2, (Col1 - cSwitch)));
      ellipse((-1 * pmouseX + width), pmouseY, diam, diam); 
     
     //Switch the color  
        
    if(cSwitch < 255){
      cSwitch = cSwitch + 0.5;
    }
    if(cSwitch2 < 50){
      cSwitch2 = cSwitch2 + 0.5;
    }
   
  }
    
}


 // Play Function
function mouseClicked(){
 if (playing == false){
  playing = true;
  song.play();
 }
}

