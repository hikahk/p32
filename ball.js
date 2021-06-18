class Ball {
    constructor(x, y) {


      var options = {
        'density':1.5,
        'friction': 1.0,
        'restitution':0.9,
       // isStatic: false
      }
      this.body = Bodies.circle(x, y, 20,  options);
      //this.width = 50;
      //this.height = 50;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
     // pos.x = mouseX;
      //pos.y = mouseY;
      var angle = this.body.angle;
  
      push();
      //translate(pos.x, pos.y);
      //rotate(angle);
      strokeWeight(3);
      stroke('grey')
      fill('grey')
      rectMode(CENTER)
      ellipse(pos.x ,pos.y,40,40);
      pop();
    };
  };
  