//Variables created and to be used throughout the code.
var locationX=0, locationY=0;//The x and y location that the circle will be displayed.
var circleSize=0; //The size that the circle will be.
var r=0,g=0,b=0; //Contains the Red, Green and Blue colors.

function setup() {
  createCanvas(400,400);
  //Indicates that the location of the circle will be randomly selected. 
  locationX=random(width);
  locationY=random(height);
  circleSize=30;
  //Indicates that the conbination of color will be random.
  r=random(255);
  g=random(255);
  b=random(255);
}

function draw() {
 background(224,255,255); //Background color.
  //Settings of the circle.
 strokeWeight(1);
 stroke(r,g,b);
 fill(r,g,b,125);
  //Drawing the shape.
 ellipse(locationX,locationY,circleSize);
}
//This function will allow the user to interact with the object: For example each time the user clicks on the circle it will change its position and color.
function mousePressed(){
var clicC=dist(mouseX, mouseY, locationX,locationY);
	if(clicC<15){
		r=random(255);
		g=random(255);
		b=random(255);
    locationX=random(width);
    locationY=random(height);
	}
}