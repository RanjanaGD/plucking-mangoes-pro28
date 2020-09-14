
class Stone {
    constructor(x,y,r) {
      var options = {
          isStatic:false,
          restitution:0,
          friction:1.5,
          density:1.2
          
      }
     this.x=x;
     this.y=y;
   	 this.r=r
    this.body = Bodies.circle(this.x,this.y,this.r/2, options);

      World.add(world, this.body);

      this.image=loadImage("stone.png");
    }
    display(){
      var pos =this.body.position;
      
      push();
      translate(pos.x, pos.y);
      
      imageMode(CENTER);     
      
      image(this.image, 0,0,50,50);
      pop();
    }
  };
