//Create variables here
var dog, foodS, foodStock;
var dogImg1, dogImg2;
var database
function preload()
{
  //load images here
  dogImg1= loadImage("images/dogImg.png")
  dogImg2 = loadImage("images/dogImg1.png")
}

function setup() {
  database = firebase.database();
  createCanvas(400, 300);
 

  dog = createSprite(200,150, 70, 70)
  dog.addImage(dogImg1);
  dog.scale = 0.15
  foodStock = database.ref('Food')
  foodStock.on("value", readStock);
 // happyDog = createSprite(200, 150, 70, 70)
  //happyDog.addImage(dogImg2)
  //happyDog.scale = 0.3  
}


function draw() {  
   background(46, 139, 87)

 if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogImg2)
  }

 drawSprites();
   fill("skyblue");
   stroke("black")
   text("food remaining:"+ foodS, 170, 200)
  textSize(30);
  }
 function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  if(x<=0){
    x = 0;
  }
  else{
  x = x - 1;
  }
  database.ref('/').update({
    Food:x
  })

}