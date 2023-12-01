const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var ladrillo1, ladrillo2,ladrillo3, ladrillo4,ladrillo5, ladrillo6,ladrillo7, ladrillo8,ladrillo9, ladrillo10,ladrillo11, ladrillo12,ladrillo13, ladrillo14,ladrillo15, ladrillo16,ladrillo17, ladrillo18,ladrillo19, ladrillo20;
var bola;
var cuerda;

function preload(){


}

function setup(){

    var canvas = createCanvas(3000,800);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,600,1200,20);
    ladrillo1 = new Ladrillos(900,100,70,70);
    ladrillo2 = new Ladrillos(900,100,70,70);
    ladrillo3 = new Ladrillos(900,100,70,70);
    ladrillo4 = new Ladrillos(900,100,70,70);
    ladrillo5 = new Ladrillos(900,100,70,70);
    ladrillo6 = new Ladrillos(900,100,70,70);

    ladrillo7 = new Ladrillos(800,100,70,70);
    ladrillo8 = new Ladrillos(800,100,70,70);
    ladrillo9 = new Ladrillos(800,100,70,70);
    ladrillo10 = new Ladrillos(800,100,70,70);
    ladrillo11 = new Ladrillos(800,100,70,70);
    ladrillo12 = new Ladrillos(800,100,70,70);

    ladrillo13 = new Ladrillos(700,100,70,70);
    ladrillo14 = new Ladrillos(700,100,70,70);
    ladrillo15 = new Ladrillos(700,100,70,70);
    ladrillo16 = new Ladrillos(700,100,70,70);
    ladrillo17 = new Ladrillos(700,100,70,70);
    ladrillo18 = new Ladrillos(700,100,70,70);
    ladrillo19 = new Ladrillos(700,100,70,70);
    ladrillo20 = new Ladrillos(700,100,70,70);

    bola = new Bola(200,200,80,80);

    cuerda = new Cuerda(bola.body,{x:450,y:100})
}

function draw(){

    background("cyan"); 


    Engine.update(engine);
   ground.display();
   ladrillo1.display();
   ladrillo2.display();
   ladrillo3.display();
   ladrillo4.display();
   ladrillo5.display();
   ladrillo6.display();
   ladrillo7.display();
   ladrillo8.display();
   ladrillo9.display();
   ladrillo10.display();
   ladrillo11.display();
   ladrillo12.display();
   ladrillo13.display();
   ladrillo14.display();
   ladrillo15.display();
   ladrillo16.display();
   ladrillo17.display();
   ladrillo18.display();
   ladrillo19.display();
   ladrillo20.display();

   bola.display();

   cuerda.display();

}

function mouseDragged(){
Matter.Body.setPosition(bola.body,{x:mouseX,y:mouseY})

}
