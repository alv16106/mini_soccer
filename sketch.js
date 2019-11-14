let field, ball, robo
const goal = [1450, 485, 485 + 130]

const getRaw = (ball, robot) =>{
  d = Math.pow(ball.x - robot.x, 2) + Math.pow(ball.y - robot.y, 2)
  let distance = Math.sqrt(d)
  let angleRadians = Math.atan2(ball.y - robot.y, ball.x - robot.x);

  // angle in degrees
  let angleDeg = angleRadians * 180 / Math.PI;
  return distance, angleDeg
}

function setup() {
  createCanvas(1600, 1100)
  field = loadImage('assets/field.jpg')
  robo = new Robot()
  ball = new Ball()
}

function draw() {
  image(field, 0, 0)
  // image(ball, 350, 350, 40, 40);
  robo.update()
  ball.update()
  robo.show()
  ball.show()
}

function Robot() {
  this.x = 800
  this.y = 500
  this.xspeed = 0
  this.yspeed = 0

  this.update = (ballx, bally) => {
    // Update code with fuzzy logic
  }

  this.show = () => {
    square(this.x, this.y, 55, 20);
  }
}

function Ball() {
  this.x = 350
  this.y = 350
  this.xspeed = 0
  this.yspeed = 0

  this.update = (ballx, bally) => {
    this.x += this.xspeed
    this.y += this.yspeed
  }

  this.show = () => {
    ellipse(this.x, this.y, 40, 40)
  }
}
