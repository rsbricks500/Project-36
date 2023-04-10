var balloon,balloonImage1,balloonImage2;
// PS
// I couldnt fix this since the firebase initializing function 
// was not defined and I did everything I could to fix the error but it didnt work
// Hope yoyu understand.... From RAYYAN SHAIKH

function preload(){
   bg =loadImage("Images/cityImage.png");
   balloonImage1=loadAnimation("Images/HotAirBallon01.png");
   balloonImage2=loadAnimation("Images/HotAirBallon01.png","Images/HotAirBallon01.png",
   "Images/HotAirBallon01.png","Images/HotAirBallon02.png","Images/HotAirBallon02.png",
   "Images/HotAirBallon02.png","Images/HotAirBallon03.png","Images/HotAirBallon03.png","Images/HotAirBallon03.png");
  }

//Function to set initial environment
function setup() {
 
  createCanvas(1500,700);

  balloon=createSprite(250,650,250,650);
  balloon.addAnimation("hotAirBalloon",balloonImage1);
  balloon.scale=0.5;


  textSize(20); 
}

// function to display UI
function draw() {
  background(bg);

  if(keyDown(LEFT_ARROW)){
    position.x -= 10
    //add the animation of balloon [use balloonImage2]
    balloon.addAnimation("Images/HotAirBallon01.png","Images/HotAirBallon01.png",
    "Images/HotAirBallon01.png","Images/HotAirBallon02.png","Images/HotAirBallon02.png",
    "Images/HotAirBallon02.png","Images/HotAirBallon03.png","Images/HotAirBallon03.png","Images/HotAirBallon03.png");
  }
  else if(keyDown(RIGHT_ARROW)){
    updateHeight(10,0);
    //add the animation of balloon [use balloonImage2]
    balloon.addAnimation("Images/HotAirBallon01.png","Images/HotAirBallon01.png",
    "Images/HotAirBallon01.png","Images/HotAirBallon02.png","Images/HotAirBallon02.png",
    "Images/HotAirBallon02.png","Images/HotAirBallon03.png","Images/HotAirBallon03.png","Images/HotAirBallon03.png");
  }
  else if(keyDown(UP_ARROW)){
    updateHeight(0,-10);
 //add the animation of balloon [use balloonImage2]
 balloon.addAnimation("Images/HotAirBallon01.png","Images/HotAirBallon01.png",
    "Images/HotAirBallon01.png","Images/HotAirBallon02.png","Images/HotAirBallon02.png",
    "Images/HotAirBallon02.png","Images/HotAirBallon03.png","Images/HotAirBallon03.png","Images/HotAirBallon03.png");
    balloon.scale=balloon.scale -0.005;
  }
  else if(keyDown(DOWN_ARROW)){
    updateHeight(0,+10);
  //add the animation of balloon [use balloonImage2]
  balloon.addAnimation("Images/HotAirBallon01.png","Images/HotAirBallon01.png",
    "Images/HotAirBallon01.png","Images/HotAirBallon02.png","Images/HotAirBallon02.png",
    "Images/HotAirBallon02.png","Images/HotAirBallon03.png","Images/HotAirBallon03.png","Images/HotAirBallon03.png");
    balloon.scale=balloon.scale+0.005;
  }

  drawSprites();
  fill(0);
  stroke("white");
  textSize(25);
  text("**Use arrow keys to move Hot Air Balloon!",40,40);

}


