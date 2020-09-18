var dog, happydog, food
var foodstock, database

function preload(){
 dogimg=loadImage("images/dogImg.png");
  dogimg1=loadImage("images/dogImg1.png");
 
}



function setup() {
  database=firebase.database();
	createCanvas(500, 500);
  var dog= createSprite (250,250,20,20);
  dog.addImage(dogimg);
  foodstock=database.ref("food");
  foodstock.on("value",readstock);
}


function draw() {  
  background(46,139,87);
if(keyWentDown(UP_ARROW)){
   writestock(foods);
   dog.addImage(dogimg1);
}
  drawSprites();
  textSize(30);
  fill(red);
  stroke("black")
  text("food remaining:"+foods,170,200)
  text("press up arrow to feed!",130,10,300,20);


}

function readstock(data){
  foods=dat.val();
}

function writestock(x){
  if(x<=0){
    x=0

  }else{
    x=x-1;
  }

  database.ref('/').update({
  Food:x  
  })
}





