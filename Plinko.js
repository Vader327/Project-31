class Plinko{
    constructor(x, y) {
      var options = {
          isStatic: true,
        }
      this.body = Bodies.circle(x, y, 5, options);
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      rectMode(CENTER);
      ellipse(0, 0, 10, 10);
      pop();
    }
  }