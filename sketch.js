let field, ball, robo
const goal = {x:1450, y:550, r:35}
const error_angle = 10

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

  robo.update()
  ball.update()
  robo.show()
  ball.show()

  // Collision detection
  d = dist(robo.x, robo.y, ball.x, ball.y)
  if (d < robo.r + ball.r) {
    ball.shoot()
  }
}

// For testing
function keyPressed(){
  if(keyCode == 87){
    robo.xspeed = 0
    robo.yspeed = 1
  } else if(keyCode == 83){
    robo.xspeed = 0
    robo.yspeed = -1
  } else if(keyCode == 68){
    robo.xspeed = 1
    robo.yspeed = 0
  } else if(keyCode == 65){
    robo.xspeed = -1
    robo.yspeed = 0
  }
}

function Robot() {
  this.x = 800
  this.y = 500
  this.r = 40
  this.xspeed = 0
  this.yspeed = 0

  this.update = (ballx, bally) => {
    // Update code with fuzzy logic
    this.x += this.xspeed
    this.y += this.yspeed
  }

  this.show = () => {
    rectMode(RADIUS)
    square(this.x, this.y, this.r, 20);
  }
}

function Ball() {
  this.x = 350
  this.y = 350
  this.r = 20
  this.smultiplier = 3
  this.xspeed = 0
  this.yspeed = 0

  this.update = (ballx, bally) => {
    this.x += this.xspeed
    this.y += this.yspeed
  }

  this.show = () => {
    circle(this.x, this.y, this.r*2)
  }

  this.shoot = () => {
    let to_center = Math.atan2(goal.y - this.y, goal.x - this.x);
    to_center = to_center * 180 / Math.PI;
    let shoot_angle = to_center + Math.floor(Math.random() * error_angle * 2) - error_angle;
    shoot_angle = shoot_angle * Math.PI / 180
    this.yspeed = sin(shoot_angle) * this.smultiplier
    this.xspeed = cos(shoot_angle) * this.smultiplier
  }
}
