var myAnt1;
var myAnt2;

var randYPos1;
var randYPos2;

function setup() {
  createCanvas(800, 600);

  randYPos1 = random(height);
  randYPos2 = random(height);

  myAnt1 = new Ant(25, 100, randYPos1, 0, 2);
  myAnt2 = new Ant(50, 250, randYPos2, 0, 5);

}

function draw() {
  background(100);

  myAnt1.update();
  myAnt1.display();

  myAnt2.update();
  myAnt2.display();

}

function Ant(tempSize, tempColorR, tempY, tempX, tempSpeed) {
  this.size = tempSize;
  this.colorR = tempColorR;
  this.yPos = tempY;
  this.xPos = tempX;
  this.speed = tempSpeed;

  this.update = function () {
    this.xPos = this.xPos + this.speed;

    if (this.xPos > width) {
      this.xPos = 0;
    }

  }

  this.display = function () {
    fill(this.colorR, 0, 0);
    circle(this.size * 0.5 + this.xPos, this.yPos, this.size);
    circle(this.size * 1.5 + this.xPos, this.yPos, this.size);
    circle(this.size * 2.5 + this.xPos, this.yPos, this.size);
  }



  // this.ineract = function () {

  // }

}