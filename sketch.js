const Engine=Matter.Engine;
const World =Matter.World;
const Bodies= Matter.Bodies;
const Constraint=Matter.Constraint;

var engine,world;
var hero,box1;
var backgroundImg,platform;
var backgrounding;


//create function preload
function preload() {
//preload the images here
     getbackgrounding();
}

//create function setup
function setup() {
  createCanvas(3000, 800);
  // create sprites here
    engine=Engine.create();
    world=engine.World;

}
//create Ground
    ground=new Ground(600,height,1200,20);
    platform=new Ground(150,305,300,170);

//given position and create new variable
Box1=new Box (700,320,70,70);
Box2=new Box (920,320,70,70);
Box3=new Box(700,240,70,70);
Box4=new Box(920,240,70,70);
Box5=new box(810,160,70,70);

//create function draw
function draw() {
  background(0);
if(Backgrounding)
background(backgrounding);
Engine.update(engine);


noStroke();
textSize(35);
fill("white");
text("score"+score,width-300,50);

//display all
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();

}

//create fuction mouseDragged
  // fuction mouseDragged (){
    // if (gameState!=="launched"){
//Matter.Body.setPosition(Bird.Body,{x:mousex,y:mousey);

  //   }
   //}
//create function mouserealesed 
  function mouseRealeased(){
    slingShot.fly();
    gameState="launched"

  }
// create function keypressed()
if (keyCode===32){
  slingShot.attach(Bird.Body);
  Bird.trajectory=[];

Matter.Body.setPosition(Bird.Body,{x:200,y:50});

}





