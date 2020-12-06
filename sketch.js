var dog,happydog,saddog,database,foods,foodstock

function preload()
{
  saddog=loadImage("images/dogimg.png")
  happydog=loadImage("images/dogimg1.png")
	//load images here
}

function setup() {
	createCanvas(500, 500);
  database=firebase.database()
  dog=createSprite(250,300,150,150)
  dog.addImage(saddog)
  dog.scale=0.15
  foodstock=database.ref('food')
  foodstock.on("value",readstock)
}


function draw() {  
background(46,139,87)
if(keyWentDown(UP_ARROW)){
  writestock(foods)
  dog.addImage(happydog)
}
  drawSprites();
  fill(255,255,254)
  text("foodRemaining"+foods,170,200)
  text("pressuparrowtofeedthedog",130,10,300,20)
  //add styles here

}
function readstock(data){
  foods=data.val()
}
function writestock(x){
  if(x<=0){
    x=0
  }else{
    x=x-1
  }
database.ref('/').update({
  food:x
})
}

