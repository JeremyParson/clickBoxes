let color = "blue";
let color2 = "blue";

let yPos = 300;
let xPos = 300;
let yDir = 8;
let xDir = 4;

let yPos2 = 300;
let xPos2 = 300;
let yDir2 = 8;
let xDir2 = 4;

function setup(){
    createCanvas(600, 600);
    background(0);
    rectMode(CENTER);
    fill(color);
    rect(xPos, yPos, 100, 100);
    rect(xPos2, yPos2, 100, 100);
}

function draw(){
    background(0);
    fill(color);
    rect(xPos, yPos, 100, 100);
    fill(color2);
    rect(xPos2, yPos2, 100, 100);
    xPos += xDir;
    yPos += yDir;
    xPos2 -= xDir2;
    yPos2 -= yDir2;
    collisionCheck();
}

function mousePressed(){
    if(mouseY > (yPos - 50) && mouseY < (yPos + 50) && mouseX > (xPos - 50) && mouseX < (xPos + 50)){
        if(color == "red"){
            color = "blue";
        }else{
            color = "red";
        }
    }

    if(mouseY > (yPos2 - 50) && mouseY < (yPos2 + 50) && mouseX > (xPos2 - 50) && mouseX < (xPos2 + 50)){
        if(color2 == "red"){
            color2 = "blue";
        }else{
            color2 = "red";
        }
    }
}

function collisionCheck(){

    //barrier collision
    if(xPos > 600){
        yDir *= 1;
        xDir *= -1;
    }
    if(xPos < 0){
        yDir *= 1;
        xDir *= -1;
    }
    if(yPos > 600){
        yDir *= -1;
        xDir *= 1;
    }
    if(yPos < 0){
        yDir *= -1;
        xDir *= 1;
    }

    if(xPos2 > 600){
        yDir2 *= 1;
        xDir2 *= -1;
    }
    if(xPos2 < 0){
        yDir2 *= 1;
        xDir2 *= -1;
    }
    if(yPos2 > 600){
        yDir2 *= -1;
        xDir2 *= 1;
    }
    if(yPos2 < 0){
        yDir2 *= -1;
        xDir2 *= 1;
    }
    
}