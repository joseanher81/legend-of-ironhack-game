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
    this.introScreen = new Image();
    this.introScreen.src = "./img/intro.png";
    this.victoryScreen = new Image();
    this.victoryScreen.src = "./img/win.png";
    this.audioCtr = new AudioController();
    this.initialized = false;
    this.rickActived = false;
  }

  init() {
    let wtf = () =>{
      document.removeEventListener("keydown", wtf, true);
      this.startGame() 
    };
    document.addEventListener("keydown", wtf, true);
    this.ctx.fillStyle = '#FFF';
    this.ctx.fillRect(0, 0, 920, 600);
    this.introScreen.onload = () => this.ctx.drawImage(this.introScreen, 0, 0, 920, 600);
  }

  startGame() {
    console.group("Initializing game");
    //document.removeEventListener("keydown", this.startGame, true);
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
  
      // Update (only if player is alive and game not ended)
      if(this.hero.life > 0 && !this.gameOver) {
        this.hero.update(this.controller.keyPressed, delta, this.enemies);
        this.enemies.forEach(enemy => enemy.update(delta));
      }

      // Draw (only if the game is not over)
      if(!this.gameOver && this.initialized) {
        this.map.draw();
        this.hero.draw();
        this.inventory.draw(this.hero.life, this.hero.currentWeapon.srcInv);
        this.enemies.forEach(enemy => enemy.draw());
      } else {
        // Game is over, check if player press N for new game
        console.log("Key pressed " + this.controller.keyPressed );
        if(this.controller.keyPressed) {
          location.reload();  
        }
      }

      //Check heroe death
      if(this.hero.life <= 0) this.showGameOver();

      // Check heroe victory
      if(this.enemies.length == 0 && this.map.nextMap == "end") this.showVictory();

      // Is the heroe in an exit tile? Then LOAD another map (previous or next)
      if(this.map.getTileAtPositionXY(this.hero.posX + (this.hero.size/2), this.hero.posY + (this.hero.size/2) - this.map.startY) == 99) this.initialize(this.map.nextMap, false);
      if(this.map.getTileAtPositionXY(this.hero.posX + (this.hero.size/2), this.hero.posY + (this.hero.size/2) - this.map.startY) == 0) this.initialize(this.map.prevMap, true);

      // Check for Rick activation
      if(this.controller.keyPressed == "r") {
        this.rickActived = true;
        this.audioCtr.changeBackground("./audio/rick.ogg")
      }
      
      //this.showFps(delta);
      window.requestAnimationFrame(gameLoop);
    }
  
    window.requestAnimationFrame(gameLoop);
  }

  initialize(mapName, back) {
    this.initialized = false;

    // Initialize map
    this.map = new Map(this.ctx, window[mapName]);  // we use window to transform a string variable name to a proper variable
    this.map.draw();
    
    // Initialize hero from map
    let heroeMap = this.map.heroe;
    this.hero = new Hero(this.ctx, this.map, heroeMap.imgSrc, (this.hero != undefined) ? this.hero.life : heroeMap.life, back ? heroeMap.backPosX : heroeMap.startPosX, back ? heroeMap.backPosY : heroeMap.startPosY, (this.hero != undefined) ? this.hero.currentWeapon : undefined);
    this.hero.draw();
    
    // Initialize inventory
    this.inventory = new Inventory(this.ctx);
    this.inventory.draw(this.hero.life, this.hero.currentWeapon.srcInv);
    
    // Load enemies from map
    this.enemies = []; // reset array first
    if (this.map.nextMap == "end" && this.rickActived) {
      this.map.enemies[0].type = "rick";
      this.enemies.push(Utils.createEnemy(this.map.enemies[0], this.ctx, this.map, this.hero)); // Rick load
    } else {
      this.map.enemies.forEach(enemy => this.enemies.push(Utils.createEnemy(enemy, this.ctx, this.map, this.hero))); // Normal load
    }
    
    this.enemies.forEach(enemy => enemy.draw());

    // Initialize music
    if(this.map.nextMap == "end" && !this.rickActived) this.audioCtr.playBackgroundCastle();
    this.audioCtr.playBackground();

    this.initialized = true;

  }
  
  showIntro() {
    this.ctx.fillStyle = '#000';
    this.ctx.fillRect(0, 0, 920, 600);
    this.ctx.drawImage(this.gameOverScreen, 0, 0, 920, 600); 
  }

  showGameOver() {
    console.log("gameover");
    this.audioCtr.stopBackground();
    this.audioCtr.playDeath();
    setTimeout(()=> {
      this.gameOver = true;
      this.ctx.save();
      this.ctx.fillStyle = '#000';
      this.ctx.fillRect(0, 0, 920, 600);
      this.ctx.drawImage(this.gameOverScreen, 0, 0, 920, 600); 
      this.ctx.restore();
   }, 2000);  // Two seconds delay before black screen
  }

  showVictory() {
    this.audioCtr.stopBackground();
    this.audioCtr.playVictory();
    this.ended = true;
    setTimeout(()=> {
      this.audioCtr.playVictory();
      this.gameOver = true;
      this.ctx.save();
      this.ctx.fillStyle = '#000';
      this.ctx.fillRect(0, 0, 920, 600);
      this.ctx.drawImage(this.victoryScreen, 0, 0, 920, 600); 
      this.ctx.restore();
   }, 5000);  // five seconds delay before black screen
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