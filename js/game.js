class Game {

  constructor() {
    console.log("Game constructor");
    this.ctx = document.getElementById("mycanvas").getContext("2d");
    this.map;
    this.inventory;
    this.hero;
    this.enemies;
    this.controller;
    this.gameOverScreen = new Image();
    this.gameOverScreen.src = "./img/gameover.png";
    this.gameOver;
  }

  init() {
    console.group("Initializing game");
    this.gameOver = false;

    // Initialize controls
    this.controller = new Controller();

    // Initialize map
    this.map = new Map(this.ctx);
    this.map.draw();

    // Initialize hero (6 points of life, 1 point of power)
    this.hero = new Hero(this.ctx, "./img/hero.png", this.map, 6, 1);
    this.hero.draw(this.hero.life);

    // Initialize inventory
    this.inventory = new Inventory(this.ctx);
    this.inventory.draw();

    // Initialize enemies array
    this.enemies = [new Enemy(this.ctx, "./img/enemyDevil.png", this.map, 1, 1), new Enemy(this.ctx, "./img/enemyDevil.png", this.map, 1, 1)];
    this.enemies.forEach(enemy => enemy.draw());

    // Game loop   
    let oldTimeStamp = 0;
    let gameLoop = timeStamp => {

      // Seconds passed since last frame
      let delta = (timeStamp - oldTimeStamp) / 1000;
      oldTimeStamp = timeStamp;
  
      // Update (only if player is alive)
      if(this.hero.life > 0) {
        this.hero.update(this.controller.keyPressed, delta, this.enemies);
        this.enemies.forEach(enemy => enemy.update(delta));
      }

      // Draw (only if the game is not over)
      if(!this.gameOver) {
        this.map.draw();
        this.hero.draw();
        this.inventory.draw(this.hero.life);
        this.enemies.forEach(enemy => enemy.draw());
      } else {
        // Game is over, check if player press N for new game
        console.log("Key pressed " + this.controller.keyPressed );
        if(this.controller.keyPressed == "N") {
          location.reload();  
        }
      }

      //Check heroe death
      if(this.hero.life <= 0) this.showGameOver();

      this.showFps(delta);
      window.requestAnimationFrame(gameLoop);
    }
    window.requestAnimationFrame(gameLoop);
  }

  showGameOver() {
    console.log("gameover");
    setTimeout(()=> {
      this.gameOver = true;
      this.ctx.save();
      this.ctx.fillStyle = '#000';
      this.ctx.fillRect(0, 0, 920, 600);
      this.ctx.drawImage(this.gameOverScreen, 0, 0, 920, 600); 
      this.ctx.restore();
   }, 2000);  // Two seconds delay before black screen
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