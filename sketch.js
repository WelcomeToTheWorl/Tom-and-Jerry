
function preload() {
bg=loadImage("images/garden.png")
cat1Img=loadAnimation("images/cat1.png")
cat2Img=loadAnimation("images/cat2.png","images/cat3.png")
cat3Img=loadAnimation("images/cat3.png")
cat4Img=loadAnimation("images/cat4.png")
mouse1Img=loadAnimation("images/mouse1.png")
mouse2Img=loadAnimation("images/mouse2.png","images/mouse3.png")
mouse3Img=loadAnimation("images/mouse3.png")
mouse4Img=loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    tom=createSprite(870,600)
    tom.addAnimation("tomsleeping",cat1Img)
    tom.scale=0.2;
    
    jerry=createSprite(200,600)
    jerry.addAnimation("jerrystanding",mouse1Img)
    jerry.scale=0.15;
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide

    if(tom.x - jerry.x < (tom.width - jerry.width)/2) 
    { 
        tom.velocityX=0; 
        tom.addAnimation("tomLastImage", cat3Img); 
        tom.x =300; 
        tom.scale=0.2;
        tom.changeAnimation("tomLastImage"); 
        jerry.addAnimation("jerryLastImage", mouse3Img); 
        jerry.scale=0.15; 
        jerry.changeAnimation("jerryLastImage"); 
    }


    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if (keyCode===LEFT_ARROW){
    tom.velocityX = -5; 
    tom.addAnimation("tomRunning", cat2Img); 
    tom.changeAnimation("tomRunning");
    jerry.addAnimation("jerryTeasing", mouse2Img);
    jerry.frameDelay = 25; 
    jerry.changeAnimation("jerryTeasing")


} 
}
