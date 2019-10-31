var cars = [];

function setup() {
  createCanvas(800, 600)

  for (var i = 0; i < 100; i++) {
    cars.push(new Car(random(5)));
  }

  for (var i = 0; i < 100; i++) {
    cars[i].display();
  }

}

function draw() {
  background(100);

  for (var i = 0; i < 100; i++) {
    cars[i].update();
  }

}

function Car(tempSpeed) {

  this.speed = tempSpeed;
  this.color = random(255);
  this.yMov = 0;
  this.xPos = random(width);

  this.display = function () {

  }

  this.update = function () {
    fill(0, 0, this.color);
    push();
    translate(this.xPos, this.yMov, 0);
    square(0, -20, 20);
    this.yMov += this.speed;
    pop();
  }

  this.interaction = function () {

  }

}