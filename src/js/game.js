class Game {

  constructor() {
    console.log("Game constructor");
    this.ctx = document.getElementById("mycanvas").getContext("2d");
    this.map;
    this.inventory;
    this.hero;
    this.controller;
  }

  init() {
    console.group("Initializing game");

    // Initialize controls
    this.controller = new Controller();

    // Initialize map
    this.map = new Map(this.ctx);
    this.map.draw();

    // Initialize inventory
    this.inventory = new Inventory(this.ctx);
    this.inventory.draw();

    // Initialize hero
    this.hero = new Hero(this.ctx, "./img/hero.png");
    this.hero.draw();

    // Game loop
    let oldTimeStamp = 0;
    let gameLoop = timeStamp => {

      // Seconds passed since last frame
      let delta = (timeStamp - oldTimeStamp) / 1000;
      oldTimeStamp = timeStamp;
  
      // Update
      this.hero.update(this.controller.keyPressed, delta);
  
      // Collision detection
  
  
      // Clear
  
  
      // Draw
      this.map.draw();
      this.inventory.draw();
      this.hero.draw();
      this.showFps(delta);

      window.requestAnimationFrame(gameLoop);
    }

    window.requestAnimationFrame(gameLoop);
  }

  showFps(delta) {
    //Calculate fps
    var fps = Math.round(1 / delta);

    //Draw number to the screen
    this.ctx.font = '20px Arial';
    this.ctx.fillStyle = 'white';
    this.ctx.fillText("FPS: " + fps, 10, 30);
  }

}