class Bola {
    constructor(x, y, height, width,angle,){
    
    
    
    var options = {
        frictionAir:0.005 ,density:1
    }
    
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    }
    
    display(){
       
        var angle =this.body.angle
        push();
        translate(this.body.position.x,this.body.position.y)
        rotate(angle)
        fill("red");
        ellipse(0,0, this.width, this.height);
        pop();
      }
    
    
    
    }
    