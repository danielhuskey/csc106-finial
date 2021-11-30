var playerOneSettingsToggle = 0;
var playerTwoSettingsToggle = 0;
var playerOneColor;
var playerTwoColor; 
var settingsOpen = false;
var playerOneSettingsOpen = false;
var playerTwoSettingsOpen = false;
var cColor =1;

var Button = function(config) {
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.width = config.width || 85;
    this.height = config.height || 75;
    this.label = config.label || "Click";
    this.color = config.color || color(255, 0, 255);
    this.textSize = config.textSize|| 10;
};

Button.prototype.draw = function() {
    fill(this.color);
    rect(this.x, this.y, this.width, this.height, 5);
    fill(255, 255, 255);
    textSize(this.textSize);
    textAlign(LEFT, TOP);
    text(this.label, this.x, this.y+this.height/4);
};

Button.prototype.isMouseInside = function() {
    return mouseX > this.x &&
           mouseX < (this.x + this.width) &&
           mouseY > this.y &&
           mouseY < (this.y + this.height);
};

var startButton = new Button({
    x: 162.5,
    y: 303,
    label: "  Start",
    color: color(74, 74, 74)
});
var settingsButton = new Button({
     x: 9,
    y: 12,
    label: "Settings",
    color: color(74, 74, 74)
});
var backButton = new Button({
    x: 9,
    y: 12,
    label: "  Back",
    color: color(74, 74, 74),
    textSize: 28
});
var playerOneButton = new Button({
    x: 50,
    y: 255,
    label: "Player One",
    color: color(74, 74, 74),
    textSize: 17

});
var playerTwoButton = new Button({
    x: 250,
    y: 255,
    label: "Player Two",
    color: color(74, 74, 74),
    textSize: 17

});
var redButtonP1 = new Button({
    x: 100,
    y: 180,
    label: "     Red",
    color: color(255, 0, 0),
    textSize: 17

});
var blueButtonP1 = new Button({
    x: 15,
    y: 180,
    label: "     Blue",
    color: color(0, 0, 255),
    textSize: 17

});
var blackButtonP1 = new Button({
    x: 50,
    y: 105,
    label: "     Black",
    color: color(0, 0, 0),
    textSize: 17

});
var redButtonP2 = new Button({
    x: 203,
    y: 180,
    label: "     Red",
    color: color(255, 0, 0),
    textSize: 17

});
var blueButtonP2 = new Button({
    x: 287,
    y: 180,
    label: "     Blue",
    color: color(0, 0, 255),
    textSize: 17

});
var blackButtonP2 = new Button({
    x: 247,
    y: 105,
    label: "     Black",
    color: color(0, 0, 0),
    textSize: 17

});
var mainSplashScreen = function(){
    background(2, 62, 173);
    startButton.draw();
    settingsButton.draw();
};
var settingsSplashScreen = function(){
    background(2, 62, 173);
    backButton.draw();
    playerOneButton.draw();
    playerTwoButton.draw();

};

var playerOneColorScreen = function(){
    redButtonP1.draw();
    blueButtonP1.draw();
    blackButtonP1.draw();
};
var playerTwoColorScreen = function(){
    redButtonP2.draw();
    blueButtonP2.draw();
    blackButtonP2.draw();
    playerOneButton.draw();

};
var gameScreen = function(){
    for(var x=0;x<=8;x++){
        for(var i = 0; i<=8;i++){
         if(cColor === 1){
             fill(0, 0, 0);
             cColor=0;
         }
         else if(cColor===0){
             fill(255, 255, 255);
             cColor=1;
         }
         rect(50*x,50*i,50,50);   
        }
        
    }
    fill(playerOneColor);
    rect(50,55,55,50);
    fill(playerTwoColor);
    rect(50,180,55,50);
};


mouseClicked = function() {
  if(settingsButton.isMouseInside()&&settingsOpen === false) {
     settingsSplashScreen();
     settingsOpen = true;
    }
  else if(backButton.isMouseInside()&&settingsOpen === true){
     mainSplashScreen(); 
     settingsOpen = false;
  }
  else if (playerOneButton.isMouseInside()) {
    playerOneSettingsToggle += 1;
    playerOneSettingsOpen = true;
  }
  else if (playerTwoButton.isMouseInside()) {
    playerTwoSettingsToggle += 1;
    playerTwoSettingsOpen = true;
  }
  else if(redButtonP1.isMouseInside()&&playerOneSettingsOpen===true) {
     playerOneColor = color(255, 0, 0);
  } 
  else if(redButtonP2.isMouseInside()&&playerTwoSettingsOpen===true) {
     playerTwoColor = color(255, 0, 0);
  }   
  else if(blackButtonP1.isMouseInside()&&playerOneSettingsOpen===true) {
      playerOneColor = color(0, 0, 0);
  }
  else if(blackButtonP2.isMouseInside()&&playerTwoSettingsOpen===true) {
      playerTwoColor = color(0, 0, 0);
  }
  else if (blueButtonP1.isMouseInside()&&playerOneSettingsOpen===true) {
      playerOneColor =color(0, 0, 255);
  }
  else if (blueButtonP2.isMouseInside()&&playerTwoSettingsOpen===true) {
      playerTwoColor =color(0, 0, 255);
  }
  else if (startButton.isMouseInside()) {
    gameScreen();
  
    }
};


mainSplashScreen();



draw = function() {
    
 if (settingsOpen ===true){
     fill(playerOneColor);
     rect(10,371,101,140);
     fill(playerTwoColor);
     rect(268,371,101,140);
 }
  if(playerOneSettingsToggle ===1&&settingsOpen ===true){
    playerOneColorScreen();
  }
  if(playerOneSettingsToggle >=2&&settingsOpen ===true){
      playerOneSettingsToggle =0;
      playerOneSettingsOpen = false;
      settingsSplashScreen();
  }  
  if(playerTwoSettingsToggle ===1&&settingsOpen ===true){
    playerTwoColorScreen();
  }
  if(playerTwoSettingsToggle >=2&&settingsOpen ===true){
      playerTwoSettingsToggle =0;
      playerTwoSettingsOpen = false;
      settingsSplashScreen();     
  }  
};


