let texturaTierra

function preload() {
  // put preload code here
  texturaTierra = loadImage("./images/tierra.jpg")
}

function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight, WEBGL)
}

function draw() {
  // put drawing code here
  background(255)
  translate(-450,-200,0)

  push()
  fill(255,0,0)
  rotateX(frameCount * 0.01)
  rotateY(frameCount * 0.01)
  rotateZ(frameCount * 0.01)
  texture(texturaTierra)
  plane(160, 60)
  pop()

  translate(200,0,0)
  push()
  fill(0,0,255)
  rotateX(frameCount * 0.01)
  rotateY(frameCount * 0.01)
  rotateZ(frameCount * 0.01)
  texture(texturaTierra)
  sphere(80,60)
  pop()

  translate(200,0,0)
  push()
  rotateX(frameCount * 0.01)
  rotateY(frameCount * 0.01)
  rotateZ(frameCount * 0.01)
  texture(texturaTierra)
  noStroke()
  box(80,60, 40)
  pop()

  translate(200,0,0)
  push()
  rotateX(frameCount * 0.01)
  rotateY(frameCount * 0.01)
  rotateZ(frameCount * 0.01)
  texture(texturaTierra)
  noStroke()
  torus(60,40)
  pop()

  translate(-600,250,0)
  push()
  rotateX(frameCount * 0.01)
  rotateY(frameCount * 0.01)
  rotateZ(frameCount * 0.01)
  texture(texturaTierra)
  noStroke()
  cone(80, 120)
  pop()
  
  translate(200,0,0)
  push()
  rotateX(frameCount * 0.01)
  rotateY(frameCount * 0.01)
  rotateZ(frameCount * 0.01)
  texture(texturaTierra)
  noStroke()
  cylinder(60,120)
  pop()

  translate(200,0,0)
  push()
  rotateX(frameCount * 0.01)
  rotateY(frameCount * 0.01)
  //rotateZ(frameCount * 0.01)
  texture(texturaTierra)
  noStroke()
  ellipsoid(80,40)
  pop()

}
