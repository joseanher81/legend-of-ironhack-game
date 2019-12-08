class Hero {

  constructor(ctx, imgSrc, posX = 200, posY = 200, speed = 100, size = 40) {
    this.ctx = ctx;
    this.posX = posX;
    this.posY = posY;
    this.speed = speed;
    this.size = size;
    this.character = new Image();
    this.character.src = imgSrc;
    this.spriteX = 0;
    this.spriteY = 0;
    this.spriteRefresh = 0;
  }

  update(movement, delta) {
    switch(movement) {
      case "left":
        this.posX -= this.speed * delta;
        this.spriteY = 1; // Look to the left
        break;
      case "right":
        this.posX += this.speed * delta;
        this.spriteY = 2;  // Look to the right
        break;
      case "down":
        this.posY += this.speed * delta;
        this.spriteY = 0;  // Look down
        break;
      case "up":
        this.posY -= this.speed * delta;
        this.spriteY = 3;  // Look up
        break;      
    }

    // Sprite animation (with reset)  TODO probably I can do this better
    this.spriteRefresh++;
    if(this.spriteRefresh == 5) {
      this.spriteRefresh = 0;
      this.spriteX++;
      if(this.spriteX > 2) this.spriteX = 0;
    }

    if(movement == "") this.spriteX = 0; // Idle state

  }

/*   draw() {
    // Needed to be sure the tileSheet is already loaded before trying to draw it
    this.character.onload = function() {
      this.drawCharacter();
    }.bind(this);
  } */

  draw() {
    //console.log("Draws hero");
    this.ctx.drawImage(this.character, this.spriteX * this.size, this.spriteY * this.size, 40, 40, this.posX, this.posY, this.size, this.size);
  }
}