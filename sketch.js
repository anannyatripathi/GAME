var bg,bg2,form,system,code,security;
var score=0;
var scary;

function preload() {
  bg = loadImage("background.png");
 bg2 = loadImage("background2.jpg");
  //scary = loadSound("scary.mp3")
}

function setup() {
  createCanvas(2000,700);
  system = new System()
  security = new Security()
}

function draw() {
  background(bg);
  clues();
  security.display();

  textSize(18);
  text("Score : "+score,500,40);
  fill("white");
  
  if(score === 1){
    clear();
    background(bg2);
    fill("black");
    textSize(40);
   // text("TREASURE UNLOCKED",250,200);
  }
    //scary.play();
  
  drawSprites();
}
