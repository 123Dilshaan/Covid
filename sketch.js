var gameState = "start";
var houseImg, livingRoomImg, marketImg;
var place;
var click;
var button2, button3, button4, button5, button6;
var flag = false;

function preload() {
  houseImg = loadImage("Images/home.png");
  livingRoomImg = loadImage("Images/livingRoom.png");
  marketImg = loadImage("Images/superMarket.png");
  click = loadSound("Sounds/click.mp3");
}

function setup() {
  var canvas = createCanvas(1200, 400);
  background(255, 159, 231);
  if (gameState === "start") {
  start();
  }
}

function draw() {
  //background(255);
  if (gameState === "instruction") {
    instructions();
  }
  /*if (gameState === "play") {
    button6 = createButton("Menu");
    button6.position(600, 370);
    if (flag) {
      background("yellow");
    }
    
    button6.mousePressed(() => {
      click.play();
      button6.hide();
      console.log("pressed");
      flag = true;
     
    button7 = createButton("Living Room");
  button7.position(100, 150);
  button7.mousePressed(() => {
 if(!flag){
    background(livingRoomImg);}
    button7.hide();
    gameState = "play";
    place = "livingRoom";
    click.play();
  });
    });*/

  if (place === "outside") {
    if (!flag) {
      background(houseImg);
    }

    if (!button3) {
      button3 = createButton("Living Room");
      button3.position(1100, 50);
      button3.mousePressed(() => {
        button3.hide();
        place = "living room";
        gameState = "play";
        click.play();
      });
    }
    if (!button4) {
    button4 = createButton("Market");
    button4.position(1100, 100);
    button4.mousePressed(() => {
      background(marketImg);
      button4.hide();
      gameState = "play";
      place = "market";
      click.play();
    });
  } 
}

  if (place === "living room") {
    if (!flag) {
      background(livingRoomImg);
    }

        if(!button5){
        button5 = createButton("Home Screen");
        button5.position(1100, 100);
        button5.mousePressed(() => {
          button5.hide();
          gameState = "play";
          place = "outside";
          click.play();
        });
        
      }}
  if(place==="market"){
    if(!button6){
      button6 = createButton("Home Screen");
      button6.position(1100, 100);
      button6.mousePressed(() => {
        button6.hide();
        gameState = "play";
        place = "outside";
        click.play();
      });
      } 
  
  }
}

  
function start () { 
  gameState="start";
  stroke(0);
  fill(186, 73, 255);
  textFont("jokerman");
  textSize(40);
  text("⚠ COVID Safety ⚠", 450, 50);

  noStroke();
  textFont("ink free");
  fill("black");
  textSize(20);
  text(
    "Corona virus has taken over the world, leaving all locked up in their homes. This pandemic has affected thousands of peoples,",
    25,
    150
  );
  text(
    " who are either sick or are being killed due to the spread of this disease. Let's learn how we can keep us safe. Click start to play.",
    25,
    170
  );
  button1 = createButton("Start");
  button1.position(600, 370);
  button1.mousePressed(() => {
    button1.hide();
    gameState = "instruction";
    click.play();
  });
}

function instructions() {
  background(255, 159, 231);
  stroke(0);
  fill(186, 73, 255);
  textFont("Times New Roman");
  textSize(40);
  text("Here's your schedule", 450, 50);

  if (!button2) {
    button2 = createButton("Play");
    button2.position(600, 370);
    button2.mousePressed(() => {
      console.log(5);
      button2.hide();
      gameState = "play";
      place = "outside";
      click.play();
    });
  }
}

//function menu() {
//background(255, 159, 231);
/*
  button5 = createButton("Kitchen");
  button5.position(100, 100);
  button5.mousePressed(() => {
    background(kitchenImg);
    button5.hide();
    gameState = "play";
    place = "kitchen";
    click.play();
  });
  button7 = createButton("Living Room");
  button7.position(100, 150);
  button7.mousePressed(() => {
    background(livingRoomImg);
    button7.hide();
    gameState = "play";
    place = "livingRoom";
    click.play();
  });

  button9 = createButton("Market");
  button9.position(100, 200);
  button9.mousePressed(() => {
    background(marketImg);
    button9.hide();
    gameState = "play";
    place = "market";
    click.play();
  });

  button11 = createButton("Outside");
  button11.position(100, 250);
  button11.mousePressed(() => {
    background(houseImg);
    button11.hide();
    gameState = "play";
    place = "outside";
    click.play();
  });

  button10 = createButton("Close");
  button10.position(1100, 50);
}*/
