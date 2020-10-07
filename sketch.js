//Create variables here
var happyDog,happyimg,dog,dogimg,database,foodS,foodStock;
var database;
function preload()
{
  //load images here
  happyimg = loadImage("images/dogImg.png");
  dogimg = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(250,250,30,30);
  dog.addImage(dogimg);
  dog.scale = 0.25
  database = firebase.database();
  foodStock=database.ref('Food');
  foodStock.on("value",function(data){
  foodS = data.val();
  })
}


function draw() {  
  background(46, 139, 87);
  if(keyWentDown(UP_ARROW)&&foodS>0){
    writeStock(foodS);
    dog.addImage(happyimg)
  }
  drawSprites();
  fill("blue");
  textSize(20)
  text("Press Up Arrow to feed Gamer Doggo",20,20);
  //add styles here

}
function writeStock(foodS){
  database.ref('/').update({
    Food: foodS - 1
  })
}