function preload() {
  // put preload code here
}

function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight, WEBGL)
}

function draw() {
  // put drawing code here
  background(255)
  translate(-450,-250,0)
  rotateX(frameCount * 0.01)
  rotateY(frameCount * 0.01)
  rotateZ(frameCount * 0.01)
  plane(160, 60)
}
