class Hero {

  constructor(ctx, imgSrc, posX = 200, posY = 200, speed = 100, size = 40) {
    this.ctx = ctx;
    this.posX = posX;
    this.posY = posY;
    this.speed = speed;
    this.size = size;
    this.character = new Image();
    this.character.src = imgSrc;
  }

  update(movement, delta) {
    switch(movement) {
      case "left":
        this.posX -= this.speed * delta;
        break;
      case "right":
        this.posX += this.speed * delta;
        break;
      case "down":
        this.posY += this.speed * delta;
        break;
      case "up":
        this.posY -= this.speed * delta;
        break;      
    }
  }

/*   draw() {
    // Needed to be sure the tileSheet is already loaded before trying to draw it
    this.character.onload = function() {
      this.drawCharacter();
    }.bind(this);
  } */

  draw() {
    //console.log("Draws hero");
    this.ctx.drawImage(this.character, 0, 0, 40, 40, this.posX, this.posY, this.size, this.size);
  }
}