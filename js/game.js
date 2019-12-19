class Game {

  constructor() {
    console.log("Game constructor");
    this.ctx = document.getElementById("mycanvas").getContext("2d");
    this.map;
    this.inventory;
    this.hero;
    this.enemies = [];
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

    this.initialize("map01");

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
        this.inventory.draw(this.hero.life, this.hero.currentWeapon.srcInv);
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

      // Is the heroe in an exit tile? Then LOAD another map (previous or next)
      if(this.map.getTileAtPositionXY(this.hero.posX + (this.hero.size/2), this.hero.posY + (this.hero.size/2) - this.map.startY) == 99) this.initialize(this.map.nextMap, false);
      if(this.map.getTileAtPositionXY(this.hero.posX + (this.hero.size/2), this.hero.posY + (this.hero.size/2) - this.map.startY) == 0) this.initialize(this.map.prevMap, true);

      this.showFps(delta);
      window.requestAnimationFrame(gameLoop);
    }
    window.requestAnimationFrame(gameLoop);
  }

  initialize(mapName, back) {
    // Initialize map
    this.map = new Map(this.ctx, window[mapName]);  // we use window to transform a string variable name to a proper variable
    this.map.draw();
    
    // Initialize hero from map
    let heroeMap = this.map.heroe;
    this.hero = new Hero(this.ctx, this.map, heroeMap.imgSrc, heroeMap.life, back ? heroeMap.backPosX : heroeMap.startPosX, back ? heroeMap.backPosY : heroeMap.startPosY);
    this.hero.draw();
    
    // Initialize inventory
    this.inventory = new Inventory(this.ctx);
    this.inventory.draw(this.hero.life, this.hero.currentWeapon.srcInv);
    
    // Load enemies from map
    this.enemies = []; // reset array first
    this.map.enemies.forEach(enemy => this.enemies.push(Utils.createEnemy(enemy, this.ctx, this.map, this.hero)));
    this.enemies.forEach(enemy => enemy.draw());
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