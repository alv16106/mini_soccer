let field, ball

function setup() {
  createCanvas(1600, 1100);
  field = loadImage('assets/field.jpg');
  ball = loadImage('assets/ball.png')
}

function draw() {
  image(field, 0, 0);
  // image(ball, 350, 350, 40, 40);
  triangle(800, 550, 800, 500, 850, 525);
  ellipse(350, 350, 40, 40);
}