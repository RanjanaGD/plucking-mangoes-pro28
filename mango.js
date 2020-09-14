class Mango {
    constructor(x,y,r) {
      var options = {
          isStatic:true,
          restitution:0,
          friction:1
          
      }
      this.x=x;
    this.y=y;
	this.r=r
      this.body = Bodies.circle(this.x,this.y,this.r, options);
      
      
      World.add(world, this.body);

      this.image=loadImage("mango.png");
    }
    display(){
      var pos =this.body.position;
      //var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      //rotate(angle);
      rectMode(CENTER);     
      //fill("red");
      //rect(0, 0, this.width, this.height);
      image(this.image, 0,0,50,50);
      pop();
    }
  };
