class Controller {

  constructor() {
    document.addEventListener("keydown", this.keyDownHandler.bind(this), false);
    document.addEventListener("keyup", this.keyUpHandler.bind(this), false);
    this.keys = {LEFT: 'left', RIGHT: 'right', UP: 'up', DOWN: 'down' };
    this.keyPressed = '';
  }

  keyDownHandler(e) {
    switch(e.key) {
      case "ArrowRight":
        this.keyPressed = "right"; 
        break; 
      case "ArrowLeft":
        this.keyPressed = "left"; 
        break;
      case "ArrowUp":
        this.keyPressed = "up"; 
        break;
      case "ArrowDown":   
        this.keyPressed = "down"; 
        break;  
      case " ":
        this.keyPressed = "space";
        break;
      case "r":
      case "R":
        this.keyPressed = "r";
        break;                   
    }
  }

  keyUpHandler(e) {
    if(e.key == "ArrowRight" && this.keyPressed == "right"){
      this.keyPressed = ""; 
    }
    else if(e.key == "ArrowLeft" && this.keyPressed == "left"){
      this.keyPressed = ""; 
    }
    else if(e.key == "ArrowUp" && this.keyPressed == "up"){
      this.keyPressed = ""; 
    }
    else if(e.key == "ArrowDown" && this.keyPressed == "down"){
      this.keyPressed = ""; 
    }
    else if(e.key == " " && this.keyPressed == "space"){
      this.keyPressed = ""; 
    }
    else if((e.key == "R" || e.key == "r") && (this.keyPressed == "R" || this.keyPressed == "r")){
      this.keyPressed = ""; 
    }
    
  } 

  
}