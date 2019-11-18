let field, ball, robo
const goal = {x:1450, y:550, r:35}
const error_angle = 10

const getRaw = (ball, robot) =>{
  let distance = createVector(robot.x - ball.x, robot.x - ball.x)
  let angleRadians = Math.atan2(ball.y - robot.y, ball.x - robot.x);
  return distance, angleRadians
}

function setup() {
  // frameRate(60)
  createCanvas(1600, 1100)
  field = loadImage('assets/field.jpg')
  robo = new Robot()
  ball = new Ball()
  angleMode(RADIANS); 
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
    robo.speed.x = 0
    robo.speed.y = 2
  } else if(keyCode == 83){
    robo.speed.x = 0
    robo.speed.y = -2
  } else if(keyCode == 68){
    robo.speed.x = 2
    robo.speed.y = 0
  } else if(keyCode == 65){
    robo.speed.x = -2
    robo.speed.y = 0
  }
}

function Robot() {
  this.x = 800
  this.y = 500
  this.r = 40
  this.speed = p5.Vector.fromAngle(3.14, 1)

  this.update = (ballx, bally) => {
    // Update code with fuzzy logic
    let rad = whereToRotate(ball, this);
    // console.log(rad)
    this.speed = this.speed.rotate(rad);
    this.speed = this.speed.setMag(10);
    
    this.x += this.speed.x
    this.y += this.speed.y
  }

  this.show = () => {
    rectMode(RADIUS)
    square(this.x, this.y, this.r, 20);
  }
}

function Ball() {
  this.x = 1200
  this.y = 750
  this.r = 20
  this.smultiplier = 3
  this.speed = createVector(0, 0)

  this.update = (ballx, bally) => {
    this.x += this.speed.x
    this.y += this.speed.y
    this.speed.div(1.007)
  }

  this.show = () => {
    circle(this.x, this.y, this.r*2)
  }

  this.shoot = () => {
    let to_center = Math.atan2(goal.y - this.y, goal.x - this.x);
    to_center = to_center * 180 / Math.PI;
    let shoot_angle = to_center + Math.floor(Math.random() * error_angle * 2) - error_angle;
    shoot_angle = shoot_angle * Math.PI / 180
    this.speed = p5.Vector.fromAngle(shoot_angle, 5);
  }
}


const whereToRotate = (ball, robot) => {
  let b = createVector(robot.x - ball.x, robot.y - ball.y);
  let current_radian = - robot.speed.angleBetween(b);
  //console.log(current_radian);

  let u = choose_rotation(
    [
      integral_left({radian: current_radian} , "rotation", clause_alotLeft)["value"],
      integral_left({radian: current_radian} , "rotation", clause_littleLeft)["value"],
      integral_right({radian: current_radian} , "rotation", clause_alotRight)["value"],
      integral_right({radian: current_radian} , "rotation", clause_littleRight)["value"],
    ],
    [
      "mucho izq",
      "poco izq",
      "mucho der",
      "poco der",
    ],
    [
      clause_alotLeft,
      clause_littleLeft,
      clause_alotRight,
      clause_littleRight,
    ],
    { radian: current_radian },
    "rotation",
  );
  console.log(u, current_radian)
  return (u ? u : 0) ;
}