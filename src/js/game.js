class Game {

  constructor() {
    console.log("Game constructor");
    this.ctx = document.getElementById("mycanvas").getContext("2d");
    this.map;
    this.inventory;
    this.hero;
  }

  init() {
    console.group("Initializing game");

    // Initialize map
    this.map = new Map(this.ctx);
    this.map.draw();

    // Initialize inventory
    this.inventory = new Inventory(this.ctx);
    this.inventory.draw();

    // Initialize hero
    this.hero = new Character(this.ctx);
    this.hero.draw();


    window.requestAnimationFrame(this.gameLoop);
  }

  gameLoop(timeStamp) {

    // Seconds passed since last frame
    //let secondsPassed = (timeStamp - oldTimeStamp) / 1000;
    //oldTimeStamp = timeStamp;


    // Update


    // Collision detection


    // Clear


    // Draw
    this.map.draw();
    this.inventory.draw();


    window.requestAnimationFrame(gameLoop);
  }

}