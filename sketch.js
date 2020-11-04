const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,40);
    
    block1 = new rectangle(300, 275, 30,40);
    block2 = new rectangle(330, 275, 30,40);
    block3 = new rectangle(360, 275, 30,40);
    block4 = new rectangle(390, 275, 30,40);
    block5 = new rectangle(420, 275, 30,40);
    block6 = new rectangle(450, 275, 30,40);
    block7 = new rectangle(480, 275, 30,40);
    block8 = new rectangle(330,235,30,40);
    block9 = new rectangle(360,235,30,40);
    block10 = new rectangle(390,235,30,40);
    block11 = new rectangle(420,235,30,40);
    block12 = new rectangle(450,235,30,40);
    block13 = new rectangle(360,195,30,40);
    block14 = new rectangle(390,195,30,40);
    block15 = new rectangle(420,195,30,40);
    block16 = new rectangle(390,155,30,40);

    ground1 = new Ground (400,350,350,20);


    slingshot = new SLINGSHOT(this.polygon,{x:100, y:200});
}

function draw(){
    background(0);
    Engine.update(engine);
    strokeWeight(4);

    ground.display();

    
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display(); 
    block9.display();
    block10.display(); 
    block11.display(); 
    block12.display(); 
    block13.display(); 
    block14.display(); 
    block15.display();
    block16.display(); 

    ground1.display();
    
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.flying();
} 