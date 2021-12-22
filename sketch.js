let cirX, cirY, col1, col2, col3, r;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  if (mouseIsPressed) {
    background(0);
  }
  cirX = random(0, windowWidth);
  cirY = random(0, windowHeight);
  col1 = random(0, 255);
  col2 = random(0, 255);
  col3 = random(0, 255);
  opa = random(0, 255);
  r = random(1, 50);

  fill(col1, col2, col3, opa);
  noStroke();
  ellipse(cirX, cirY, r, r);
}

// function mousePressed() {
//   background(0)
// }
