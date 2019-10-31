var cars = [];

function setup() {
  createCanvas(800, 600)

  for (var i = 0; i < 10; i++) {
    cars.push(new Car(random(5)));
  }

}

function draw() {
  background(100);

  print(cars[0].yMov);

  for (var i = 0; i < 10; i++) {
    cars[i].update();

    if (mouseY > cars[i].yMov && mouseY < (cars[i].yMov + 20)) {
      if (mouseX > cars[i].xPos && mouseX < (cars[i].xPos + 20)) {
        cars[i].color = 0;
        cars[i].speed = 0;
      }
    }

  }

}

function Car(tempSpeed) {

  this.speed = tempSpeed;
  this.color = random(100, 255);
  this.yMov = 0;
  this.xPos = random(width);
  this.sqWidth = 20;

  this.update = function () {
    this.yMov += this.speed;
    fill(0, 0, this.color);
    square(this.xPos, this.yMov, this.sqWidth);
  }

}