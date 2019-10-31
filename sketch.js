var myCar;

function setup() {
  createCanvas(800, 600)
  background(100);

  myCar = new Car(10, 200);
  myCar.display();

}

function draw() {

  myCar.update();

}

function Car(tempSpeed, tempColor) {

  this.speed = tempSpeed;
  this.color = tempColor;

  this.display = function () {
    fill(0, 0, this.color);
  }

  this.update = function () {
    square(10, 10, 20);
  }

  this.interaction = function () {

  }

}